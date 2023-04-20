"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmd = void 0;
exports.cmd = {
    name: "ping",
    description: "ping",
    aliases: ["pong"],
    exec(message, args) {
        message.reply("pong!botbotより優秀");
    },
};
