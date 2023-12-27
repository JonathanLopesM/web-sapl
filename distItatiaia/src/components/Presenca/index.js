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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenca = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
function Presenca() {
    const { parlamentares } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    return (react_1.default.createElement("div", { className: "flex flex-col w-full gap-4" },
        react_1.default.createElement("h1", { className: "flex text-2xl font-semibold" },
            "Presen\u00E7a",
            react_1.default.createElement("span", { className: "flex text-gray-400 ml-2" }, "(1\u00AA Sess\u00E3o Ordin\u00E1ria de 2023 da 3\u00AA Sess\u00E3o Legislativa da 50\u00AA Legislatura)")),
        react_1.default.createElement("div", { className: "flex flex-col gap-4" },
            react_1.default.createElement("label", { htmlFor: "exibirtodos", className: "flex gap-2" },
                react_1.default.createElement("input", { type: "checkbox", name: "exibirtodos", id: "exibirtodos" }),
                "Marcar/Desmarcar Todos"),
            react_1.default.createElement("label", { htmlFor: "exibirtodos", className: "flex gap-2" },
                react_1.default.createElement("input", { type: "checkbox", name: "exibirtodos", id: "exibirtodos" }),
                "Exibir somente parlamentares ativos"),
            react_1.default.createElement("div", null, parlamentares && parlamentares.map((par) => (react_1.default.createElement("label", { key: par.id, htmlFor: "brunooliveira", className: "flex gap-2" },
                react_1.default.createElement("input", { type: "checkbox", name: "brunooliveira", id: "brunooliveira" }),
                `${par.nome_parlamentar} / ${par.partido}`)))))));
}
exports.Presenca = Presenca;
