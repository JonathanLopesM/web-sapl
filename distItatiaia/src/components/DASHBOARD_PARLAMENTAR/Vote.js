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
exports.Vote = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
const outline_1 = require("@heroicons/react/24/outline");
function Vote({ page, setPage }) {
    const { dados, GetDadosPainel, ParlVote, userParl } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [vote, setVote] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        GetDadosPainel();
    }, []);
    (0, react_1.useEffect)(() => {
        if (dados) {
            if (!dados?.data?.estado) {
                setTimeout(() => {
                    setPage("presence");
                }, 3000);
            }
            if (!dados?.data?.materia || !!dados?.data?.result) {
                setTimeout(() => {
                    setPage("presence");
                }, 3000);
            }
        }
    }, [dados]);
    console.log(dados, "dados painel ");
    console.log(!!dados?.data?.result, "data dados visualisar ");
    function handleConfirmVote() {
        console.log("confirm vote");
        console.log(userParl._id, vote, "voto enviado ");
        ParlVote(userParl._id, vote);
        setTimeout(() => {
            setPage("presence");
        }, 2000);
    }
    return (react_1.default.createElement("div", { className: "flex flex-col justify-center items-center max-w-[900px] mx-auto " },
        react_1.default.createElement("div", { className: "flex w-full justify-center border-y-2" }, dados && dados?.data?.estado
            ? react_1.default.createElement("h3", { className: "flex text-2xl font-bold text-green-500" }, "SESSAO AUTORIZADA")
            : react_1.default.createElement("h3", { className: "flex text-2xl font-bold text-red-500" }, "SESSAO N\u00C3O AUTORIZADA")),
        react_1.default.createElement("div", { className: "flex w-full " }, dados && (dados?.data?.materia && !!dados?.data?.result == false)
            ?
                react_1.default.createElement("div", { className: "flex flex-col w-full mt-10 " },
                    react_1.default.createElement("div", { className: "flex flex-col w-[90%] justify-center items-center text-center mx-auto gap-2" },
                        react_1.default.createElement("h5", { className: "flex text-2xl font-bold" }, dados?.data.materia.__str__),
                        react_1.default.createElement("p", { className: "flex text-lg" }, dados?.data.materia.ementa)),
                    react_1.default.createElement("div", { className: "flex flex-col " },
                        react_1.default.createElement("div", { className: "border-b-2 mb-2 " },
                            react_1.default.createElement("h5", { className: "flex text-2xl font-bold px-5 " }, "Vota\u00E7\u00E3o")),
                        react_1.default.createElement("div", { className: "flex flex-col bg-gray-800 h-[200px] rounded-lg mx-1 p-2 justify-between pt-5 items-center" },
                            react_1.default.createElement("div", { className: "flex justify-between w-full max-w-[400px]" },
                                react_1.default.createElement("button", { onClick: () => setVote("Abster"), type: "button", className: `flex w-[100px] h-[80px] bg-white ${vote === "Abster" ? "opacity-100" : "opacity-40"} rounded-md items-center justify-center font-bold text-xl` }, "ABSTER"),
                                react_1.default.createElement("button", { onClick: () => setVote("Não"), type: "button", className: `flex w-[100px] h-[80px] bg-red-400 ${vote === "Não" ? "opacity-100" : "opacity-40"} rounded-md items-center justify-center font-bold text-xl` }, "N\u00C3O"),
                                react_1.default.createElement("button", { onClick: () => setVote("Sim"), type: "button", className: `flex w-[100px] h-[80px] bg-green-400 ${vote === "Sim" ? "opacity-100" : "opacity-40"} rounded-md items-center justify-center font-bold text-xl` }, "SIM")),
                            !!vote
                                ? react_1.default.createElement("button", { onClick: handleConfirmVote, type: "button", className: `flex w-[200px] ${!!vote ? "opacity-100 bg-green-500 hover:bg-green-400" : "opacity-40 bg-white"} rounded-lg font-bold justify-center mx-auto text-xl` }, "CONFIRME")
                                : react_1.default.createElement("span", { className: `flex w-[200px] cursor-default ${!!vote ? "opacity-100 bg-green-500" : "opacity-40 bg-white"} rounded-lg font-bold justify-center mx-auto text-xl` }, "CONFIRME"))))
            :
                react_1.default.createElement("div", { className: "flex flex-col w-full justify-center items-center" },
                    react_1.default.createElement("span", { className: "mt-20 mx-auto sm:text-2xl mb-10" }, "N\u00E3o h\u00E1 Materia em vota\u00E7\u00E3o, volte mais tarde!"),
                    react_1.default.createElement(outline_1.ArrowPathIcon, { className: "w-5 animate-spin " }),
                    react_1.default.createElement("span", null, "Redirecionando voc\u00EA...")))));
}
exports.Vote = Vote;
