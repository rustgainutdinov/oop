"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserInteraction_1 = __importDefault(require("./classes/UserInteraction"));
function main() {
    new UserInteraction_1.default().run();
}
main();
