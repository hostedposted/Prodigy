import fetch from "node-fetch";
import { getGameStatus } from "./getGameStatus";
import { GameData } from "./GameData"

export const getGameData = async ({ log }: { log?: boolean } = {})  => {
    const gameStatus = await getGameStatus({ log: log });
    if (log) console.log("Fetching game version...");
    const gameDataVersion = gameStatus.prodigyGameFlags.gameDataVersion;
    const gameData = await fetch(`https://cdn.prodigygame.com/game/data/production/${gameDataVersion}/data.json`);
    if (!gameData.ok) throw new Error(`The game data page request was unable to be fetched with a code of ${gameData.status}.`);
    return await gameData.json() as GameData;
};
