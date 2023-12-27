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
const react_1 = require("react");
const react_2 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = require("../../components/Header");
function ModalEdit() {
    const { usersGet, Cadastros } = (0, react_2.useContext)(AuthProvider_1.AuthContext);
    const { id } = (0, react_router_dom_1.useParams)();
    const filterUserRes = usersGet.resParl.filter((fil) => {
        if (fil.id == id) {
            return fil;
        }
        return;
    });
    const [user, setUser] = (0, react_1.useState)({
        id: filterUserRes[0]._id,
        username: filterUserRes[0].username,
        password: '',
        confirmPass: '',
        active: filterUserRes[0].active,
    });
    const enviaForm = (event) => {
        event.preventDefault();
        if (user.username === '') {
            alert('Preencha o campo "Username"');
            return;
        }
        if (user.password !== '') {
            if (user.password === '') {
                alert('Preencha o campo "Senha de Acesso"');
                return;
            }
        }
        if (user.password !== user.confirmPass) {
            alert('Senhas não conferem. Revise os campos');
            return;
        }
        alert('Edição salva com sucesso!');
        Cadastros();
    };
    return (react_2.default.createElement("div", null,
        react_2.default.createElement(Header_1.Header, null),
        react_2.default.createElement("div", { className: " bg-white px-4 pt-5 sm:p-6 sm:pb-4 mx-auto flex flex-col sm:items-start border-b border-gray-900/10 pb-12 w-[95%]" },
            react_2.default.createElement("h2", { className: "self-center font-semibold leading-7 text-gray-900 text-3xl mt-5 underline tracking-wider" }, "Editar Usu\u00E1rio"),
            react_2.default.createElement("div", { className: 'w-full' },
                react_2.default.createElement("form", { action: "#", method: "post", onSubmit: enviaForm },
                    react_2.default.createElement("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-w-[900px] mx-auto" },
                        react_2.default.createElement("div", { className: "sm:col-span-3" },
                            react_2.default.createElement("label", { htmlFor: "first-name", className: "block text-sm font-medium leading-6 text-gray-900" }, "Username:"),
                            react_2.default.createElement("div", { className: "mt-2" },
                                react_2.default.createElement("input", { type: "text", name: "first-name", id: "first-name", value: user.username, onChange: (event) => setUser({ ...user, username: event.target.value.toLocaleLowerCase() }), className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" }))),
                        react_2.default.createElement("div", { className: "sm:col-span-3" },
                            react_2.default.createElement("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900" }, "Senha de Acesso:"),
                            react_2.default.createElement("div", { className: "mt-2" },
                                react_2.default.createElement("input", { id: "password", name: "password", type: "text", autoComplete: "new-password", placeholder: '* Opcional', value: user.password, onChange: (event) => setUser({ ...user, password: event.target.value }), className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" }))),
                        react_2.default.createElement("div", { className: "sm:col-span-3" },
                            react_2.default.createElement("label", { htmlFor: "confirmpass", className: "block text-sm font-medium leading-6 text-gray-900" }, "Confirme a Senha:"),
                            react_2.default.createElement("div", { className: "mt-2" },
                                react_2.default.createElement("input", { id: "confirmpass", name: "confirmpass", type: "text", value: user.confirmPass, onChange: (event) => setUser({ ...user, confirmPass: event.target.value }), className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" }))),
                        react_2.default.createElement("div", { className: "sm:col-span-3" },
                            react_2.default.createElement("label", { htmlFor: "active", className: "block text-sm font-medium leading-6 text-gray-900" }, "Acesso:"),
                            react_2.default.createElement("div", { className: "mt-2" },
                                react_2.default.createElement("select", { id: "active", name: "active", value: user.active, onChange: (event) => setUser({ ...user, active: event.target.value }), className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" },
                                    react_2.default.createElement("option", { value: 0 }, "Inativo"),
                                    react_2.default.createElement("option", { value: 1 }, "Ativo"))))),
                    react_2.default.createElement("div", { className: 'flex flex-row justify-center gap-7' },
                        react_2.default.createElement("button", { type: "submit", className: "flex mt-10 rounded-md bg-sky-200 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 " }, "Salvar"),
                        react_2.default.createElement("button", { className: "flex mt-10 rounded-md bg-sky-200 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 ", onClick: Cadastros }, "Voltar")))))));
}
exports.default = ModalEdit;
