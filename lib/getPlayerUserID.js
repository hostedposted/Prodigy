"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerUserID = void 0;
var getPlayerUserID = function (token, _a) {
    var _b = _a === void 0 ? {} : _a, log = _b.log;
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("ascii")).content.userID;
};
exports.getPlayerUserID = getPlayerUserID;
