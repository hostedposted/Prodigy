"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerData = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getPlayerData = async (token, userID, { log } = {}) => {
    if (log)
        console.log("Fetching data from token...");
    const dataSite = await node_fetch_1.default(`https://api.prodigygame.com/game-api/v1/character/${userID}?isMember=0&userID=${userID}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    if (!dataSite.ok)
        throw new Error(`The data page request was unable to be fetched with a code of ${dataSite.status}.`);
    if (log)
        console.log("Successfully fetched.");
    return await dataSite.json();
};
exports.getPlayerData = getPlayerData;
