"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ausencia = void 0;
const react_1 = __importStar(require("react"));
const ModalAddJustify_1 = __importDefault(require("./ModalAddJustify"));
function Ausencia() {
    const [addJusti, setAddJusti] = (0, react_1.useState)(false);
    return (react_1.default.createElement("div", { className: "flex flex-col" },
        addJusti && react_1.default.createElement(ModalAddJustify_1.default, { open: addJusti, setOpen: setAddJusti }),
        react_1.default.createElement("h2", { className: " text-2xl font-semibold" },
            "Justificativas de Aus\u00EAncias",
            react_1.default.createElement("span", { className: "text-gray-400 ml-2 font-normal" }, "(1\u00AA Sess\u00E3o Ordin\u00E1ria de 2023 da 3\u00AA Sess\u00E3o Legislativa da 50\u00AA Legislatura)")),
        react_1.default.createElement("div", { className: "flex flex-col" },
            react_1.default.createElement("div", { className: "flex w-full justify-end" },
                react_1.default.createElement("button", { onClick: () => setAddJusti(true), className: "flex border px-4 py-2 rounded-md hover:bg-gray-300" }, "Adicionar Justificativa de Aus\u00EAncia")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", null, "nenhum registro encontrado")))));
}
exports.Ausencia = Ausencia;
