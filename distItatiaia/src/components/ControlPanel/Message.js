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
exports.MessageControl = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
function MessageControl() {
    const { PatchPanelMessage } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [message, setMessage] = (0, react_1.useState)('');
    const tela = 5;
    (0, react_1.useEffect)(() => {
        return () => {
            console.log("Executou a função de zerar as presenças");
            setMessage('');
            PatchPanelMessage(tela, message);
        };
    }, []);
    const handleSetMessage = () => {
        PatchPanelMessage(tela, message);
    };
    return (react_1.default.createElement("div", { className: "flex w-full" },
        react_1.default.createElement("form", { action: "", className: "flex flex-col gap-4" },
            react_1.default.createElement("label", { htmlFor: "mensagem", className: "font-bold text-2xl" },
                "Mensagem",
                react_1.default.createElement("textarea", { value: message, onChange: event => setMessage(event.target.value), className: "flex w-full border px-4 py-1 rounded-md text-xl", placeholder: "Digite a mensagem", rows: 5, cols: 44 })),
            react_1.default.createElement("button", { type: "button", onClick: handleSetMessage, className: "flex bg-green-500 text-white text-center justify-center py-2 rounded-md" }, "ATUALIZAR PAINEL"))));
}
exports.MessageControl = MessageControl;
