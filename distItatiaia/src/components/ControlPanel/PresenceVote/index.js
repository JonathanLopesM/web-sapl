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
exports.PresenceVoteControl = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../../contexts/AuthProvider");
const Register_1 = require("./Register");
const LoadingMatter_1 = require("./LoadingMatter");
const outline_1 = require("@heroicons/react/24/outline");
function PresenceVoteControl({ sessionId }) {
    const { SearchMaterias, materias, setMaterias, MatterUpdated, GetVotes, resultVote, voteResParl, setVoteResParl, dayOrder, ReloadVotePanel, Matters, matters, setMatters, votes, setVotes, matterComplet, setMatterComplet } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [matterState, setMatterState] = (0, react_1.useState)('');
    const [projectsView, setProjectsView] = (0, react_1.useState)("materias");
    const [resultLoading, setResultLoading] = (0, react_1.useState)(false);
    const [vote, setVote] = (0, react_1.useState)("");
    // @ts-ignore
    let url = import.meta.env.VITE_URL_API;
    (0, react_1.useEffect)(() => {
        if (!matters) {
            Matters(sessionId);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        setResultLoading(true);
        SearchMaterias();
        GetVotes();
        Matters(sessionId).then(res => setResultLoading(false));
    }, [projectsView]);
    (0, react_1.useEffect)(() => {
        GetVotes();
    }, [votes, matterState]);
    const handleSetMatter = () => {
        setProjectsView("register");
        setVotes(true);
    };
    if (matters) {
        matters.sort((a, b) => (a.numero_ordem < b.numero_ordem) ? 1 : -1);
    }
    console.log(matters, "matters teste ");
    return (react_1.default.createElement("div", { className: "flex flex-col border-2  gap-8 overflow-auto max-h-[630px] relative" },
        react_1.default.createElement("div", { className: "flex h-14 gap-4  bg-white border w-full absolute  py-2 px-2" },
            react_1.default.createElement("button", { type: "button", className: `flex border-2  px-4 rounded-md items-center ${projectsView === "materias" && "bg-[#93C5FD] text-white border-blue-400"} text-xl font-bold`, onClick: () => setProjectsView("materias") }, "Materias"),
            votes &&
                react_1.default.createElement("button", { type: "button", className: `flex border-2  px-4 rounded-md items-center ${projectsView === "register" && "bg-[#93C5FD] text-white border-blue-400"} text-xl font-bold`, onClick: () => setProjectsView("register") }, "Registro")),
        projectsView === "materias" &&
            react_1.default.createElement("div", { className: "flex  w-full items-center mt-[55px]" },
                react_1.default.createElement("table", { className: "flex flex-col overflow-auto max-h-[470px] border" },
                    react_1.default.createElement("thead", { className: "flex gap-2" },
                        react_1.default.createElement("td", { className: "w-[60px] lg:w-[80px]" }, "N\u00BA"),
                        react_1.default.createElement("td", { className: "flex w-[20%]" }, "Mat\u00E9ria"),
                        react_1.default.createElement("td", { className: "flex w-[40%]" }, "Ementa"),
                        react_1.default.createElement("td", null, "Resultado")),
                    !matters && react_1.default.createElement(LoadingMatter_1.LoadingMatter, null),
                    matters &&
                        matters.map(matter => (react_1.default.createElement("tbody", { key: matter.id, className: "flex  " },
                            react_1.default.createElement("td", { className: "flex  border p-2 w-[80px] items-center justify-center" }, matter.numero_ordem),
                            react_1.default.createElement("td", { className: "flex flex-col w-[20%] border p-2 justify-between" },
                                matter.__str__,
                                react_1.default.createElement("a", { className: "text-blue-500", href: matter.texto_original, target: "_blank" }, "Texto original")),
                            react_1.default.createElement("td", { className: "flex flex-col border p-2 w-full max-w-[40%]" },
                                matter.ementa,
                                react_1.default.createElement("span", { className: "text-gray-600" },
                                    "observacao: ",
                                    react_1.default.createElement("br", null),
                                    matter.observacao)),
                            react_1.default.createElement("td", { className: "flex  border p-2 w-[30%]" }, !resultLoading ?
                                matter.resultado
                                    ? (matter.resultado)
                                    : (react_1.default.createElement("div", { className: "flex flex-col" },
                                        react_1.default.createElement("span", null, "Projeto n\u00E3o votado "),
                                        (matter.id) !== matterState
                                            ? react_1.default.createElement("button", { value: matter.ementa, onClick: (event) => {
                                                    ReloadVotePanel();
                                                    setMatterState(matter.id);
                                                    setMatterComplet(matter);
                                                    console.log(matterState, "matter dentro da funcao ");
                                                    MatterUpdated(matter.id);
                                                }, type: "button", className: "flex bg-green-500 min-w-[160px] h-10 px-2 text-white text-center justify-center py-2 rounded-md " }, "Abrir Vota\u00E7\u00E3o")
                                            : react_1.default.createElement("button", { value: matter.id, onClick: handleSetMatter, type: "button", className: "flex bg-green-500 min-w-[160px] h-10 px-2 text-white text-center justify-center py-2 rounded-md " }, "Registrar"))) : (react_1.default.createElement("span", { className: "flex items-center gap-4 mx-auto text-xl" },
                                react_1.default.createElement(outline_1.ArrowPathIcon, { className: "flex w-8 animate-spin opacity-70" }))))))).reverse())),
        projectsView === "register" && react_1.default.createElement(Register_1.Register, { setMatterState: setMatterState, sessionId: sessionId, setProjectsView: setProjectsView })));
}
exports.PresenceVoteControl = PresenceVoteControl;
