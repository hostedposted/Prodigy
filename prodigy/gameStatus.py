import json
import re
from typing import Any, Dict
import requests

def gameStatus() -> Dict[str, Any]:
    gameStatus = re.findall("(?<=gameStatusDataStr = ').+(?=')", requests.get("https://play.prodigygame.com/play").text)
    if not gameStatus:
        return None
    return json.loads(gameStatus[0])
