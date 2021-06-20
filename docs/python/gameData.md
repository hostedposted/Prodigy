# gameData

The gameData stores info on every item in prodigy.

For some reason prodigy gives every item a gender.
I have no idea why.

## Examples

Here is an example:
```py
from prodigy import gameData

gameData = gameData()

print("The name of the first boot in the game is:", gameData["boots"][0]["name"])
```

## Parameters

gameData accepts no parameters.

## Output

This outputs prodigy's gameData.

Prodigy's gameData follows something like this:

```py
from typing import List, TypedDict

class GameDataObject(TypedDict):
    ID: int
    assetID: int
    type: str
    gender: int
    data: dict
    metadata: dict
    name: str

class GameData(TypedDict):
    ad: List[GameDataObject]   
    affix: List[GameDataObject]
    atlas: List[GameDataObject]
    bgm: List[GameDataObject]
    bitmapFont: List[GameDataObject]
    boots: List[GameDataObject]
    boss: List[GameDataObject]
    bountyName: List[GameDataObject]
    bundle: List[GameDataObject]
    currency: List[GameDataObject]
    dailyReward: List[GameDataObject]
    dialogue: List[GameDataObject]
    dorm: List[GameDataObject]
    dormbg: List[GameDataObject]
    dungeon: List[GameDataObject]
    emote: List[GameDataObject]
    eyeColor: List[GameDataObject]
    face: List[GameDataObject]
    faceColor: List[GameDataObject]
    follow: List[GameDataObject]
    fontStyle: List[GameDataObject]
    fossil: List[GameDataObject]
    fsm: List[GameDataObject]
    gameFeed: List[GameDataObject]
    gender: List[GameDataObject]
    generic: List[GameDataObject]
    giftBox: List[GameDataObject]
    hair: List[GameDataObject]
    hairColor: List[GameDataObject]
    hat: List[GameDataObject]
    item: List[GameDataObject]
    itemTable: List[GameDataObject]
    key: List[GameDataObject]
    mathTownDecor: List[GameDataObject]
    mathTownFrame: List[GameDataObject]
    mathTownInterior: List[GameDataObject]
    mount: List[GameDataObject]
    name: List[GameDataObject]
    nickname: List[GameDataObject]
    orb: List[GameDataObject]
    outfit: List[GameDataObject]
    particleEffect: List[GameDataObject]
    pet: List[GameDataObject]
    prizeWheel: List[GameDataObject]
    relic: List[GameDataObject]
    sfx: List[GameDataObject]
    singleImage: List[GameDataObject]
    skinColor: List[GameDataObject]
    spell: List[GameDataObject]
    spellRelic: List[GameDataObject]
    spine: List[GameDataObject]
    streamedMap: List[GameDataObject]
    tiledMap: List[GameDataObject]
    tileset: List[GameDataObject]
    titan: List[GameDataObject]
    ui: List[GameDataObject]
    weapon: List[GameDataObject]
```