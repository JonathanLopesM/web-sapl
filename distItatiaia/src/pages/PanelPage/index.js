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
exports.Painel = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
const parlamentares_1 = require("../../components/Panel/parlamentares");
const resultadoVotacao_1 = require("../../components/Panel/resultadoVotacao");
const apiNode_1 = require("../../services/apiNode");
const Welcome_1 = require("../../components/Panel/Welcome");
const Message_1 = require("../../components/Panel/Message");
const index_1 = require("../../components/Panel/Speech/index");
const react_router_dom_1 = require("react-router-dom");
// const socket = io('http://localhost:3333');
let poolingTimeout;
async function PoolingToBack(setDados) {
    await (0, apiNode_1.getData)(setDados);
    poolingTimeout = setTimeout(() => PoolingToBack(setDados), 500);
}
function Painel() {
    const { dados, setDados, idSession } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        // Conferir se tem um token, 
        // se tiver rediciona para a dashboard 
        const token = localStorage.getItem('sessionid');
    }, [idSession]);
    (0, react_1.useEffect)(() => {
        PoolingToBack(setDados);
        return () => clearTimeout(poolingTimeout);
    }, []);
    let presences = [];
    if (dados && dados?.data && dados?.data?.stateVote) {
        presences = dados?.data?.stateVote.filter(fil => {
            if (fil.presenca == true) {
                return fil;
            }
        });
    }
    let result;
    if (dados?.data?.result) {
        let array = dados?.data?.result?.__str__.split(" - ");
        console.log(array[2], "tipo da resposta ");
        result = array[2];
    }
    console.log(dados?.data, "dados de mater");
    return (react_1.default.createElement("div", { className: "flex flex-col text-white h-full lg:h-screen w-full bg-gray-900 " },
        react_1.default.createElement("header", { className: "flex w-full border-b justify-center text-white lg:gap-4 py-1 lg:my-4 lg:pb-4" },
            react_1.default.createElement("div", { className: "flex sm:w-[80%] items-center gap-2" },
                react_1.default.createElement("div", { className: 'flex py-2 px-2 bg-white rounded-full ' },
                    react_1.default.createElement("img", { className: "w-8 h-8 ", src: "/Brasao_barra_Mansa.jpeg", alt: "" })),
                react_1.default.createElement("h1", { className: "flex lg:text-4xl font-bold" }, "Painel de vota\u00E7\u00E3o"))),
        react_1.default.createElement("div", { className: "flex flex-col  " },
            react_1.default.createElement("div", { className: "flex flex-col w-full  items-center h-full  mb-5" }, !dados?.data?.estado ? react_1.default.createElement(Welcome_1.WelcomeToPeapleHome, { dados: dados?.data })
                : react_1.default.createElement(react_1.default.Fragment, null,
                    dados?.data?.tela === 0 && react_1.default.createElement(Welcome_1.WelcomeToPeapleHome, { dados: dados?.data }),
                    dados?.data?.tela === 1 && react_1.default.createElement(parlamentares_1.PainelParlamentares, { dados: dados?.data, materia: dados?.data.materia }),
                    dados?.data?.tela === 2 && react_1.default.createElement(resultadoVotacao_1.ResultadoVotacao, { dados: dados, materia: dados?.data.materia }),
                    dados?.data?.tela === 3 && react_1.default.createElement(index_1.SpeechPanel, { dados: dados?.data }),
                    dados?.data?.tela === 4 && react_1.default.createElement("h5", { className: "flex w-full text-center mx-auto justify-center items-center bg-white text-black text-6xl font-extrabold p-4" }, "SIL\u00CANCIO!"),
                    dados?.data?.tela === 5 && react_1.default.createElement(Message_1.Message, { dados: dados?.data })))),
        dados?.data?.stateVote && !dados?.data.materia &&
            react_1.default.createElement("div", { className: `flex bg-gray-200 mt-auto justify-center  py-1` },
                react_1.default.createElement("div", { className: "flex justify-between sm:w-[80%]" },
                    react_1.default.createElement("h4", { className: " text-green-500 text-3xl font-bold " }, "PRESEN\u00C7A PARLAMENTAR"),
                    react_1.default.createElement("h4", { className: " text-green-500 text-3xl font-bold " },
                        presences?.length,
                        " Presente(s)"))),
        dados?.data?.result &&
            react_1.default.createElement("div", { className: `flex bg-gray-200 mt-auto justify-center py-2 text-xl sm:text-xl lg:text-2xl` },
                react_1.default.createElement("div", { className: "flex flex-col sm:flex-row justify-center sm:justify-between sm:w-[80%] items-center" },
                    react_1.default.createElement("div", { className: "flex gap-8" },
                        react_1.default.createElement("h4", { className: " text-gray-800 font-bold " },
                            "SIM: ",
                            dados?.data?.response?.Yes),
                        react_1.default.createElement("h4", { className: " text-gray-800 font-bold " },
                            "N\u00C3O: ",
                            dados?.data?.response?.Not),
                        react_1.default.createElement("h4", { className: " text-gray-800 font-bold " },
                            "ABSTER: ",
                            dados?.data?.response?.Abstain)),
                    result.includes("APROVADO") && react_1.default.createElement("h4", { className: " text-green-700 text-xs sm:text-xl lg:text-2xl font-bold " }, result),
                    result.includes("REPROVADA") && react_1.default.createElement("h4", { className: " text-red-700 text-xs sm:text-xl lg:text-2xl font-bold " }, result)))));
}
exports.Painel = Painel;
