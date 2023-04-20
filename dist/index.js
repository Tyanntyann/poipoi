"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const discord_js_1 = require("discord.js");
const token = process.env['token'];
const client = new discord_js_1.Client({
    intents: Object.values(65531).filter(Number.isInteger),
});
const commandHandlers = [];
fs_1.default.readdirSync("./commands", { withFileTypes: true }).filter(dirent => dirent.isFile())
    .forEach(a => {
    const cmd = require(`./commands/${a.name.split(".")[0]}.js`).cmd;
    commandHandlers.push(cmd);
});
client.on("ready", () => {
    var _a;
    console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}としてログインしました`);
});
client.on("messageCreate", (message) => {
    var _a, _b;
    const args = message.content.split(/ |　/);
    const command = (_a = args.shift()) !== null && _a !== void 0 ? _a : "";
    (_b = commandHandlers.find(a => a.aliases.includes(command) || a.name == command)) === null || _b === void 0 ? void 0 : _b.exec(message, args);
});
client.login(token);
