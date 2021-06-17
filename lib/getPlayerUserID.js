"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerUserID = void 0;
const getPlayerUserID = async (token, { log } = {}) => {
    try {
        const userID = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("ascii")).content.userID;
        return userID;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.getPlayerUserID = getPlayerUserID;
