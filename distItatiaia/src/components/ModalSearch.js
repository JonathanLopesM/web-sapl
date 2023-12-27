"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_3 = require("@headlessui/react");
function ModalSearch({ open, setOpen }) {
    const cancelButtonRef = (0, react_2.useRef)(null);
    return (react_1.default.createElement(react_3.Transition.Root, { show: open, as: react_2.Fragment },
        react_1.default.createElement(react_3.Dialog, { as: "div", className: "relative z-10", initialFocus: cancelButtonRef, onClose: setOpen },
            react_1.default.createElement(react_3.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                react_1.default.createElement("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })),
            react_1.default.createElement("div", { className: "fixed inset-0 z-10 overflow-y-auto" },
                react_1.default.createElement("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" },
                    react_1.default.createElement(react_3.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                        react_1.default.createElement(react_3.Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[95%] sm:w-[80%] max-w-[1200px] " },
                            react_1.default.createElement("div", { className: " bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto" },
                                react_1.default.createElement("div", { className: "flex flex-col  sm:items-start " },
                                    react_1.default.createElement("form", { action: "", className: 'flex flex-col w-full sm:w-[80%]  text-start justify-center items-center mx-auto' },
                                        react_1.default.createElement("h3", { className: 'flex w-full font-bold text-2xl' }, "Pesquisa Textual"),
                                        react_1.default.createElement("div", { className: 'flex flex-col w-full gap-4 ' },
                                            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row gap-4 mt-10" },
                                                react_1.default.createElement("label", { className: "flex flex-col w-full", htmlFor: "ano" },
                                                    "Pesquisar",
                                                    react_1.default.createElement("input", { className: "flex border w-full rounded-md px-2 py-2", name: "abertura", id: "abertura", type: "text" }))),
                                            react_1.default.createElement("div", { className: "flex flex-col  gap-4" },
                                                react_1.default.createElement("h2", { className: "flex text-xl font-semibold" }, "Em quais tipos de documento deseja pesquisar ?"),
                                                react_1.default.createElement("label", { htmlFor: "marcar/todos", className: 'flex gap-2' },
                                                    react_1.default.createElement("input", { type: "checkbox", name: "marcar/todos", id: "marcar/todos" }),
                                                    "Marcar/Desmarcar Todos"),
                                                react_1.default.createElement("ul", { className: 'flex flex-col' },
                                                    react_1.default.createElement("li", { className: '' },
                                                        react_1.default.createElement("label", { htmlFor: "marcar/todos", className: 'flex gap-2' },
                                                            react_1.default.createElement("input", { type: "checkbox", name: "marcar/todos", id: "marcar/todos" }),
                                                            "Documentos Acess\u00F3rios")),
                                                    react_1.default.createElement("li", { className: '' },
                                                        react_1.default.createElement("label", { htmlFor: "marcar/todos", className: 'flex gap-2' },
                                                            react_1.default.createElement("input", { type: "checkbox", name: "marcar/todos", id: "marcar/todos" }),
                                                            "Mat\u00E9rias Legislativas")),
                                                    react_1.default.createElement("li", { className: '' },
                                                        react_1.default.createElement("label", { htmlFor: "marcar/todos", className: 'flex gap-2' },
                                                            react_1.default.createElement("input", { type: "checkbox", name: "marcar/todos", id: "marcar/todos" }),
                                                            "Normas Jur\u00EDdicas")),
                                                    react_1.default.createElement("li", { className: '' },
                                                        react_1.default.createElement("label", { htmlFor: "marcar/todos", className: 'flex gap-2' },
                                                            react_1.default.createElement("input", { type: "checkbox", name: "marcar/todos", id: "marcar/todos" }),
                                                            "Sess\u00F5es Plen\u00E1rias")))),
                                            react_1.default.createElement("div", { className: 'flex w-full justify-end my-10' },
                                                react_1.default.createElement("button", { className: 'flex bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-900' }, "Pesquisar")))))))))))));
}
exports.default = ModalSearch;
