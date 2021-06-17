import fetch from "node-fetch";

export const getGameStatus = async({ log }: { log?: boolean } = {}) => {
    if (log) console.log("Fetching game status...");
    const gameFetch = await fetch("https://play.prodigygame.com/play");
    if (!gameFetch.ok) throw new Error(`The status page request was unable to be fetched with a code of ${gameFetch.status}.`);
    const gameStatus = JSON.parse((await gameFetch.text()).match(/(?<=gameStatusDataStr = ').+(?=')/)![0])
    if (!gameStatus) throw new Error(`Failed to parse game status.`);
    return gameStatus
}