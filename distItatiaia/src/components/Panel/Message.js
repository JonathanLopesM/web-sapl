"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const react_1 = __importDefault(require("react"));
function Message(dados) {
    return (react_1.default.createElement("div", { className: "flex flex-col h-screen items-center justify-center" },
        react_1.default.createElement("h6", { className: "flex text-7xl font-bold" }, dados !== null && dados !== undefined &&
            react_1.default.createElement("span", null, dados.dados.message))));
}
exports.Message = Message;
