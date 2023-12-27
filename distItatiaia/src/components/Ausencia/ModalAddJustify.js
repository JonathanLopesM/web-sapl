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
const AuthProvider_1 = require("../../contexts/AuthProvider");
function ModalAddJustify({ open, setOpen }) {
    /// /sessao/2/justificativaausencia/create
    const cancelButtonRef = (0, react_2.useRef)(null);
    const { GetParlamentares, parlamentares } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    (0, react_1.useEffect)(() => {
        if (!parlamentares) {
            GetParlamentares();
        }
    }, []);
    let options = [];
    const ParlamenOption = parlamentares.filter(par => {
        if (par.ativo == true) {
            console.log();
            options.push(par.nome_parlamentar);
            return par.nome_parlamentar;
        }
    });
    return (react_1.default.createElement(react_3.Transition.Root, { show: open, as: react_2.Fragment },
        react_1.default.createElement(react_3.Dialog, { as: "div", className: "relative z-10", initialFocus: cancelButtonRef, onClose: setOpen },
            react_1.default.createElement(react_3.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                react_1.default.createElement("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })),
            react_1.default.createElement("div", { className: "fixed inset-0 z-10 overflow-y-auto" },
                react_1.default.createElement("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" },
                    react_1.default.createElement(react_3.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                        react_1.default.createElement(react_3.Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[1200px] " },
                            react_1.default.createElement("div", { className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto" },
                                react_1.default.createElement("div", { className: "flex flex-col w-full sm:w-[80%] mx-auto sm:items-start " },
                                    react_1.default.createElement("form", { action: "", className: 'flex flex-col text-start justify-center items-center mx-auto' },
                                        react_1.default.createElement("h3", { className: ' w-full font-bold text-2xl' },
                                            "Adicionar Justificativa de Aus\u00EAncia",
                                            react_1.default.createElement("span", { className: 'font-normal ml-2 text-gray-500' }, "(1\u00AA Sess\u00E3o Ordin\u00E1ria de 2023 da 3\u00AA Sess\u00E3o Legislativa da 50\u00AA Legislatura)")),
                                        react_1.default.createElement("span", { className: 'flex w-full' }, "Justificativa de Aus\u00EAncia"),
                                        react_1.default.createElement("div", { className: 'flex flex-col gap-4 w-full' },
                                            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row gap-2 w-full" },
                                                react_1.default.createElement("div", { className: "flex gap-2 w-full" },
                                                    react_1.default.createElement("label", { className: "flex flex-col w-full", htmlFor: "ano" },
                                                        "Legislatura*",
                                                        react_1.default.createElement("select", { className: "flex border w-full rounded-md px-2 py-2", name: "legislatura", id: "legislatura" },
                                                            react_1.default.createElement("option", { value: "50\u00AA (2021-2024)(Atual)" }, "50\u00AA (2021-2024)(Atual)"))))),
                                            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row gap-4" },
                                                react_1.default.createElement("div", { className: "flex w-full gap-4" },
                                                    react_1.default.createElement("label", { className: "flex flex-col w-full", htmlFor: "ano" },
                                                        "Abertura*",
                                                        react_1.default.createElement("input", { className: "flex border w-full rounded-md px-2 py-2", name: "abertura", id: "abertura", type: "text" })),
                                                    react_1.default.createElement("label", { className: "flex flex-col w-full", htmlFor: "mes" },
                                                        "Hor\u00E1rio (hh:mm)*",
                                                        react_1.default.createElement("input", { className: "flex border w-full rounded-md px-2 py-2", name: "abertura", id: "abertura", type: "text" })))),
                                            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row gap-4 my-10" },
                                                react_1.default.createElement("div", { className: "flex flex-col w-full gap-4" },
                                                    react_1.default.createElement("div", { className: "w-full " },
                                                        react_1.default.createElement("label", { 
                                                            // for="formFileLg"
                                                            className: " inline-block text-neutral-700 dark:text-neutral-200" }, "Pauta de Sess\u00E3o"),
                                                        react_1.default.createElement("input", { className: "relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary", id: "formFileLg", type: "file" })),
                                                    react_1.default.createElement("div", { className: 'flex flex-col gap-4' },
                                                        react_1.default.createElement("label", { className: "flex flex-col w-full", htmlFor: "" },
                                                            "Tipo de Justificativa",
                                                            react_1.default.createElement("select", { className: "flex border w-full rounded-md px-2 py-2", name: "", id: "" },
                                                                react_1.default.createElement("option", { value: "----" }, "------"))),
                                                        react_1.default.createElement("label", { className: "flex flex-col w-full", htmlFor: "" },
                                                            "Ausente em*",
                                                            react_1.default.createElement("select", { className: "flex border w-full rounded-md px-2 py-2", name: "", id: "" },
                                                                react_1.default.createElement("option", { value: "Mat\u00E9ria" }, "Mat\u00E9ria"),
                                                                react_1.default.createElement("option", { value: "Sess\u00E3o" }, "Sess\u00E3o")))),
                                                    react_1.default.createElement("div", { className: 'flex flex-col gap-4' },
                                                        react_1.default.createElement("h3", null, "Mat\u00E9rias do Expediente"),
                                                        react_1.default.createElement("h4", null, "Mat\u00E9rias do Ordem do Dia"),
                                                        react_1.default.createElement("label", { className: 'flex gap-2', htmlFor: "" },
                                                            react_1.default.createElement("input", { type: "checkbox", name: "", id: "" }),
                                                            "Indica\u00E7\u00E3o n\u00BA 502 de 2022")))),
                                            react_1.default.createElement("div", { className: 'flex w-full justify-between my-10' },
                                                react_1.default.createElement("button", { className: 'flex bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-500' }, "Cancelar"),
                                                react_1.default.createElement("button", { className: 'flex bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-900' }, "Salvar")))))))))))));
}
exports.default = ModalAddJustify;
