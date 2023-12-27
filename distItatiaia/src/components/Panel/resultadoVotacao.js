"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoVotacao = void 0;
const react_1 = __importDefault(require("react"));
function ResultadoVotacao({ dados, materia }) {
    console.log(dados, "dados resultado de votacao");
    return (react_1.default.createElement("div", { className: "flex flex-col w-full justify-center" },
        react_1.default.createElement("div", { className: "flex h-14 text-center justify-center items-center " },
            react_1.default.createElement("h4", { className: "text-2xl font-extrabold" }, materia)),
        react_1.default.createElement("div", { className: "flex flex-col w-[80%] mx-auto text-2xl  mt-20 items-center justify-center" },
            react_1.default.createElement("div", { className: "flex flex-col w-[300px] font-bold text-4xl gap-4" },
                react_1.default.createElement("span", null,
                    "Sim: ",
                    dados.data.response.Yes),
                react_1.default.createElement("span", null,
                    "N\u00E3o: ",
                    dados.data.response.Not),
                react_1.default.createElement("span", null,
                    "Absten\u00E7\u00F5es: ",
                    dados.data.response.NVote),
                react_1.default.createElement("span", null,
                    "Presentes: ",
                    dados.data.response.Presence),
                react_1.default.createElement("span", null,
                    "Total votos: ",
                    dados.data.response.totalVotes)))));
}
exports.ResultadoVotacao = ResultadoVotacao;
