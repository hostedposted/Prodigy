"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayerData = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const _1 = require(".");
const updatePlayerData = async (token, data, { log } = {}) => {
    if (log)
        console.log("Updating player data...");
    const updateres = await (await node_fetch_1.default(`https://api.prodigygame.com/game-api/v3/characters/${_1.getPlayerUserID(token)}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            data: JSON.stringify(data)
        }),
        method: "POST"
    }));
    if (!updateres.ok)
        throw new Error(`The update player page request was unable to be fetched with a code of ${updateres.status}.`);
    if (log)
        console.log("Successfully updated.");
};
exports.updatePlayerData = updatePlayerData;
