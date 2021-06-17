# Player Data

Most of the data in your account is in the player data.

## Examples

Just using a jwt token it looks something like this:
```py
from prodigy import player

player_data = player("token")
```
When using a jwt token and a userID it looks something like this:
```py
from prodigy import player

player_data = player("token", userID="Random userID. Should be a integer.")
```

## Parameters

Player requires 1 parameter.
Being token.
The token should be a jwt token as a string. Which you can get using [tokenify](tokenify.md)

Player also takes one keyword being userID. If a userID is received the function will return the player data of that userID. **This still requires a jwt token.**

## Output

This Returns Player Data.