"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeToPeapleHome = void 0;
const react_1 = __importDefault(require("react"));
function WelcomeToPeapleHome(dados) {
    return (react_1.default.createElement("div", { className: "flex flex-col w-full text-center" },
        react_1.default.createElement("h2", { className: "text-4xl font-bold p-4 px-4" }, "BEM VINDO A CASA DO POVO"),
        dados.dados?.estado
            ? react_1.default.createElement("h3", { className: "flex bg-white text-green-500 justify-center text-center items-center font-extrabold px-8 p-2 text-3xl" }, "SESS\u00C3O AUTORIZADA")
            : react_1.default.createElement("h3", { className: "flex bg-white text-red-500 justify-center text-center items-center font-extrabold px-8 p-2 text-3xl" }, "SESS\u00C3O N\u00C3O AUTORIZADA")));
}
exports.WelcomeToPeapleHome = WelcomeToPeapleHome;
