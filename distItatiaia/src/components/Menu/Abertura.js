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
const react_2 = require("@headlessui/react");
const solid_1 = require("@heroicons/react/20/solid");
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Abertura({ setLayout }) {
    return (react_1.default.createElement(react_2.Menu, { as: "div", className: "relative inline-block text-left" },
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_2.Menu.Button, { className: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" },
                "Abertura",
                react_1.default.createElement(solid_1.ChevronDownIcon, { className: "-mr-1 h-5 w-5 text-gray-400", "aria-hidden": "true" }))),
        react_1.default.createElement(react_2.Transition, { as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
            react_1.default.createElement(react_2.Menu.Items, { className: "absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" },
                react_1.default.createElement("div", { className: "py-1" },
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { onClick: () => setLayout('dadosbasicos'), className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm') }, "Dados B\u00E1sicos"))),
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { onClick: () => setLayout('mesa'), className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm') }, "Mesa"))),
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { onClick: () => setLayout('presenca'), className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm') }, "Presen\u00E7a"))),
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { onClick: () => setLayout('ausencia'), className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm') }, "Aus\u00EAncia"))),
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { onClick: () => setLayout('explicacoespessoais'), className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm') }, "Explica\u00E7\u00F5es Pessoais"))),
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { onClick: () => setLayout('ocorrenciasdasessao'), className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm') }, "Ocorr\u00EAncias da Sess\u00E3o"))),
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { onClick: () => setLayout('consideracoesfinais'), className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm') }, "Considera\u00E7\u00F5es Finais"))),
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { onClick: () => setLayout('retiradadepauta'), className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm') }, "Retirada de Pauta"))))))));
}
exports.default = Abertura;
