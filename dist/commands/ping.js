"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
exports.cmd = {
    name: "ping",
    description: "sine",
    aliases: [""],
    exec: (message, args) => {
        message.reply("ong!");
    }
};
