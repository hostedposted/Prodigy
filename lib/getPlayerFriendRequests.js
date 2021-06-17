"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerFriendRequests = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getPlayerFriendRequests = async (token, userID, { log } = {}) => {
    if (log)
        console.log("Fetching player friend requests...");
    const friendreq = await (await node_fetch_1.default(`https://api.prodigygame.com/friend-api/v1/friend/${userID}/request?userID=${userID}&offset=0&limit=20`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }));
    if (!friendreq.ok)
        throw new Error(`The friends page request was unable to be fetched with a code of ${friendreq.status}.`);
    return friendreq.json();
};
exports.getPlayerFriendRequests = getPlayerFriendRequests;
