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
exports.Presence = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../../contexts/AuthProvider");
function Presence({ sessionId }) {
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
        // setMatterState("")
        // ReloadVotePanel()
        // MatterUpdated("", false)
        setVotes(!votes);
        // setProjectsView("materias")
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
        // setProjectsView("materias")
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
    return (react_1.default.createElement("div", { className: "flex flex-col border p-8 mt-[55px] overflow-auto" },
        react_1.default.createElement("div", { className: " my-2" },
            react_1.default.createElement("h3", { className: "font-bold text-2xl mb-5" }, "Presen\u00E7a dos parlamentares"),
            react_1.default.createElement("ul", { className: "grid grid-cols-1 sm:grid-cols-2 flex-col gap-2" },
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
                        react_1.default.createElement("span", { className: "border rounded-md px-2 py-1 w-[150px]" }, parl.voto)))))))));
}
exports.Presence = Presence;
