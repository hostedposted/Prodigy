"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerUserID = void 0;
const getPlayerUserID = async (token, { log } = {}) => JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("ascii")).content.userID;
exports.getPlayerUserID = getPlayerUserID;
