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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewUser = void 0;
const react_1 = __importStar(require("react"));
const Header_1 = require("../components/Header");
const react_2 = require("react");
const AuthProvider_1 = require("../contexts/AuthProvider");
const ModalCadastro_1 = __importDefault(require("../components/NewUser/ModalCadastro"));
const react_router_dom_1 = require("react-router-dom");
function NewUser() {
    const [openCadastro, setOpenCadastro] = (0, react_2.useState)(false);
    const { GetUsers, usersGet, DeleteUser } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    (0, react_2.useEffect)(() => {
        GetUsers();
    }, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.Header, null),
        react_1.default.createElement(ModalCadastro_1.default, { open: openCadastro, setOpen: setOpenCadastro }),
        react_1.default.createElement("div", { className: "flex self-center mt-10 gap-[29%]" },
            react_1.default.createElement("button", { onClick: () => setOpenCadastro(!openCadastro), className: "mx-10 rounded-md bg-sky-200 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 justify-left" }, "Cadastrar Usu\u00E1rio"),
            react_1.default.createElement("span", { className: "self-center font-bold text-2xl underline tracking-wider" },
                react_1.default.createElement("h2", null, "PARLAMENTARES"))),
        react_1.default.createElement("div", { className: "overflow-auto max-h-[28rem] mx-5  mt-5 bg-white rounded-xl shadow-xl space-x-4 " },
            react_1.default.createElement("ul", { role: "list", className: "divide-y divide-gray-200" }, usersGet && usersGet?.resParl.map((par) => (react_1.default.createElement("li", { key: par.id, className: "flex w-full justify-between px-4 py-5 hover:bg-gray-100 font-semibold" },
                react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                    par.__str__,
                    react_1.default.createElement("span", { className: "text-sm font-normal text-indigo-800" },
                        par.username,
                        " ")),
                react_1.default.createElement("div", { className: "flex gap-10 font-semibold text-blue-600 self-center" },
                    react_1.default.createElement(react_router_dom_1.Link, { className: "hover:text-black", to: `/sessoes/cadastros/editar/${par.id}` }, "Editar"),
                    react_1.default.createElement("button", { className: "hover:text-black", onClick: () => DeleteUser(par._id) }, "Excluir"))))))),
        react_1.default.createElement("h2", { className: "text-center font-bold text-2xl mt-7 underline tracking-wider" }, "ADMINISTRADORES"),
        react_1.default.createElement("div", { className: "overflow-auto max-h-[28rem] mx-5 mt-5 bg-white rounded-xl shadow-xl space-x-4 mb-10" },
            react_1.default.createElement("ul", { role: "list", className: "divide-y divide-gray-200" }, usersGet && usersGet?.response.map((par, index) => {
                if (par.nivel !== 5) {
                    return (react_1.default.createElement("li", { key: index, className: "flex justify-between px-4 py-5 hover:bg-gray-100" },
                        par.username,
                        react_1.default.createElement("button", { onClick: () => DeleteUser(par._id), className: "hover:text-black font-semibold text-blue-600 mr-4" }, "Excluir")));
                }
            })))));
}
exports.NewUser = NewUser;
