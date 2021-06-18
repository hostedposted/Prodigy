import json
import requests
from prodigy.get_userID import get_userID

def player(token: str, userID: int = None, log: bool = False) -> dict:
    if userID:
        return requests.get(f"https://api.prodigygame.com/game-api/v2/characters/{userID}?fields=inventory%2Cdata%2CisMember%2Ctutorial%2Cpets%2Cencounters%2Cquests%2Cappearance%2Cequipment%2Chouse%2Cachievements%2Cstate&userID={get_userID(token)}", headers={'Authorization': f"Bearer {token}"}).json()[userID]
    if log:
        print("Fetching data from token...")
    userID = get_userID(token)
    return requests.get(f"https://api.prodigygame.com/game-api/v1/character/{userID}?isMember=0&userID={userID}", headers={'Authorization': f"Bearer {token}"}).json()

def update_player(token: str, data: dict, log: bool = False) -> str:
    userID = get_userID(token)
    result = requests.post(f"https://api.prodigygame.com/game-api/v3/characters/{userID}", headers={"Authorization": f"Bearer {token}"}, data={"data": json.dumps(data), "userID": userID}).text()
    if log:
        print("Successfully updated.")
    return result