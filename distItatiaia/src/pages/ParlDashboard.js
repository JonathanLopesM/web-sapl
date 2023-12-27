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
exports.ParlDashboard = void 0;
const react_1 = __importStar(require("react"));
const Header_1 = require("../components/DASHBOARD_PARLAMENTAR/Header");
const DASHBOARD_PARLAMENTAR_1 = require("../components/DASHBOARD_PARLAMENTAR");
const AuthProvider_1 = require("../contexts/AuthProvider");
const outline_1 = require("@heroicons/react/24/outline");
const Vote_1 = require("../components/DASHBOARD_PARLAMENTAR/Vote");
function ParlDashboard() {
    const [page, setPage] = (0, react_1.useState)("presence");
    const { userParl, setUserParl, LogoutParl, PresenceId, GetVotePresence, presence, dados } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [openSidebar, setOpenSidebar] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (!userParl) {
            let user = localStorage.getItem("novace@userParl");
            console.log(user, "user vindo do par");
            user = JSON.parse(user);
            setUserParl(user);
        }
        GetVotePresence();
    }, []);
    console.log(userParl, "parl");
    console.log(presence, "presence");
    console.log(dados, "dados dados dados ");
    return (react_1.default.createElement("div", { className: "flex  w-full  h-screen mx-auto" },
        react_1.default.createElement("div", { className: "flex flex-col w-full " },
            react_1.default.createElement(Header_1.Header, { openSidebar: openSidebar, setOpenSidebar: setOpenSidebar, page: page }),
            react_1.default.createElement("div", { className: "w-full max-w-[900px] mx-auto" },
                react_1.default.createElement("h3", { className: "text-xl font-bold text-gray-500 p-4 max-w-[900px]  " },
                    "Bem vindo ",
                    userParl?.__str__,
                    "!")),
            page == "presence" && react_1.default.createElement(DASHBOARD_PARLAMENTAR_1.DashParl, { page: page, setPage: setPage }),
            page == "vote" && react_1.default.createElement(Vote_1.Vote, { page: page, setPage: setPage })),
        openSidebar &&
            react_1.default.createElement("div", { className: "absolute inset-y-0 right-0 w-[70%] max-w-[300px] bg-white border-2" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("header", { className: "flex w-full bg-white  items-center" },
                        react_1.default.createElement("div", { className: "flex w-10 h-10 hover:bg-gray-500 rounded-lg items-center justify-center cursor-pointer" },
                            react_1.default.createElement(outline_1.XMarkIcon, { onClick: () => setOpenSidebar(!openSidebar), className: "block h-6 w-6", "aria-hidden": "true" })),
                        react_1.default.createElement("img", { className: "block h-14 w-auto lg:h-16 mx-auto", src: "/novace_logo.png", alt: "Logo Novace" })),
                    react_1.default.createElement("div", { className: "bg-[#1175B7] w-full h-[300px]" }, userParl &&
                        react_1.default.createElement("div", { className: "flex flex-col justify-center  p-4" },
                            react_1.default.createElement("div", { className: "flex justify-center  rounded-full w-[100px] h-[100px] overflow-hidden bg-white " },
                                react_1.default.createElement("img", { className: "flex w-[80px] h-[100px] ", src: userParl?.fotografia, alt: userParl?.__str__ })),
                            react_1.default.createElement("div", { className: "flex flex-col text-white font-bold" },
                                react_1.default.createElement("span", { className: "font-light" }, "usu\u00E1rio:"),
                                react_1.default.createElement("span", null, userParl?.__str__),
                                react_1.default.createElement("span", { className: "font-light  mt-2" }, "username:"),
                                react_1.default.createElement("span", null, userParl?.username)),
                            react_1.default.createElement("button", { onClick: LogoutParl, type: "button", className: "flex border mt-10 font-bold bg-white hover:bg-gray-200 text-center justify-center rounded-md" }, "SAIR")))))));
}
exports.ParlDashboard = ParlDashboard;
