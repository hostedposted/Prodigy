"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayerFriendRequests = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const updatePlayerFriendRequests = async (token, userID, friendID, { log } = {}) => {
    if (log)
        console.log("Posting friend data...");
    const friendreq = await (await node_fetch_1.default(`https://api.prodigygame.com/friend-api/v1/friend/${userID}/add/${friendID}?userID=${userID}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "POST"
    }));
    if (!friendreq.ok)
        throw new Error(`The update friend requests page request was unable to be fetched with a code of ${friendreq.status}.`);
    if (log)
        console.log("Successfully updated friend requests.");
    return friendreq.json();
};
exports.updatePlayerFriendRequests = updatePlayerFriendRequests;
