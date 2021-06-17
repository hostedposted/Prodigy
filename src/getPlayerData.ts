import fetch from "node-fetch";

export const getPlayerData = async(token: string, userID: string, { log }: { log?: boolean } = {}) => {
    if (log) console.log("Fetching data from token...");
    const dataSite = await fetch(`https://api.prodigygame.com/game-api/v1/character/${userID}?isMember=0&userID=${userID}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    if (!dataSite.ok) throw new Error(`The data page request was unable to be fetched with a code of ${dataSite.status}.`);
    if (log) console.log("Successfully fetched.");
    return await dataSite.json() as {}
}
