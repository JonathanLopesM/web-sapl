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
exports.Register = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../../contexts/AuthProvider");
function Register({ setMatterState, sessionId, setProjectsView }) {
    const { MatterUpdated, GetVotes, resultVote, voteResParl, votes, setVotes, matterComplet, CloseVote, Matters, PatchVotePar, ReloadVotePanel, RegisterVoteSapl, PatchPresenceParl, PatchPresenceParlMany } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    (0, react_1.useEffect)(() => {
        if (!resultVote) {
            GetVotes();
        }
    }, []);
    const [yesVoteForm, setYesVoteForm] = (0, react_1.useState)(resultVote && resultVote?.Yes);
    const [notVoteForm, setNotVoteForm] = (0, react_1.useState)(resultVote && resultVote?.Not);
    const [abstentionForm, setAbstentionForm] = (0, react_1.useState)(resultVote && resultVote?.Yes);
    const [precenseForm, setPresenseForm] = (0, react_1.useState)(resultVote && resultVote?.Presense);
    const [voteTotalForm, setVoteTotalForm] = (0, react_1.useState)(resultVote && resultVote?.totalVotes);
    const [resultVoteForm, setResultVoteForm] = (0, react_1.useState)(0);
    const [observation, setObservation] = (0, react_1.useState)("");
    const [buttonClose, setButtonClose] = (0, react_1.useState)(true);
    const [presenceMany, setPresenceMany] = (0, react_1.useState)(false);
    const [valueVote, setValueVote] = (0, react_1.useState)();
    const handleCancel = () => {
        setMatterState("");
        // ReloadVotePanel()
        // MatterUpdated("", false)
        setVotes(!votes);
        setProjectsView("materias");
    };
    function handleCloseVote(e) {
        console.log(sessionId, voteResParl, resultVote?.Yes, resultVote?.Not, resultVote?.abstain, observation, "", resultVoteForm, Number(resultVote?.materia), matterComplet.matterId, null, null);
        RegisterVoteSapl(sessionId, voteResParl, resultVote?.Yes, resultVote?.Not, resultVote?.abstain, observation, "", resultVoteForm, Number(resultVote?.materia), matterComplet.matterId, null, null);
        setButtonClose(false);
        CloseVote(matterComplet.id, matterComplet?.matterId, Number(resultVoteForm), observation, resultVote?.Yes, resultVote?.Not, resultVote?.totalVotes, voteResParl);
        Matters(sessionId);
        MatterUpdated(undefined, true);
    }
    function handleEncerrar() {
        Matters(sessionId);
        // ReloadVotePanel()
        setProjectsView("materias");
        // setMatterState("")
        // MatterUpdated("", false)
        setVotes(!votes);
    }
    function handleEditVote(id, novoVoto) {
        PatchVotePar(id, novoVoto);
        setTimeout(() => {
            GetVotes();
        }, 1000);
    }
    function handleEditPresence(id, presence) {
        console.log(id, presence);
        let precensaBoolean = false;
        if (presence === 'Presente')
            precensaBoolean = true;
        PatchPresenceParl(id, precensaBoolean);
        setTimeout(() => {
            GetVotes();
        }, 1000);
    }
    function handleEditMany(presenceMany) {
        let precensaBoolean = false;
        if (presenceMany === 'Presente')
            precensaBoolean = true;
        PatchPresenceParlMany(precensaBoolean);
        setTimeout(() => {
            GetVotes();
        }, 1000);
    }
    console.log(voteResParl, 'voteResParl');
    return (react_1.default.createElement(react_1.default.Fragment, null, votes &&
        react_1.default.createElement("div", { className: "flex flex-col border p-8 mt-[55px] overflow-auto" },
            react_1.default.createElement("div", { className: "flex font-bold text-xl" },
                react_1.default.createElement("h3", { className: "flex flex-col" },
                    "Mat\u00E9ria Votada:",
                    react_1.default.createElement("span", { className: "flex ml-4" },
                        "mat\u00E9ria: ",
                        react_1.default.createElement("span", { className: "font-normal ml-2" },
                            " ",
                            matterComplet && matterComplet?.__str__,
                            " ")),
                    react_1.default.createElement("span", { className: "flex ml-4" },
                        "ementa: ",
                        react_1.default.createElement("span", { className: "font-normal ml-2" },
                            " ",
                            matterComplet && matterComplet?.ementa)))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: " my-5" },
                    react_1.default.createElement("h3", { className: "font-bold text-2xl" }, "Votos parlamentares"),
                    react_1.default.createElement("ul", { className: "flex flex-col gap-2" },
                        react_1.default.createElement("li", { className: "hidden gap-8 text-center items-center w-[500px] justify-between border-b-2 pb-2" },
                            "Modificar Todos",
                            react_1.default.createElement("div", { className: "flex gap-4" },
                                react_1.default.createElement("select", { onChange: (e) => {
                                        const novaPresenca = e.target.value;
                                        handleEditMany(novaPresenca);
                                    }, value: presenceMany ? 'Presente' : 'Ausente', className: `border rounded-md px-2 py-1 w-[150px] text-center ${!presenceMany ? 'text-red-400' : 'text-green-400'}`, name: "", id: "" },
                                    react_1.default.createElement("option", { value: "Ausente" }, "Ausente"),
                                    react_1.default.createElement("option", { value: "Presente" }, "Presente")))),
                        voteResParl && voteResParl.map(parl => (react_1.default.createElement("li", { key: parl.id, className: "flex gap-8 text-center items-center w-[500px] justify-between" },
                            parl.name,
                            react_1.default.createElement("div", { className: "flex gap-4" },
                                react_1.default.createElement("select", { onChange: (e) => {
                                        const novaPresenca = e.target.value;
                                        handleEditPresence(parl._id, novaPresenca);
                                    }, value: parl.presenca ? 'Presente' : 'Ausente', className: `border rounded-md px-2 py-1 w-[150px] text-center ${!parl.presenca ? 'text-red-400' : 'text-green-400'}`, name: "", id: "" },
                                    react_1.default.createElement("option", { value: "Ausente" }, "Ausente"),
                                    react_1.default.createElement("option", { value: "Presente" }, "Presente")),
                                !parl.presenca
                                    ? react_1.default.createElement("span", { className: "border rounded-md px-2 py-1 w-[150px]" }, parl.voto)
                                    : (parl.voto.toLowerCase() === "não votou"
                                        ? react_1.default.createElement("select", { onChange: (e) => {
                                                const novoVoto = e.target.value;
                                                handleEditVote(parl.user, novoVoto);
                                            }, value: parl.voto, className: "border rounded-md px-2 py-1 w-[150px] text-center", name: "", id: "" },
                                            react_1.default.createElement("option", { value: "N\u00E3o votou" }, "N\u00E3o votou"),
                                            react_1.default.createElement("option", { value: "Sim" }, "Sim"),
                                            react_1.default.createElement("option", { value: "N\u00E3o" }, "N\u00E3o"),
                                            react_1.default.createElement("option", { value: "Abster" }, "Abster"))
                                        : react_1.default.createElement("span", { className: "border rounded-md px-2 py-1 w-[150px]" }, parl.voto))))))))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("h6", { className: "flex text-3xl font-bold" }, "Votos"),
                react_1.default.createElement("div", { className: "flex flex-col ml-4" },
                    react_1.default.createElement("span", null,
                        "SIM: ",
                        resultVote?.Yes),
                    react_1.default.createElement("span", null,
                        "N\u00C3O: ",
                        resultVote?.Not),
                    react_1.default.createElement("span", null,
                        "ABSTER: ",
                        resultVote?.abstain),
                    react_1.default.createElement("span", null,
                        "Presen\u00E7a: ",
                        resultVote?.Presence),
                    react_1.default.createElement("span", null,
                        "Total de Votos: ",
                        resultVote?.totalVotes)),
                react_1.default.createElement("div", { className: "flex flex-col gap-4" },
                    react_1.default.createElement("label", { className: "flex flex-col" },
                        "Resultado de Vota\u00E7\u00E3o",
                        buttonClose
                            ? react_1.default.createElement("select", { onChange: (e) => setResultVoteForm(e.target.value), value: resultVoteForm, className: "border rounded-md p-2" },
                                react_1.default.createElement("option", { value: "" }, "----------"),
                                react_1.default.createElement("option", { value: 1 }, "APROVADO POR MAIORIA ABSOLUTA"),
                                react_1.default.createElement("option", { value: 2 }, "APROVADO POR MAIORIA SIMPLES"),
                                react_1.default.createElement("option", { value: 3 }, "APROVADO POR UNANIMIDADE"),
                                react_1.default.createElement("option", { value: 4 }, "REPROVADA"),
                                react_1.default.createElement("option", { value: 5 }, "MAT\u00C9RIA LIDA"),
                                react_1.default.createElement("option", { value: 6 }, "APROVADA EM 1\u00BA DISCUSS\u00C3O"),
                                react_1.default.createElement("option", { value: 7 }, "APROVADA EM 2\u00BA DISCUSS\u00C3O"),
                                react_1.default.createElement("option", { value: 8 }, "APROVADA EM REGIME DE URG\u00CANCIA ESPECIAL"),
                                react_1.default.createElement("option", { value: 9 }, "APROVADA EM DISCUSS\u00C3O \u00DANICA"),
                                react_1.default.createElement("option", { value: 10 }, "APROVADO POR 2/3"),
                                react_1.default.createElement("option", { value: 11 }, "PEDIDO DE VISTA"))
                            : react_1.default.createElement("div", { className: "border rounded-md p-2" },
                                resultVoteForm == 1 && "APROVADO POR MAIORIA ABSOLUTA",
                                resultVoteForm == 2 && "APROVADO POR MAIORIA SIMPLES",
                                resultVoteForm == 3 && "APROVADO POR UNANIMIDADE",
                                resultVoteForm == 4 && "REPROVADA",
                                resultVoteForm == 5 && "MATÉRIA LIDA",
                                resultVoteForm == 6 && "APROVADA EM 1º DISCUSSÃO",
                                resultVoteForm == 7 && "APROVADA EM 2º DISCUSSÃO",
                                resultVoteForm == 8 && "APROVADA EM REGIME DE URGÊNCIA ESPECIAL",
                                resultVoteForm == 9 && "APROVADA EM DISCUSSÃO ÚNICA",
                                resultVoteForm == 10 && "APROVADO POR 2/3",
                                resultVoteForm == 11 && "PEDIDO DE VISTA")),
                    react_1.default.createElement("label", { className: "flex flex-col max-w-[500px]", htmlFor: "" },
                        "Observa\u00E7\u00F5es",
                        react_1.default.createElement("textarea", { onChange: (e) => setObservation(e.target.value), className: "border p-2", cols: 20, rows: 5 })),
                    react_1.default.createElement("div", { className: "flex w-full justify-between" },
                        buttonClose ? react_1.default.createElement("button", { type: "button", onClick: handleCancel, className: " border p-2 px-4 rounded-lg bg-yellow-500  hover:bg-yellow-300" }, "Cancelar Vota\u00E7\u00E3o")
                            : react_1.default.createElement("button", { type: "button", className: "cursor-default opacity-60 border p-2 px-4 rounded-lg bg-gray-400" }, "Cancelar Vota\u00E7\u00E3o"),
                        buttonClose
                            ? (resultVoteForm == 0 ?
                                react_1.default.createElement("div", { className: "border cursor-default opacity-50 p-2 px-4 rounded-lg bg-gray-500  text-white font-bold" }, "Fechar Vota\u00E7\u00E3o")
                                : react_1.default.createElement("button", { type: "button", onClick: handleCloseVote, className: "border p-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-bold" }, "Fechar Vota\u00E7\u00E3o"))
                            : react_1.default.createElement("button", { type: "button", onClick: handleEncerrar, className: "border p-2 px-4 rounded-lg bg-red-500 hover:bg-red-400 text-white font-bold" }, "Encerrar")))))));
}
exports.Register = Register;
