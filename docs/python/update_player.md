# Update Player Data

This is a function for updating player data on prodigy's servers.

## Examples

Here is an example:
```py
from prodigy import update_player

player_data = {} # Player Data

result = update_player("token", player_data)

print("Success!" if result == "" else result)
```

This can change your level to 100:
```py
from prodigy import player, update_player

token = "" # Your jwt token

player_data = player(token)

player_data["data"]["level"] = 100

result = update_player(token, player_data)

print("Success!" if result == "" else result)
```

## Parameters

Update player requires one parameter. Being token.

Token should be a string.

There are no keywords.

## Output

This will output nothing if the request was sent successfully.

If an error occurred and the response is not an empty string, you should parse the text as a json, and get the value of message.