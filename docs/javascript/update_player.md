# Update Player Data

This is a function for updating player data on prodigy's servers.

## Examples

Here is an example:
```js
const prodigy = require("prodigy-api");

(async function() {
    let data = {};
    let player = await prodigy.tokenify("USERNAME", "PASSWORD"); // Get your player login data.
    let token = player.token; // Get JWT token out of login data.
    prodigy.updatePlayerData(token, data);
})();
```
Do not do this! Setting player data to an empty JSON object will reset your account.

Instead, edit pieces of the data accordingly (For example: set your level to 100):
```js
const prodigy = require("prodigy-api");

(async function() {
    let player = await prodigy.tokenify("USERNAME", "PASSWORD"); // Get your player login data.
    let token = player.token; // Get JWT token out of login data.
    let PlayerData = prodigy.getPlayerData(token); // Use token to get player JSON data.
    PlayerData.data.level = 100 // Edit level property in player JSON data.
    prodigy.updatePlayerData(token, PlayerData) // Push the edited player JSON data back into the account.
})();
```
Another example (Set gold to 100,000):
```js
const prodigy = require("prodigy-api");

(async function() {
    let player = await prodigy.tokenify("USERNAME", "PASSWORD"); // Get your player login data.
    let token = player.token; // Get JWT token out of login data.
    let PlayerData = prodigy.getPlayerData(token); // Use token to get player JSON data.
    PlayerData.data.gold = 100000 // Edit gold property in player JSON data.
    prodigy.updatePlayerData(token, PlayerData) // Push the edited player JSON data back into the account.
})();
```

## Parameters

Update player requires one parameter. Being token.

Token should be a string.

There are no keywords.

## Output

This will output nothing if the request was sent successfully.

Otherwise, it will log an error to inform you.