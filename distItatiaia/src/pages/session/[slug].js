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
exports.Session = void 0;
const react_1 = __importStar(require("react"));
const index_1 = require("../../contexts/AuthProvider/index");
const react_router_dom_1 = require("react-router-dom");
const Processo_1 = require("../../components/Processo");
const Mesa_1 = require("../../components/Mesa");
const index_2 = require("../../components/ControlPanel/index");
const apiNode_1 = require("../../services/apiNode");
const OrdemDoDia_1 = require("../../components/OrdemDoDia");
const Presenca_1 = require("../../components/Presenca");
const Ausencia_1 = require("../../components/Ausencia");
const Header_1 = require("../../components/Header");
function Session() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [openSearch, setOpenSearch] = (0, react_1.useState)(false);
    const { sessions, GetSessions, DayOrderIds, dayOrder, setDayOrders, PresenceReload, panelId, SaveIdPanel, GetIdSpeech, getIdSpeech } = (0, react_1.useContext)(index_1.AuthContext);
    const { id } = (0, react_router_dom_1.useParams)();
    const [layout, setLayout] = (0, react_1.useState)('dadosbasicos');
    (0, react_1.useEffect)(() => {
        if (!getIdSpeech) {
            GetIdSpeech();
        }
        if (!sessions) {
            GetSessions('2023', '', '', '');
        }
        if (!panelId) {
            SaveIdPanel();
        }
    }, []);
    (0, react_1.useEffect)(() => {
        DayOrderIds(id);
        if (panelId) {
            return () => {
                console.log("Executou a função de zerar as presenças");
                PresenceReload();
                (0, apiNode_1.PatchPanelView)(panelId, 0);
            };
        }
    }, []);
    console.log(getIdSpeech, 'getId no session slug');
    const history = (0, react_router_dom_1.useNavigate)();
    let session = '';
    if (sessions) {
        session = sessions.filter(ses => {
            if (ses.id == id) {
                return ses;
            }
        });
    }
    return (react_1.default.createElement("div", { className: "flex flex-col " },
        react_1.default.createElement(Header_1.Header, null),
        session &&
            react_1.default.createElement("div", { className: "flex flex-col sm:w-[95%] px-2 sm:px-5 lg:px-0  md:max-w-[1200px] mx-auto gap-2" },
                react_1.default.createElement("div", { className: "flex w-full  2xl:w-full justify-start gap-4 mt-2" },
                    react_1.default.createElement("button", { onClick: () => setLayout('paineleletronico'), className: "flex items-center border-2 px-2 rounded-md text-2xl hover:bg-gray-400" }, "Painel Eletr\u00F4nico")),
                layout == 'dadosbasicos' && react_1.default.createElement(Processo_1.Processo, { session: session }),
                layout == 'mesa' && react_1.default.createElement(Mesa_1.MesaDiretora, null),
                layout == 'presenca' && react_1.default.createElement(Presenca_1.Presenca, null),
                layout == 'ausencia' && react_1.default.createElement(Ausencia_1.Ausencia, null),
                layout == 'ordemdodia' && react_1.default.createElement(OrdemDoDia_1.OrdemDoDiaLayout, null),
                layout == 'paineleletronico' && react_1.default.createElement(index_2.PainelEletronico, { session: session[0] }))));
}
exports.Session = Session;
