import base64
import json
from typing import Any, Dict, List
from prodigy import gameData, gameStatus, player, tokenify, updatePlayer

class Prodigy:
    def __init__(self, username: str, password: str) -> None:
        self.username = username
        self.password = password
    def gameData(self) -> Dict[str, List[Dict]]:
        return gameData()
    def gameStatus(self) -> Dict[str, Any]:
        return gameStatus()
    def player(self) -> dict:
        return player(self.token())
    def token(self) -> str:
        return tokenify(self.username, self.password)["token"]
    def updatePlayer(self, data) -> str:
        return updatePlayer(self.token(), data)
    def userID(self) -> int:
        return json.loads(base64.b64decode(self.token().split(".")[1]))["content"]["userID"]
