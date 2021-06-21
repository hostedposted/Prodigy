# Get Player Data

GetPlayerData is a function for getting your account's JSON object.

## Examples

Here is an example:
```js
const prodigy = require("prodigy-api");

(async function() {
    let player = await prodigy.tokenify("BuddyR11", "AGR2006"); // Get your player login data.
    let token = player.token; // Get JWT token out of login data.
    let PlayerData = await prodigy.getPlayerData(token); // Use token to get player JSON data.
    console.log(PlayerData); // Log your account JSON data to the console.
})();
```

## Parameters

GetPlayerData requires one parameter.
That being your JWT token.

This parameters must be a string.

There are no keywords.

## Output

Get Player Data returns your player data or the player data of the userID passed in.

The output is very long so for that reason, I've made an outside example [here](https://pastebin.com/raw/GyfFg7Pe).