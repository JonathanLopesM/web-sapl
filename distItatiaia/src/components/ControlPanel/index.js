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
exports.PainelEletronico = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
const PresenceVote_1 = require("./PresenceVote");
const apiNode_1 = require("../../services/apiNode");
const ResultVote_1 = require("./ResultVote");
const Message_1 = require("./Message");
const index_1 = require("./SpeechControl/index");
const Presence_1 = require("./Presence");
function PainelEletronico({ session }) {
    const { painelLayout, setPainelLayout, SearchParlSpeech, SaveIdPanel, panelId, setPanelId, estado, setEstado } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [form, setForm] = (0, react_1.useState)('bemvindos');
    const [color, setColor] = (0, react_1.useState)(estado);
    (0, react_1.useEffect)(() => {
        SaveIdPanel();
        SearchParlSpeech();
    }, [color]);
    const handleFunction = () => {
        window.open(`/sessoes/painel`, "_blank", "width=1600, height=1100");
    };
    const handleOpenPanel = (state) => {
        setColor(state);
        (0, apiNode_1.openClosePanelView)(panelId, state);
    };
    const handleViewWindow = (tela) => {
        (0, apiNode_1.PatchPanelView)(panelId, tela);
    };
    return (react_1.default.createElement("div", { className: "flex flex-col w-full " },
        react_1.default.createElement("h2", { className: "flex gap-2 font-bold text-xl" }, session &&
            session.__str__),
        react_1.default.createElement("div", { className: "sm:flex w-full justify-between my-5 " },
            react_1.default.createElement("a", { onClick: handleFunction, target: "_blank" },
                react_1.default.createElement("button", { className: "flex border px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-300 text-white " }, "Iniciar painel completo")),
            react_1.default.createElement("div", { className: "flex mt-2 sm:mt-0" },
                react_1.default.createElement("button", { onClick: () => handleOpenPanel(true), className: `flex border px-4 py-2 rounded-l-lg ${color && 'bg-green-400 hover:bg-green-300 text-white'} ` }, "Abrir painel"),
                react_1.default.createElement("button", { onClick: () => handleOpenPanel(false), className: `flex border px-4 py-2 rounded-r-lg ${!color && 'bg-red-400 hover:bg-red-300 text-white'} ` }, "Fechar painel"))),
        react_1.default.createElement("form", { className: "flex flex-col gap-4" },
            react_1.default.createElement("div", { className: "grid grid-cols-2 gap-2 sm:flex justify-between" },
                react_1.default.createElement("button", { onClick: (e) => {
                        handleViewWindow(0);
                        setForm(e.target.value);
                        setPainelLayout('bemvindos');
                    }, className: `flex border px-2 py-2 rounded-md ${form == 'bemvindos' && 'bg-gray-400 text-white'} `, value: "bemvindos", type: "button" }, "Bem vindos"),
                react_1.default.createElement("button", { onClick: (e) => {
                        handleViewWindow(1);
                        setForm(e.target.value);
                        setPainelLayout('presenca');
                    }, className: `flex border px-2 py-2 rounded-md ${form == 'presenca' && 'bg-gray-400 text-white'}`, value: "presenca", type: "button" }, "Presen\u00E7a"),
                react_1.default.createElement("button", { onClick: (e) => {
                        handleViewWindow(1);
                        setForm(e.target.value);
                        setPainelLayout('presencavotacao');
                    }, className: `flex border px-2 py-2 rounded-md ${form == 'presencavotacao' && 'bg-gray-400 text-white'}`, value: "presencavotacao", type: "button" }, "vota\u00E7\u00E3o"),
                react_1.default.createElement("button", { onClick: (e) => {
                        handleViewWindow(2);
                        setForm(e.target.value);
                        setPainelLayout('presencavotacao');
                    }, className: `hidden border px-2 py-2 rounded-md ${form == 'resultadodevotacao' && 'bg-gray-400 text-white'}`, value: "resultadodevotacao", type: "button" }, "Resultado de vota\u00E7\u00E3o"),
                react_1.default.createElement("button", { onClick: (e) => {
                        handleViewWindow(3);
                        setForm(e.target.value);
                        setPainelLayout('discurso');
                    }, className: `flex border px-2 py-2 rounded-md ${form == 'discurso' && 'bg-gray-400 text-white'}`, value: "discurso", type: "button" }, "Discurso"),
                react_1.default.createElement("button", { onClick: (e) => {
                        handleViewWindow(4);
                        setForm(e.target.value);
                        setPainelLayout('silencio');
                    }, className: `flex border px-2 py-2 rounded-md ${form == 'silencio' && 'bg-gray-400 text-white'}`, value: "silencio", type: "button" }, "Sil\u00EAncio"),
                react_1.default.createElement("button", { onClick: (e) => {
                        setForm(e.target.value);
                        setPainelLayout('mensagem');
                    }, className: `flex border px-2 py-2 rounded-md ${form == 'mensagem' && 'bg-gray-400 text-white'}`, value: "mensagem", type: "button" }, "Mensagem")),
            form == 'presencavotacao'
                && react_1.default.createElement(PresenceVote_1.PresenceVoteControl, { sessionId: session.id }),
            form == 'presenca'
                && react_1.default.createElement(Presence_1.Presence, { sessionId: session.id }),
            form == 'resultadodevotacao'
                && react_1.default.createElement(ResultVote_1.ResultVoteControl, null),
            form == 'discurso'
                && react_1.default.createElement(index_1.SpeechControl, null),
            form == 'mensagem'
                && react_1.default.createElement(Message_1.MessageControl, null),
            react_1.default.createElement("button", { className: "hidden bg-green-500 text-white text-center justify-center py-2 rounded-md" }, "ATUALIZAR PAINEL"))));
}
exports.PainelEletronico = PainelEletronico;
