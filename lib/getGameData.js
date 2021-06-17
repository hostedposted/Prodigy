"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameData = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getGameStatus_1 = require("./getGameStatus");
const getGameData = async ({ log } = {}) => {
    const gameStatus = await getGameStatus_1.getGameStatus({ log: log });
    if (log)
        console.log("Fetching game version...");
    const gameDataVersion = gameStatus["prodigyGameFlags"]["gameDataVersion"];
    const gameData = await (await node_fetch_1.default(`https://cdn.prodigygame.com/game/data/production/${gameDataVersion}/data.json`));
    if (!gameData.ok)
        throw new Error(`The game data page request was unable to be fetched with a code of ${gameData.status}.`);
    return await gameData.json();
};
exports.getGameData = getGameData;