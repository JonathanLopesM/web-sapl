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
exports.Header = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../contexts/AuthProvider");
const react_2 = require("react");
const react_3 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/24/outline");
const react_router_dom_1 = require("react-router-dom");
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Header() {
    const { Logout } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const { Cadastros } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const { MenuInicial } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_3.Disclosure, { as: "nav", className: " py-5 border" }, ({ open }) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" },
                react_1.default.createElement("div", { className: "relative flex h-16 items-center justify-between" },
                    react_1.default.createElement("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden" },
                        react_1.default.createElement(react_3.Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" },
                            react_1.default.createElement("span", { className: "sr-only" }, "Open main menu"),
                            open ? (react_1.default.createElement(outline_1.XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" })) : (react_1.default.createElement(outline_1.Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" })))),
                    react_1.default.createElement("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" },
                        react_1.default.createElement("div", { className: "flex flex-shrink-0 items-center" },
                            react_1.default.createElement(react_router_dom_1.Link, { to: '/sessoes' },
                                react_1.default.createElement("img", { className: "block h-14 w-auto lg:hidden", src: "/novace_logo.png", alt: "Logo Novace" }),
                                react_1.default.createElement("img", { className: "hidden h-16 w-auto lg:block", src: "/novace_logo.png", alt: "Logo Novace" })))),
                    react_1.default.createElement("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" },
                        react_1.default.createElement(react_3.Menu, { as: "div", className: "relative ml-3" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement(react_3.Menu.Button, { className: "flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" },
                                    react_1.default.createElement("span", { className: "sr-only" }, "Abrir Menu"),
                                    react_1.default.createElement(outline_1.UserCircleIcon, { className: "h-12 w-12 text-gray-300", "aria-hidden": "true" }))),
                            react_1.default.createElement(react_3.Transition, { as: react_2.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                react_1.default.createElement(react_3.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none self-center" },
                                    react_1.default.createElement(react_3.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { className: classNames(active ? 'bg-gray-100' : '', 'block w-full px-4 py-2 text-sm text-gray-700'), onClick: MenuInicial }, " Menu Principal "))),
                                    react_1.default.createElement(react_3.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { className: classNames(active ? 'bg-gray-100' : '', 'block w-full px-4 py-2 text-sm text-gray-700'), onClick: Cadastros }, " Cadastros "))),
                                    react_1.default.createElement(react_3.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { className: classNames(active ? 'bg-gray-100' : '', 'block w-full px-4 py-2 text-sm text-gray-700'), onClick: Logout }, " Sair "))))))))))))));
}
exports.Header = Header;
