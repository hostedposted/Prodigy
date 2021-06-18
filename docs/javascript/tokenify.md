# Tokenify

Tokenify is a tool for getting your JWT token and other info.

## Examples

Here is an example:
```js
const prodigy = require("prodigy")

(async function() {
	let player = await prodigy.tokenify("USERNAME", "PASSWORD")
  console.log(player.token)
})();
```

All methods must be awaited.

## Parameters

Tokenify requires two parameters.
Being username and password.

Each of these should be strings.

There are no keywords.

## Output

Tokenify output's a dictionary following this schema:
```json
{
    "$schema": "http://json-schema.org/schema#",
    "type": "object",
    "properties": {
        "objectID": {
            "type": "integer"
        },
        "curriculumOverride": {
            "type": "null"
        },
        "curriculumTreeID": {
            "type": "string"
        },
        "lastVisited": {
            "type": "string"
        },
        "registerDate": {
            "type": "string"
        },
        "classIDs": {
            "type": "array"
        },
        "ownerIDs": {
            "type": "array"
        },
        "primaryParentID": {
            "type": "null"
        },
        "isTowerTownEnabled": {
            "type": "boolean"
        },
        "placementTestID": {
            "type": "null"
        },
        "goalId": {
            "type": "null"
        },
        "gradeId": {
            "type": "string"
        },
        "grade": {
            "type": "integer"
        },
        "userID": {
            "type": "integer"
        },
        "usertype": {
            "type": "string"
        },
        "authToken": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "token": {
            "type": "string"
        }
    },
    "required": [
        "authToken",
        "classIDs",
        "curriculumOverride",
        "curriculumTreeID",
        "goalId",
        "grade",
        "gradeId",
        "isTowerTownEnabled",
        "lastVisited",
        "name",
        "objectID",
        "ownerIDs",
        "placementTestID",
        "primaryParentID",
        "registerDate",
        "token",
        "userID",
        "usertype"
    ]
}
```
