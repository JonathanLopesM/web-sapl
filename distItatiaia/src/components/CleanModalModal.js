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
const react_1 = __importStar(require("react"));
const react_2 = require("react");
const react_3 = require("@headlessui/react");
const AuthProvider_1 = require("../contexts/AuthProvider");
function ModalCleanSession({ open, setOpen }) {
    const cancelButtonRef = (0, react_2.useRef)(null);
    const { CreateSessionPlen } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [legis, setLegis] = (0, react_2.useState)("50ª (2021-2024)(Atual)");
    const [sessao_legislativa, setSessao_legislativa] = (0, react_2.useState)('-------');
    const [tipo, setTipo] = (0, react_2.useState)("-------");
    const [cod_andamento_sessao, setCod_andamento_sessao] = (0, react_2.useState)('');
    const [painel_aberto, setPainel_aberto] = (0, react_2.useState)('');
    const [data_inicio, setData_inicio] = (0, react_2.useState)('');
    const [hora_inicio, setHora_inicio] = (0, react_2.useState)('');
    const [hora_fim, setHora_fim] = (0, react_2.useState)('');
    const [numero, setNumero] = (0, react_2.useState)('');
    const [data_fim, setData_fim] = (0, react_2.useState)('');
    const [url_audio, setUrl_audio] = (0, react_2.useState)('');
    const [url_video, setUrl_video] = (0, react_2.useState)('');
    const [upload_pauta, setUpload_pauta] = (0, react_2.useState)('');
    const [upload_ata, setUpload_ata] = (0, react_2.useState)('');
    const [upload_anexo, setUpload_anexo] = (0, react_2.useState)('');
    const [iniciada, setIniciada] = (0, react_2.useState)('');
    const [finalizada, setFinalizada] = (0, react_2.useState)('');
    const [interativa, setInterativa] = (0, react_2.useState)('');
    const [tema_solene, setTema_solene] = (0, react_2.useState)('');
    const [publicar_pauta, setPublicar_pauta] = (0, react_2.useState)('');
    const [legislatura, setLegislatura] = (0, react_2.useState)('');
    return (react_1.default.createElement(react_3.Transition.Root, { show: open, as: react_2.Fragment },
        react_1.default.createElement(react_3.Dialog, { as: "div", className: "relative z-10", initialFocus: cancelButtonRef, onClose: setOpen },
            react_1.default.createElement(react_3.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                react_1.default.createElement("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })),
            react_1.default.createElement("div", { className: "fixed inset-0 z-10 overflow-y-auto" },
                react_1.default.createElement("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" },
                    react_1.default.createElement(react_3.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                        react_1.default.createElement(react_3.Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[1200px] " },
                            react_1.default.createElement("div", { className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto" },
                                react_1.default.createElement("div", { className: "flex flex-col sm:items-start " })))))))));
}
exports.default = ModalCleanSession;
