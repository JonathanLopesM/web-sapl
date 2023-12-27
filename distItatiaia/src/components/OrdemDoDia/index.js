"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdemDoDiaLayout = void 0;
const react_1 = __importDefault(require("react"));
function OrdemDoDiaLayout() {
    return (react_1.default.createElement("div", { className: "flex flex-col gap-4" },
        react_1.default.createElement("h2", { className: "font-semibold text-3xl" },
            "Mat\u00E9rias da Ordem do Dia",
            react_1.default.createElement("span", { className: "text-gray-400 ml-2 font-normal" }, "(2\u00AA Sess\u00E3o Ordin\u00E1ria de 2023 da 3\u00AA Sess\u00E3o Legislativa da 50\u00AA Legislatura)")),
        react_1.default.createElement("div", { className: "flex w-full justify-end" },
            react_1.default.createElement("button", { className: "flex border px-4 py-2 rounded-l-xl" }, "Adicionar Mat\u00E9ria da Ordem do Dia"),
            react_1.default.createElement("button", { className: "flex border px-4 py-2 " }, "Adicionar V\u00E1rias Mat\u00E9rias"),
            react_1.default.createElement("button", { className: "flex border px-4 py-2 rounded-r-xl" }, "Filtrar por")),
        react_1.default.createElement("div", { className: "flex flex-col w-full" },
            react_1.default.createElement("h3", null,
                "Total de Mat\u00E9rias da Ordem do Dia: ",
                react_1.default.createElement("span", null, "1")),
            react_1.default.createElement("div", { className: "flex flex-col w-full" },
                react_1.default.createElement("table", { className: "flex flex-col" },
                    react_1.default.createElement("thead", { className: "flex" },
                        react_1.default.createElement("tr", { className: 'flex w-full justify-between' },
                            react_1.default.createElement("th", { className: "flex w-[80px] " }, "N\u00BA Ordem"),
                            react_1.default.createElement("th", { className: "flex w-[250px] " }, "Mat\u00E9ria"),
                            react_1.default.createElement("th", { className: "flex w-[350px]" }, "Ementa/Situa\u00E7\u00E3o de Pauta/Observa\u00E7\u00E3o"),
                            react_1.default.createElement("th", { className: "flex w-[100px]" }, "Resultado"))),
                    react_1.default.createElement("tbody", { className: "flex flex-col w-full" },
                        react_1.default.createElement("tr", { className: "flex  items-center bg-gray-100 p-2 w-full justify-between" },
                            react_1.default.createElement("td", { className: "flex w-[30px]" }, "1"),
                            react_1.default.createElement("td", { className: "flex w-[200px]" }, "Indica\u00E7\u00E3o de n\u00BA 502 de 2022"),
                            react_1.default.createElement("td", { className: "flex w-[300px]" }, "Pavimenta\u00E7\u00E3o asf\u00E1ltica na Rua projetada no Bairro S\u00C3O DOMINGOS"),
                            react_1.default.createElement("td", { className: "flex w-[100px]" }, "APROVADO"))))))));
}
exports.OrdemDoDiaLayout = OrdemDoDiaLayout;
