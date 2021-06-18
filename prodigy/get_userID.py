import base64
import json
from typing import TypedDict

class Content(TypedDict):
    userID: int

class ParsedJWT(TypedDict):
    content: Content
    iat: int
    exp: int

def parse_JWT(token: str) -> ParsedJWT:
    return json.loads(base64.b64decode(token.split(".")[1]))

def get_userID(token: str) -> int:
    return parse_JWT(token)["content"]["userID"]
