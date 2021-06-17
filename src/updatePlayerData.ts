import fetch from "node-fetch";

export const updatePlayerData = async(token: string, userID: string, data: JSON, { log }: { log?: boolean } = {}) => {
    if (log) console.log("Updating player data...")
    const updateres = await (await fetch(`https://api.prodigygame.com/game-api/v3/characters/${userID}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
        data: JSON.stringify(data)
    }),
    method: "POST"
    }))
    if (!updateres.ok) throw new Error(`The update player page request was unable to be fetched with a code of ${updateres.status}.`);
    if (log) console.log("Successfully updated.");
}