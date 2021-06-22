# GetGameData

The GetGameData function stores info on every item in prodigy.

For some reason prodigy gives every item a gender.
I have no idea why.

## Examples

Here is an example:
```js
const prodigy = require("prodigy-api");

(async function() {
    let gameData = await prodigy.getGameData(); // Get game data.
    console.log(gameData.boots[0].name) // Logs the first boots name in the console (Array starts at 0).
})();

```

## Parameters

GetGameData accepts no parameters.

## Output

This function outputs **everything** in prodigy's game data.
I could not make an example for this just because how long it is (20k+ lines or something). So, I will leave it up to you to discover!