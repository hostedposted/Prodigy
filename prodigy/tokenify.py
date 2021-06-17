import json
import re
from typing import Any, List, Literal, Type, TypedDict, Union
from urllib.parse import parse_qs, urlencode, urlparse
import requests
from bs4 import BeautifulSoup

class TokenifyOutput(TypedDict):
	authToken: str
	classIDs: List[int]
	curriculumOverride: Any
	curriculumTreeID: int
	goalId: Any
	grade: int
	isMember: Literal[0, 1]
	isTowerTownEnabled: bool
	lastVisited: str
	memberEndDate: Union[str, Type[None]]
	memberStartDate: Union[str, Type[None]]
	name: str
	objectID: int
	ownerIDs: List[int]
	parentEmail: Union[str, Type[None]]
	placementTestID: int
	registerDate: str
	token: str
	userID: int
	usertype: str

def tokenify(username: str, password: str) -> TokenifyOutput:
    s = requests.Session()
    r = s.get("https://sso.prodigygame.com/game/login")
    soup = BeautifulSoup(r.content, "lxml")
    auth = soup.select_one("input[name=authenticity_token]")["value"]
    data = {}
    data["utf8"] = "✓"
    data["authenticity_token"] = auth
    data["unauthenticated_game_login_form[username]"] = username
    data["unauthenticated_game_login_form[password]"] = password
    data["button"] = ""
    data["g-recaptcha-response"] = "15,38,39,39,4,39,4,4"
    login = s.post(r.url, 
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        },
        data = data,
        allow_redirects = True
    )

    if not login.ok and not str(login.status_code).startswith("3"):
        raise Exception(f"Initial login request was unsuccessful with code {login.status_code}.")

    clientID = re.findall("var client_id = '([0-9a-f]+)';", login.text)[0]
    data = {}

    data["client_id"] =  clientID
    data["redirect_uri"] = "https://play.prodigygame.com/play"
    data["response_type"] = "id_token token"
    data["scope"] = "openid profile email sid identity_provider"
    data["state"] = "b292a37841634f2eb2c6c283285e0e1a"
    data["nonce"] = "e651b05312b74195beb22f99a116c630"
    data["prompt"] = "login"
    data["mobilePlatform"] = "undefined"
    tokenLogin = s.get("https://sso.prodigygame.com/oauth/authorize?" + urlencode(data), allow_redirects=False)

    if not tokenLogin.ok and not str(tokenLogin.status_code).startswith("3"):
        raise Exception(f"First authentication request failed with a code of {tokenLogin.status_code}.")

    secondTokenLogin = s.get(tokenLogin.headers.get("location"), allow_redirects=False)

    if not secondTokenLogin.ok and not str(secondTokenLogin.status_code).startswith("3"):
        raise Exception(f"Second authentication request failed with a code of {secondTokenLogin.status_code}.")

    parsed = urlparse(secondTokenLogin.headers.get("location"))
    tokenInit = parse_qs(parsed.fragment)
    master = requests.post("https://api.prodigygame.com/game-auth-api/v4/user", data=json.dumps({"identityToken": tokenInit["access_token"][0]}), headers = {"Content-Type": "application/json"})
    
    if not master.ok:
        raise Exception(f"Master request failed with a code of {master.status_code}.")

    masterJSON = master.json()
    return masterJSON
