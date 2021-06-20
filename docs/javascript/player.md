# Get Player Data

GetPlayerData is a function for getting your account's JSON object.

## Examples

Here is an example:
```js
const prodigy = require("prodigy-api");

(async() => {
    let player = await prodigy.tokenify("password", "username"); // Get your JWT token.
    let playerData = await prodigy.getPlayerData(player.token); // Use your token to get player JSON data.
    console.log(playerData); // Log your account JSON data to the console.
})();
```

## Parameters

GetPlayerData requires one parameter.
That being your JWT token.

This parameters must be a string.

There are no keywords.

## Output

Get Player Data returns your player data or the player data of the userID passed in.