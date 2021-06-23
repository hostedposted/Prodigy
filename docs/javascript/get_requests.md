# GetPlayerFriendRequests

GetPlayerFriendRequests contains player friend request data.

## Examples

Here is an example:

```js
const prodigy = require("prodigy-api");

(async function () {
  let player = await prodigy.tokenify("username", "password"); // Get your login data.
  let token = player.token; // Get JWT token out of login data.
  let friends = await prodigy.getPlayerFriendRequests(token); // Get friend requests JSON object.
  console.log(friends);
})();
```

## Parameters

GetPlayerFriendRequests accepts one parameter.
This being your player token.

## Output

This outputs player friend requests which follows this schema:

```json
{
  "error": null,
  "data": [
    { "userID": "INTEGER" },
    { "userID": "INTEGER" },
    { "userID": "INTEGER" },
    { "userID": "INTEGER" },
    { "userID": "INTEGER" } // Makes an object for every friend request.
  ],
  "meta": {}
}
```
