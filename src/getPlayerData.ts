import fetch from "node-fetch";

const parseJWT = (token: string) => JSON.parse(Buffer.from(token.split(".")[1], "base64").toString())

export const getPlayerData = async(token: string, userID?: string, { log }: { log?: boolean } = {}) => {
    if (userID) return await (await fetch(`https://api.prodigygame.com/game-api/v2/characters/${userID}?fields=inventory%2Cdata%2CisMember%2Ctutorial%2Cpets%2Cencounters%2Cquests%2Cappearance%2Cequipment%2Chouse%2Cachievements%2Cstate&userID=${parseJWT(token).content.userID}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })).json() as {}
    if (log) console.log("Fetching data from token...");
    const dataSite = await fetch(`https://api.prodigygame.com/game-api/v1/character/${parseJWT(token).content.userID}?isMember=0&userID=${parseJWT(token).content.userID}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    if (!dataSite.ok) throw new Error(`The data page request was unable to be fetched with a code of ${dataSite.status}.`);
    if (log) console.log("Successfully fetched.");
    return await dataSite.json() as {}
}
