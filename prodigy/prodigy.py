from typing import Any, Dict, List
from prodigy import gameData, gameStatus, player, tokenify, update_player, get_userID, get_friend_requests

class Prodigy:
    def __init__(self, username: str, password: str, log: bool = False) -> None:
        self.username = username
        self.password = password
        self.log = log
    def gameData(self) -> Dict[str, List[Dict]]:
        return gameData(self.log)
    def gameStatus(self) -> Dict[str, Any]:
        return gameStatus(self.log)
    def player(self) -> dict:
        return player(self.token(), log=self.log)
    def token(self) -> str:
        return tokenify(self.username, self.password)["token"]
    def update_player(self, data) -> str:
        return update_player(self.token(), data, self.log)
    def userID(self) -> int:
        return get_userID(self.token())
    def friend_requests(self) -> int:
        return get_friend_requests(self.token(), self.log)
