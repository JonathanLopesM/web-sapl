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
const AuthProvider_1 = require("../../contexts/AuthProvider");
const react_2 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/24/outline");
const react_router_dom_1 = require("react-router-dom");
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Header({ openSidebar, setOpenSidebar, page }) {
    const { Cadastros } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const { MenuInicial } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const navigate = (0, react_router_dom_1.useNavigate)();
    function handleLogout() {
        localStorage.removeItem('sessionid');
        navigate('/parlamentar');
    }
    function handleHome() {
        navigate('/parlamentar');
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_2.Disclosure, { as: "nav", className: " py-5 border" }, ({ open }) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "mx-auto max-w-[900px] px-2 sm:px-6 lg:px-8" },
                react_1.default.createElement("div", { className: "relative flex h-16 items-center justify-between" },
                    page == "vote" && react_1.default.createElement(react_router_dom_1.Link, { to: '/parlamentar' },
                        react_1.default.createElement(outline_1.ChevronLeftIcon, { className: "flex w-8 text-gray-400" })),
                    react_1.default.createElement("div", { className: `flex flex-1 items-center justify-center ${page != "vote" && "sm:items-stretch sm:justify-start"}` },
                        react_1.default.createElement("div", { className: "flex flex-shrink-0 items-center" },
                            react_1.default.createElement(react_router_dom_1.Link, { to: '/parlamentar' },
                                react_1.default.createElement("img", { className: "block h-14 w-auto lg:h-16", src: "/novace_logo.png", alt: "Logo Novace" })))),
                    react_1.default.createElement("div", { className: " inset-y-0 left-0 flex items-center " },
                        react_1.default.createElement(react_2.Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" },
                            react_1.default.createElement("span", { className: "sr-only" }, "Open main menu"),
                            openSidebar ? (react_1.default.createElement(outline_1.XMarkIcon, { onClick: () => setOpenSidebar(!openSidebar), className: "block h-8 w-8", "aria-hidden": "true" })) : (react_1.default.createElement(outline_1.Bars3Icon, { onClick: () => setOpenSidebar(!openSidebar), className: "block h-8 w-8", "aria-hidden": "true" })))))))))));
}
exports.Header = Header;
