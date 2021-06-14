from typing import Type, Union
from urllib.parse import ParseResult
from prodigy.gameData import GameDataObject

def get_asset(obj: GameDataObject) -> Union[ParseResult, Type[None]]:
    if not obj["metadata"].get("vIcon"):
        return None
    return f"https://cdn.prodigygame.com/game/assets/v1_cache/single-images/icon-{obj['type']}-{obj['ID']}/{obj['metadata']['vIcon']}/icon-{obj['type']}-{obj['ID']}.png"
