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
exports.Dashboard = void 0;
const react_1 = __importStar(require("react"));
const ModalAddSession_1 = __importDefault(require("../components/ModalAddSession"));
const ModalSearch_1 = __importDefault(require("../components/ModalSearch"));
const AuthProvider_1 = require("../contexts/AuthProvider");
const Header_1 = require("../components/Header");
function Dashboard() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [openSearch, setOpenSearch] = (0, react_1.useState)(false);
    const { GetSessions, GetParlamentares, userAdm, setUserAdm, parlamentares, sessions, navigate, year, setYear, month, setMonth, day, setDay, type, setType, dash, setDash, sess, setSess, userParl, setUserParl } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    (0, react_1.useEffect)(() => {
        const user = localStorage.getItem("novace@Admin");
        if (!user) {
            navigate("/");
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (!sessions) {
            GetSessions(year, month, day, type);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (!parlamentares) {
            GetParlamentares();
        }
    }, []);
    function HandleSearch() {
        GetSessions(year, month, day, type);
    }
    function formatDate(newDate) {
        const months = {
            0: 'Janeiro',
            1: 'Fevereiro',
            2: 'Março',
            3: 'Abril',
            4: 'Maio',
            5: 'Junho',
            6: 'Julho',
            7: 'Agosto',
            8: 'Setembro',
            9: 'Outubro',
            10: 'Novembro',
            11: 'Dezembro',
        };
        const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sat'];
        const d = new Date(newDate);
        const year = d.getFullYear();
        const date = d.getDate() + 1;
        const monthIndex = d.getMonth();
        const monthName = months[d.getMonth()];
        const dayName = days[d.getDay()]; // Thu
        const formatted = `${dayName}, ${date} ${monthName} ${year}`;
        return formatted.toString();
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.Header, null),
        react_1.default.createElement("div", { className: "flex flex-col w-[95%] mx-auto mt-10" },
            react_1.default.createElement(ModalSearch_1.default, { open: openSearch, setOpen: setOpenSearch }),
            react_1.default.createElement(ModalAddSession_1.default, { open: open, setOpen: setOpen }),
            react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                react_1.default.createElement("h3", { className: "flex text-xl sm:text-4xl font-semibold" }, "Selecionar Sess\u00E3o Plen\u00E1ria")),
            react_1.default.createElement("div", { className: "hidden flex-col gap-4 " },
                react_1.default.createElement("h3", { className: "flex text-xl" }, "Pesquisa de sess\u00E3o Plen\u00E1ria"),
                react_1.default.createElement("div", { className: "flex flex-col sm:flex-row gap-2" },
                    react_1.default.createElement("div", { className: "flex gap-2" },
                        react_1.default.createElement("label", { className: "flex flex-col", htmlFor: "ano" },
                            "Ano",
                            react_1.default.createElement("select", { className: "flex border w-44 rounded-md px-2 py-1", name: "ano", id: "ano" },
                                react_1.default.createElement("option", { value: year }, "2023"))),
                        react_1.default.createElement("label", { className: "flex flex-col", htmlFor: "mes" },
                            "M\u00EAs",
                            react_1.default.createElement("select", { className: "flex border w-44 rounded-md px-2 py-1", name: "mes", id: "mes" },
                                react_1.default.createElement("option", { value: "------" }, "-------"),
                                react_1.default.createElement("option", { value: "janeiro" }, "Janeiro"),
                                react_1.default.createElement("option", { value: "fevereiro" }, "Fevereiro"),
                                react_1.default.createElement("option", { value: "mar\u00E7o" }, "Mar\u00E7o"),
                                react_1.default.createElement("option", { value: "abril" }, "Abril"),
                                react_1.default.createElement("option", { value: "Maio" }, "Maio"),
                                react_1.default.createElement("option", { value: "Junho" }, "Junho"),
                                react_1.default.createElement("option", { value: "Julho" }, "Julho"),
                                react_1.default.createElement("option", { value: "Agosto" }, "Agosto"),
                                react_1.default.createElement("option", { value: "Setembro" }, "Setembro"),
                                react_1.default.createElement("option", { value: "Outubro" }, "Outubro"),
                                react_1.default.createElement("option", { value: "Novembro" }, "Novembro"),
                                react_1.default.createElement("option", { value: "Dezembro" }, "Dezembro")))),
                    react_1.default.createElement("div", { className: "flex  gap-2 mx-auto" },
                        react_1.default.createElement("label", { className: "flex flex-col", htmlFor: "mes" },
                            "Dia",
                            react_1.default.createElement("select", { className: "flex border w-44 rounded-md px-2 py-1", name: "dia", id: "dia" },
                                react_1.default.createElement("option", { value: "------" }, "-------"),
                                react_1.default.createElement("option", { value: "1" }, "1"),
                                react_1.default.createElement("option", { value: "2" }, "2"),
                                react_1.default.createElement("option", { value: "3" }, "3"),
                                react_1.default.createElement("option", { value: "4" }, "4"),
                                react_1.default.createElement("option", { value: "5" }, "5"),
                                react_1.default.createElement("option", { value: "6" }, "6"),
                                react_1.default.createElement("option", { value: "7" }, "7"),
                                react_1.default.createElement("option", { value: "8" }, "8"),
                                react_1.default.createElement("option", { value: "9" }, "9"),
                                react_1.default.createElement("option", { value: "10" }, "10"),
                                react_1.default.createElement("option", { value: "11" }, "11"),
                                react_1.default.createElement("option", { value: "12" }, "12"),
                                react_1.default.createElement("option", { value: "13" }, "13"),
                                react_1.default.createElement("option", { value: "14" }, "14"),
                                react_1.default.createElement("option", { value: "15" }, "15"),
                                react_1.default.createElement("option", { value: "16" }, "16"),
                                react_1.default.createElement("option", { value: "17" }, "17"),
                                react_1.default.createElement("option", { value: "18" }, "18"),
                                react_1.default.createElement("option", { value: "19" }, "19"),
                                react_1.default.createElement("option", { value: "20" }, "20"),
                                react_1.default.createElement("option", { value: "21" }, "21"),
                                react_1.default.createElement("option", { value: "22" }, "22"),
                                react_1.default.createElement("option", { value: "23" }, "23"),
                                react_1.default.createElement("option", { value: "24" }, "24"),
                                react_1.default.createElement("option", { value: "25" }, "25"),
                                react_1.default.createElement("option", { value: "26" }, "26"),
                                react_1.default.createElement("option", { value: "27" }, "27"),
                                react_1.default.createElement("option", { value: "28" }, "28"),
                                react_1.default.createElement("option", { value: "29" }, "29"),
                                react_1.default.createElement("option", { value: "30" }, "30"),
                                react_1.default.createElement("option", { value: "31" }, "31"))),
                        react_1.default.createElement("label", { className: "flex flex-col", htmlFor: "mes" },
                            "Tipo",
                            react_1.default.createElement("select", { className: "flex border w-44 rounded-md px-2 py-1", name: "tipo", id: "tipo" },
                                react_1.default.createElement("option", { value: "------" }, "-------"),
                                react_1.default.createElement("option", { value: "Sess\u00E3o Extraordin\u00E1ria" }, "Sess\u00E3o Extraordin\u00E1ria"),
                                react_1.default.createElement("option", { value: "Sess\u00E3o Ordin\u00E1ria" }, "Sess\u00E3o Ordin\u00E1ria"),
                                react_1.default.createElement("option", { value: "Sess\u00E3o Solene" }, "Sess\u00E3o Solene"))))),
                react_1.default.createElement("div", { className: "flex w-full justify-end" },
                    react_1.default.createElement("button", { onClick: HandleSearch, className: "flex bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900" }, "Pesquisar"))),
            react_1.default.createElement("div", { className: "flex flex-col mt-5 divide-y-2 gap-5" },
                react_1.default.createElement("h3", { className: "flex text-lg" }, "Sess\u00F5es encontradas"),
                react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                    react_1.default.createElement("h3", { className: "px-2 py-4 text-xl" }, "Resultados"),
                    react_1.default.createElement("div", { className: "flex flex-col gap-5" }, sessions ? sessions.map(ses => (react_1.default.createElement("div", { key: ses.id, onClick: () => { navigate(`/sessoes/sessao/${ses.id}`); }, className: "flex flex-col bg-gray-200 p-2 rounded-md cursor-pointer" },
                        react_1.default.createElement("h3", { className: "flex font-bold text-blue-500 text-xl" }, ses.__str__),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("span", { className: "font-bold pr-2" }, "Abertura:"),
                            react_1.default.createElement("span", null, formatDate(ses.data_inicio))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("span", { className: "font-bold pr-2" }, "Legislatura:"),
                            ses.legislatura == 1 && react_1.default.createElement("span", null,
                                ses.numero,
                                "\u00AA (2021 - 2024)(Atual)")),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("span", { className: "font-bold pr-2" }, "Sess\u00E3o Legislativa:"),
                            ses.sessao_legislativa == 1 && react_1.default.createElement("span", null, "3\u00BA (2023 - 2023)(Atual)")),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("span", { className: "font-bold pr-2" }, "Tipo:"),
                            ses.tipo == 1 && react_1.default.createElement("span", null, "Sess\u00E3o Ordin\u00E1ria")))))
                        : react_1.default.createElement("h5", { className: "mx-auto" }, "Nenhuma sess\u00E3o encontrada...")))))));
}
exports.Dashboard = Dashboard;
