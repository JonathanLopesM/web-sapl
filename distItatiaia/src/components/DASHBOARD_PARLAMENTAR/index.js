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
exports.DashParl = void 0;
const react_1 = __importStar(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const react_router_dom_1 = require("react-router-dom");
const AuthProvider_1 = require("../../contexts/AuthProvider");
function DashParl({ page, setPage }) {
    const { presence, GetVotePresence, GetDadosPainel, PresenceId } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [presenceState, setPresenceState] = (0, react_1.useState)(false);
    const [select, setSelect] = (0, react_1.useState)(false);
    const navigation = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        GetVotePresence();
    }, [select, presenceState]);
    function handleSetPresenceState() {
        setSelect(!select);
        setPresenceState(!presenceState);
        PresenceId(!presence);
        setTimeout(() => {
            GetVotePresence();
        }, 1000);
    }
    function handleEnterSession() {
        GetDadosPainel();
        setPage("vote");
    }
    return (react_1.default.createElement("div", { className: "flex flex-col w-[90%] mx-auto max-w-[900px]" },
        react_1.default.createElement("div", { className: "flex flex-col w-full relative" },
            react_1.default.createElement("div", { onClick: () => setPresenceState(!presenceState), className: "flex w-full border-2 border-[#81B7FB] cursor-pointer rounded-lg justify-between hover:opacity-80" },
                !presenceState
                    ? react_1.default.createElement(outline_1.ChevronDownIcon, { className: " pl-2 w-8", color: "#81B7FB" })
                    : react_1.default.createElement(outline_1.ChevronUpIcon, { className: " pl-2 w-8", color: "#81B7FB" }),
                react_1.default.createElement("p", { className: "flex text-xl px-5 py-2 font-bold text-blue-400" }, "SUA PRESEN\u00C7A:"),
                presence ?
                    react_1.default.createElement("span", { className: "flex w-[110px] rounded-r-md bg-green-400 text-center items-center justify-center font-bold text-white text-xl   " }, "Presente")
                    : react_1.default.createElement("span", { className: "flex w-[110px] rounded-r-md bg-red-400 text-center items-center justify-center font-bold text-white text-xl   " }, "Ausente")),
            presenceState
                && react_1.default.createElement("div", { className: "flex absolute flex-col border border-black text-center justify-center items-center rounded-md mt-14 w-full h-[120px] mx-auto text-xl gap-2 py-2 bg-white" },
                    "Marque a sua presen\u00E7a na c\u00E2mara",
                    react_1.default.createElement("button", { onClick: handleSetPresenceState, className: "flex w-[200px] bg-blue-300 text-white text-xl font-bold justify-center rounded-md py-2" }, "PRESEN\u00C7A"))),
        presence && react_1.default.createElement("div", { onClick: handleEnterSession, className: "flex h-[100px] border-2 border-[#81B7FB] rounded-md mt-10 p-[2px] cursor-pointer" },
            react_1.default.createElement("div", { className: "flex bg-[#81B7FB] rounded-l-md" },
                react_1.default.createElement(outline_1.ChevronDoubleRightIcon, { className: "w-10", color: "white" })),
            react_1.default.createElement("div", { className: "flex font-bold justify-center text-center w-full items-center" },
                react_1.default.createElement("span", { className: "text-2xl text-[#81B7FB] " }, "Entrar na Sess\u00E3o")))));
}
exports.DashParl = DashParl;
