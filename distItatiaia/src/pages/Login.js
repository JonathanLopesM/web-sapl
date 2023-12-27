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
const AuthProvider_1 = require("../contexts/AuthProvider");
const react_router_dom_1 = require("react-router-dom");
function Login() {
    const { CreateSessionAdmin, idSession, error, setError } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [visible, setVisible] = (0, react_1.useState)(false);
    const InputType = visible ? "text" : "password";
    // @ts-ignore
    const city = import.meta.env.VITE_LOCAL ? import.meta.env.VITE_LOCAL : '';
    console.log(city);
    const history = (0, react_router_dom_1.useNavigate)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const token = localStorage.getItem('sessionid');
    const admin = localStorage.getItem('novace@Admin');
    (0, react_1.useEffect)(() => {
        if (!admin) {
            if (!token) {
                navigate('/');
            }
        }
        else {
            navigate('/sessoes');
        }
        //se não direciona Login
    }, [idSession]);
    function HandleSetPass(e) {
        setPassword(e.target.value);
        setError("");
    }
    function HandleSetUser(e) {
        setUsername(e.target.value);
        setError("");
    }
    async function HandleSubmit(e) {
        e.preventDefault();
        CreateSessionAdmin(username, password);
    }
    return (react_1.default.createElement("div", { className: "flex px-10 justify-items-center h-screen " },
        react_1.default.createElement("div", { className: "hidden sm:flex flex-col items-center gap-4 justify-center mx-auto " },
            react_1.default.createElement("img", { className: "w-70", src: "/novace_logo.png", alt: "Logo Novace" })),
        react_1.default.createElement("div", { className: "flex min-h-full flex-col justify-center  py-12 sm:px-12 sm:border-l-2 " },
            react_1.default.createElement("div", { className: "flex-row sm:mx-auto sm:w-full sm:max-w-sm text-center" },
                react_1.default.createElement("img", { className: "sm:hidden mx-auto w-70", src: "/novace_logo.png", alt: "Logo Novace" }),
                react_1.default.createElement("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" }, "Fa\u00E7a o login para acessar a \u00E1rea!"),
                react_1.default.createElement("h4", { className: "mx-auto font-semibold" }, city)),
            react_1.default.createElement("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm" },
                react_1.default.createElement("form", { className: "space-y-6", onSubmit: HandleSubmit, method: "POST" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { htmlFor: "username", className: "block text-sm font-medium leading-6 text-gray-900" }, "Usu\u00E1rio"),
                        react_1.default.createElement("div", { className: "mt-2" },
                            react_1.default.createElement("input", { onChange: (e) => HandleSetUser(e), value: username, id: "username", name: "username", type: "username", autoComplete: "username", placeholder: "Digite seu username", required: true, className: "block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }))),
                    react_1.default.createElement("div", { className: `flex flex-col ${!error && 'pb-7'}` },
                        react_1.default.createElement("div", { className: "flex items-center justify-between" },
                            react_1.default.createElement("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900" }, "Senha")),
                        react_1.default.createElement("div", { className: 'flex gap-2 border justify-between items-center rounded-md  px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' },
                            react_1.default.createElement("label", { className: ' flex flex-col w-full text-xs text-gray-600 my-1 ', htmlFor: "password" },
                                react_1.default.createElement("input", { onChange: (e) => {
                                        setPassword(e.target.value);
                                    }, value: password || '', className: 'focus:outline-none  text-lg w-full ', type: InputType, name: "password" })),
                            visible ?
                                react_1.default.createElement("svg", { onClick: () => setVisible(!visible), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", color: "#adadad", className: "w-6 h-6  cursor-pointer " },
                                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" }),
                                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }))
                                :
                                    react_1.default.createElement("svg", { onClick: () => setVisible(!visible), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", color: "#adadad", className: "w-6 h-6 cursor-pointer " },
                                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" }))),
                        error && react_1.default.createElement("span", { className: `${!!error ? 'flex' : 'hidden'} bg-red-500 text-white justify-center mt-1` }, error)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("button", { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" }, "Acessar"))),
                react_1.default.createElement("div", { className: "flex mt-20 " },
                    react_1.default.createElement("a", { href: "/parlamentar", className: "text-cyan-400 hover:text-cyan-500 underline" }, "Acesso Parlamentar Aqui"))))));
}
exports.default = Login;
