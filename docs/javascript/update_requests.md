# UpdatePlayerFriendRequests

UpdatePlayerFriendRequests posts a new friend request to prodigy's servers.

## Examples

Here is an example:

```js
const prodigy = require("prodigy-api");

(async function () {
  let friendID = 43294302; // Get your friend's userid.
  let tokenify = await prodigy.tokenify("BuddyR11", "AGR2006"); // Get your login data.
  let token = tokenify.token; // Parse your token out of login data.
  let userID = await prodigy.getPlayerUserID(token); // Get your userid out of token.
  let newfriend = await prodigy.updatePlayerFriendRequests(token, userID, friendID); // Post friend request to your friends userid.
  console.log(newfriend); // Log result.
})();
})();
```

## Parameters

UpdatePlayerFriendRequests accepts three parameters.
This being your player token, your userid and your friend's userid.

## Output

This outputs the status of the request which follows this schema:

```json
{ "error": null, "data": { "success": "boolean", "action": "ADD" }, "meta": {} }
```
