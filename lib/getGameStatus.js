"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameStatus = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getGameStatus = async ({ log } = {}) => {
    if (log)
        console.log("Fetching game status...");
    const gameFetch = await node_fetch_1.default("https://play.prodigygame.com/play");
    if (!gameFetch.ok)
        throw new Error(`The status page request was unable to be fetched with a code of ${gameFetch.status}.`);
    const gameStatus = JSON.parse((await gameFetch.text()).match(/(?<=gameStatusDataStr = ').+(?=')/)[0]);
    if (!gameStatus)
        throw new Error(`Failed to parse game status.`);
    return gameStatus;
};
exports.getGameStatus = getGameStatus;
