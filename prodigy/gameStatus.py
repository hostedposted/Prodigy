import json
import re
from typing import Any, Dict
import requests

def gameStatus(log: bool = False) -> Dict[str, Any]:
    if log:
        print("Fetching game status...")
    gameStatus = re.findall("(?<=gameStatusDataStr = ').+(?=')", requests.get("https://play.prodigygame.com/play").text)
    if not gameStatus:
        return None
    return json.loads(gameStatus[0])
