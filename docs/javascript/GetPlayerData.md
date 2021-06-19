# GetPlayerData

GetPlayerData is a function for getting your account's JSON object.

## Examples

Here is an example:
```js
const prodigy = require("prodigy-api");

(async function() {
    let player = await prodigy.tokenify("BuddyR11", "AGR2006"); // Get your JWT token.
    let PlayerData = await prodigy.getPlayerData(player); // Use your token to get player JSON data.
    console.log(PlayerData); // Log your account JSON data to the console.
})();
```

All methods must be awaited.

## Parameters

GetPlayerData requires one parameter.
That being your JWT token.

This parameters must be a string.

There are no keywords.

## Output
```json
"Currently working on getting an output!"
```
