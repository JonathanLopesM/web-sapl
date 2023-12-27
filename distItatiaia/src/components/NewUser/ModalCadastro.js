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
const react_2 = require("@headlessui/react");
const react_3 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
function ModalCadastro({ open, setOpen, }) {
    const cancelButtonRef = (0, react_1.useRef)(null);
    const { SearchParliamen, searchParl, CreateUser } = (0, react_3.useContext)(AuthProvider_1.AuthContext);
    const [formParl, setFormParl] = (0, react_1.useState)('');
    const [formIdParl, setFormIdParl] = (0, react_1.useState)('');
    const [viewParOptions, setViewParOptions] = (0, react_1.useState)(false);
    const [pessoas, setPessoas] = (0, react_1.useState)([]);
    const [confirmPass, setConfirmPass] = (0, react_1.useState)({ confirmPass: '' });
    const [user, setUser] = (0, react_1.useState)({
        username: "",
        password: "",
        active: "1",
        nivel: "1",
        id: { formIdParl }
    });
    (0, react_1.useEffect)(() => {
        //Função de busca dos parlamentares na api
        SearchParliamen();
    }, []);
    const enviaForm = (event) => {
        event.preventDefault();
        if (formIdParl === '' && user.nivel === '1') {
            alert('Preencha o campo "Parlamentar Relacionado"');
            return;
        }
        if (user.username === '') {
            alert('Preencha o campo "Username"');
            return;
        }
        if (user.password === '') {
            alert('Preencha o campo "Senha de Acesso"');
            return;
        }
        if (user.password !== confirmPass.confirmPass) {
            alert('Senhas não conferem. Revise os campos');
            return;
        }
        setPessoas([...pessoas, user]);
        const id = formIdParl;
        // props da funcao
        CreateUser(user.username, user.password, confirmPass.confirmPass, user.active, user.nivel, id);
        // Limpar os <input> após realizar cadastro
        setConfirmPass({ confirmPass: '' });
        setFormParl('');
        setUser({
            username: '',
            password: '',
            active: '1',
            nivel: '1',
            id: undefined
        });
    };
    const filterNameParlm = (0, react_3.useMemo)(() => {
        const lowerCaseName = formParl.toLowerCase();
        return searchParl ? searchParl.filter(par => par.nome_completo.toLowerCase().includes(lowerCaseName)) : [];
    }, [formParl, searchParl]);
    return (react_3.default.createElement("div", null,
        react_3.default.createElement(react_2.Transition.Root, { show: open, as: react_1.Fragment },
            react_3.default.createElement(react_2.Dialog, { as: "div", className: "relative z-10", initialFocus: cancelButtonRef, onClose: setOpen },
                react_3.default.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react_3.default.createElement("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })),
                react_3.default.createElement("div", { className: "fixed inset-0 z-10 overflow-y-auto flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" },
                    react_3.default.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                        react_3.default.createElement(react_2.Dialog.Panel, { className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[95%] sm:w-[80%]  " },
                            react_3.default.createElement("div", { className: "flex flex-col sm:items-start bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto w-full" },
                                react_3.default.createElement("form", { className: 'w-full', action: "#", method: "post", onSubmit: enviaForm },
                                    react_3.default.createElement("h2", { className: "text-center font-semibold leading-7 text-gray-900 text-3xl mt-5 underline tracking-wider" }, "Informa\u00E7\u00F5es Pessoais"),
                                    react_3.default.createElement("div", { className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-auto" },
                                        react_3.default.createElement("div", { className: "sm:col-span-3" },
                                            react_3.default.createElement("label", { htmlFor: "confirmpassword", className: "block text-sm font-medium leading-6 text-gray-900" }, "Tipo de Usu\u00E1rio:"),
                                            react_3.default.createElement("div", { className: "flex mt-2 w-full" },
                                                react_3.default.createElement("select", { id: "nivel", name: "nivel", value: user.nivel, onChange: (event) => setUser({ ...user, nivel: event.target.value }), className: "flex w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" },
                                                    react_3.default.createElement("option", { value: 1 }, " Parlamentar"),
                                                    react_3.default.createElement("option", { value: 2 }, " Sub-Administrador")))),
                                        react_3.default.createElement("br", null),
                                        react_3.default.createElement("div", { className: `${user.nivel !== '1' ? 'hidden' : ''} sm:col-span-3 relative` },
                                            react_3.default.createElement("label", { htmlFor: "confirmpassword", className: "block text-sm font-medium leading-6 text-gray-900" }, "Parlamentar Relacionado:"),
                                            react_3.default.createElement("div", { className: "mt-2" },
                                                react_3.default.createElement("input", { id: "id", name: "id", value: formParl, onChange: e => { setFormParl(e.target.value); setViewParOptions(true); }, className: "block sm:w-full lg:w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" })),
                                            viewParOptions && formParl.length > 0 &&
                                                react_3.default.createElement("div", { className: "absolute border py-2 h-28 bg-white w-full" },
                                                    react_3.default.createElement("ul", { className: "flex flex-col overflow-auto h-24" }, filterNameParlm && filterNameParlm.map(par => (react_3.default.createElement("li", { onClick: () => {
                                                            setFormIdParl(par.id);
                                                            setFormParl(par.__str__);
                                                            setViewParOptions(false);
                                                        }, className: "flex hover:bg-slate-100 cursor-pointer px-4" }, par.__str__)))))),
                                        react_3.default.createElement("div", { className: "sm:col-span-3" },
                                            react_3.default.createElement("label", { htmlFor: "first-name", className: "block text-sm font-medium leading-6 text-gray-900" }, "Username:"),
                                            react_3.default.createElement("div", { className: "mt-2" },
                                                react_3.default.createElement("input", { type: "text", name: "first-name", id: "first-name", value: user.username, onChange: (event) => setUser({ ...user, username: event.target.value.toLocaleLowerCase() }), className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" }))),
                                        react_3.default.createElement("div", { className: "sm:col-span-3" },
                                            react_3.default.createElement("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900" }, "Senha de Acesso:"),
                                            react_3.default.createElement("div", { className: "mt-2" },
                                                react_3.default.createElement("input", { id: "password", name: "password", type: "text", autoComplete: "new-password", value: user.password, onChange: (event) => setUser({ ...user, password: event.target.value }), className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" }))),
                                        react_3.default.createElement("div", { className: "sm:col-span-3" },
                                            react_3.default.createElement("label", { htmlFor: "confirmpassword", className: "block text-sm font-medium leading-6 text-gray-900" }, "Confirme a Senha:"),
                                            react_3.default.createElement("div", { className: "mt-2" },
                                                react_3.default.createElement("input", { id: "confirmpass", name: "confirmpass", type: "text", value: confirmPass.confirmPass, onChange: (event) => setConfirmPass((prevState) => ({ ...prevState, confirmPass: event.target.value })), className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" }))),
                                        react_3.default.createElement("div", { className: "sm:col-span-3" },
                                            react_3.default.createElement("label", { htmlFor: "confirmpassword", className: "block text-sm font-medium leading-6 text-gray-900" }, "Acesso:"),
                                            react_3.default.createElement("div", { className: "mt-2" },
                                                react_3.default.createElement("select", { className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5", id: "active", name: "active", value: user.active, onChange: (event) => setUser({ ...user, active: event.target.value }) },
                                                    react_3.default.createElement("option", { value: 0 }, "Inativo"),
                                                    react_3.default.createElement("option", { value: 1 }, "Ativo"))))),
                                    react_3.default.createElement("button", { type: "submit", className: "flex mt-10 rounded-md bg-sky-200 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 mx-auto" }, "Cadastrar"))))))))));
}
exports.default = ModalCadastro;
