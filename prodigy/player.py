import base64
import json
import requests

def player(token: str) -> dict:
    userID = json.loads(base64.b64decode(token.split(".")[1]))["content"]["userID"]
    return requests.get(f"https://api.prodigygame.com/game-api/v1/character/{userID}?isMember=0&userID={userID}", headers={'Authorization': f"Bearer {token}"}).json()

def updatePlayer(token: str, data: dict) -> str:
    userID = json.loads(base64.b64decode(token.split(".")[1]))["content"]["userID"]
    return requests.post(f"https://api.prodigygame.com/game-api/v3/characters/{userID}", headers={"Authorization": f"Bearer {token}"}, data={"data": json.dumps(data), "userID": userID}).text()
