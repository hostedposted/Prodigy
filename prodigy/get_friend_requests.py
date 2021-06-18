from typing import List, Type, TypedDict
import requests
from prodigy.get_userID import get_userID

class UserIDObject(TypedDict):
    userID: int

class FriendRequests(TypedDict):
    error: Type[None]
    data: List[UserIDObject]
    meta: dict

def get_friend_requests(token: str, log: bool = False):
    userID = get_userID(token)
    if log:
        print("Fetching player friend requests...")
    friendreq = requests.get(f"https://api.prodigygame.com/friend-api/v1/friend/{userID}/request?userID={userID}&offset=0&limit=20", headers={"Authorization": f"Bearer {token}"})
    if not friendreq.ok:
        raise Exception(f"The friends page request was unable to be fetched with a code of {friendreq.status_code}.")
    return friendreq.json()
