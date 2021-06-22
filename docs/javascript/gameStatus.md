# GetGameStatus

GetGameStatus contains versions for prodigy and some other things.

## Examples

Here is an example:
```js
const prodigy = require("prodigy-api");

(async function() {
    let gameStatus = await prodigy.getGameStatus(); // Getting game status.
    console.log(gameStatus); // Logging game status to console.
})();
```

## Parameters

GetGameStatus accepts no parameters.

## Output

This outputs prodigy's gameStatus which follows this schema [here](https://pastebin.com/Qtwi1tQj).
