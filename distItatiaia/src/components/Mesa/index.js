"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesaDiretora = void 0;
const react_1 = __importDefault(require("react"));
function MesaDiretora() {
    const parlamentares = [
        {
            id: 1,
            name: 'CASÉ'
        },
        {
            id: 2,
            name: 'CRISTINA MAGNO'
        },
        {
            id: 3,
            name: 'DANIEL MACIEL'
        },
        {
            id: 4,
            name: 'DR EDUARDO'
        },
        {
            id: 5,
            name: 'FURLANI'
        },
        {
            id: 6,
            name: 'GUSTAVO GOMES'
        },
        {
            id: 7,
            name: 'JOÃOZINHO DO AR'
        },
        {
            id: 8,
            name: 'LUCIANA ALVES'
        },
        {
            id: 9,
            name: 'MAMEDE'
        },
        {
            id: 10,
            name: 'MARCEL CASTRO'
        },
        {
            id: 11,
            name: 'MARQUINHO'
        },
    ];
    return (react_1.default.createElement("div", { className: "flex flex-col w-full" },
        react_1.default.createElement("h2", { className: "flex text-xl font-semibold" },
            "Mesa Diretora",
            react_1.default.createElement("span", { className: "flex text-gray-600 font-medium" }, "(2\u00AA Sess\u00E3o Ordin\u00E1ria de 2023 da 3\u00AA Sess\u00E3o Legislativa da 50\u00AA Legislatura)")),
        react_1.default.createElement("div", { className: " flex flex-col w-full justify-between" },
            react_1.default.createElement("h3", null, "Escolha da Composi\u00E7\u00E3o da Mesa Diretora da Sess\u00E3o Plen\u00E1ria"),
            react_1.default.createElement("div", { className: "flex w-full" },
                react_1.default.createElement("label", { htmlFor: "composicao" },
                    "Composi\u00E7\u00E3o",
                    react_1.default.createElement("textarea", { className: "flex border-2 rounded-md w-72 h-44", name: "composicao", id: "composicao" })),
                react_1.default.createElement("div", { className: "flex flex-col items-center justify-center w-full gap-2" },
                    react_1.default.createElement("input", { className: "flex w-full justify-center max-w-[100px] px-4 py-2 border rounded-lg bg-blue-400 hover:bg-blue-300 text-white", type: "button", value: "incluir" }),
                    react_1.default.createElement("input", { className: "flex w-full justify-center max-w-[100px] px-4 py-2 border rounded-lg bg-red-400 hover:bg-red-300 text-white", type: "button", value: "Excluir" })),
                react_1.default.createElement("div", { className: "flex flex-col gap-4 items-center justify-center" },
                    react_1.default.createElement("label", { htmlFor: "parlamentar" },
                        "Parlamentar | Cargo",
                        react_1.default.createElement("select", { className: "flex border px-4 rounded-lg py-2", name: "parlamentar", id: "parlamentar" }, parlamentares.map(par => (react_1.default.createElement("option", { key: par.id, value: par.name }, par.name))))),
                    react_1.default.createElement("select", { className: "flex border px-4 rounded-lg py-2", name: "", id: "" },
                        react_1.default.createElement("option", { value: "" }, "1\u00BA Vice-Presidente"),
                        react_1.default.createElement("option", { value: "" }, "2\u00BA Vice-Presidente"),
                        react_1.default.createElement("option", { value: "" }, "1\u00BA Secret\u00E1rio"),
                        react_1.default.createElement("option", { value: "" }, "2\u00BA Secret\u00E1rio")))))));
}
exports.MesaDiretora = MesaDiretora;
