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
exports.AuthProvider = exports.AuthContext = void 0;
const react_1 = __importStar(require("react"));
const api_1 = require("../../services/api");
const react_router_dom_1 = require("react-router-dom");
const apiNode_1 = require("../../services/apiNode");
exports.AuthContext = (0, react_1.createContext)({});
const AuthProvider = ({ children }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [tokenOn, setTokenOn] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)('');
    const [sessions, setSessions] = (0, react_1.useState)();
    const [basicDataOpen, setBasicDataOpen] = (0, react_1.useState)(true);
    const [tableOpen, setTableOpen] = (0, react_1.useState)(false);
    const [presenceOpen, setPresenceOpen] = (0, react_1.useState)(false);
    const [absenceOpen, setAbsenceOpen] = (0, react_1.useState)(false);
    const [personalTalkOpen, setPersonalTalkOpen] = (0, react_1.useState)(false);
    const [finalTalkOpen, setFinalTalkOpen] = (0, react_1.useState)(false);
    const [retirarPautaOpen, setRetirarPautaOpen] = (0, react_1.useState)(false);
    const [idSession, setIdSession] = (0, react_1.useState)('');
    const [parlamentares, setParlamentares,] = (0, react_1.useState)();
    const [userParl, setUserParl] = (0, react_1.useState)();
    const [userAdm, setUserAdm] = (0, react_1.useState)();
    const [year, setYear] = (0, react_1.useState)('2023');
    const [month, setMonth] = (0, react_1.useState)('');
    const [day, setDay] = (0, react_1.useState)('');
    const [type, setType] = (0, react_1.useState)('');
    const [dash, setDash] = (0, react_1.useState)(true);
    const [sess, setSess] = (0, react_1.useState)(false);
    const [painelLayout, setPainelLayout] = (0, react_1.useState)('parlamentares');
    const [dadosPainel, setDadosPainel] = (0, react_1.useState)('');
    const [searchParl, setSearchParl] = (0, react_1.useState)([]);
    const [panelId, setPanelId] = (0, react_1.useState)();
    const [estado, setEstado] = (0, react_1.useState)(false);
    const [dados, setDados] = (0, react_1.useState)([]);
    const [materias, setMaterias] = (0, react_1.useState)([]);
    const [resultVote, setResultVote] = (0, react_1.useState)();
    const [parlSpeech, setParlSpeech] = (0, react_1.useState)();
    const [usersGet, setUsersGet] = (0, react_1.useState)();
    const [dayOrder, setDayOrders] = (0, react_1.useState)();
    const [getIdSpeech, setGetIdSpeech] = (0, react_1.useState)();
    const [matters, setMatters] = (0, react_1.useState)();
    const [voteResParl, setVoteResParl] = (0, react_1.useState)();
    const [votes, setVotes] = (0, react_1.useState)(false);
    const [matterComplet, setMatterComplet] = (0, react_1.useState)();
    const [voteId, setVoteId] = (0, react_1.useState)();
    const [presence, setPresence] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const recoveredUser = localStorage.getItem('sessionid');
        const userset = localStorage.getItem('novace@userParl');
        if (recoveredUser) {
            setTokenOn(recoveredUser);
        }
        if (userset) {
            setUserParl(JSON.parse(userset));
        }
    }, []);
    // getTokenAdmin
    async function CreateSessionAdmin(username, password) {
        const response = await (0, apiNode_1.getTokenAdmin)({ username, password });
        if (response.data.token) {
            const token = response.data.token;
            localStorage.setItem('sessionid', token);
            localStorage.setItem('novace@Admin', JSON.stringify(response.data.response));
            setTokenOn(token);
            setIdSession(token);
            setUserAdm(response.data.response);
            // navigate('/sessoes')
        }
        else if (response.data.message) {
            setError(response.data.message);
        }
        else {
            setError('Email/Senha Inválidos!');
        }
    }
    async function CreateSession(username, password) {
        const response = await (0, apiNode_1.getToken)({ username, password });
        if (response.data.token) {
            const token = response.data.token;
            localStorage.setItem('sessionid', token);
            localStorage.setItem('novace@userParl', JSON.stringify(response.data.response.user));
            setTokenOn(token);
            setIdSession(token);
            setUserParl(response.data.response.user);
            // navigate('/sessoes')
        }
        else if (response.data.message) {
            setError(response.data.message);
        }
        else {
            setError('Email/Senha Inválidos!');
        }
    }
    async function CreateSessionPlen({ cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio, hora_fim, numero, data_fim, url_audio, url_video, upload_pauta, upload_ata, upload_anexo, iniciada, finalizada, interativa, tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura }) {
        const response = await (0, api_1.createSession)({
            cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio,
            hora_fim, numero, data_fim, url_audio, url_video, upload_pauta,
            upload_ata, upload_anexo, iniciada, finalizada, interativa,
            tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura
        });
    }
    async function GetSessions(year, month, day, type) {
        const response = await (0, api_1.getSessionSapl)({ year, month, day, type });
        setSessions(response.data.results);
        localStorage.setItem('sessions', JSON.stringify(sessions));
    }
    async function Matters(id) {
        const response = await (0, apiNode_1.getSession)(id);
        setMatters(response.data);
    }
    async function CloseVote(materia, ordem, tipo_resultado_votacao, observacao, numero_votos_sim, numero_votos_nao, numero_abstencoes, votes) {
        const response = await (0, apiNode_1.createCloseVote)({
            materia, ordem,
            tipo_resultado_votacao, observacao,
            numero_votos_sim,
            numero_votos_nao,
            numero_abstencoes,
            votes
        });
    }
    async function GetParlamentares() {
        const response = await (0, api_1.getParlamentares)();
        setParlamentares(response.data);
    }
    // PAINEL - Returno do dados
    async function GetPainel() {
        const respon = await (0, apiNode_1.getData)(setDados);
        // setDados(respon)
    }
    async function Logout() {
        localStorage.removeItem('sessionid');
        localStorage.removeItem("novace@userParl");
        localStorage.removeItem("novace@Admin");
        navigate('/');
    }
    async function LogoutParl() {
        localStorage.removeItem('sessionid');
        localStorage.removeItem("novace@userParl");
        navigate('/parlamentar');
    }
    async function PatchPanelMessage(tela, message) {
        await (0, apiNode_1.patchPanelMessage)(panelId, tela, message);
    }
    async function GetVotes() {
        const response = await (0, apiNode_1.getVotes)();
        setResultVote(response.data.response);
        setVoteResParl(response.data.responseVote);
    }
    async function SaveIdPanel() {
        const response = await (0, apiNode_1.getDataIdPanel)();
        setEstado(response.data.estado);
        setPanelId(response.data.idPanel);
    }
    async function CreateUser(username, password, confirmpassword, active, nivel, id) {
        await (0, apiNode_1.createUsers)({ username, password, confirmpassword, active, nivel, id });
        // Larga na typagem o nome da funcao
        GetUsers();
    }
    async function GetUsers() {
        const response = await (0, apiNode_1.getUsers)();
        setUsersGet(response.data);
    }
    async function SearchParliamen() {
        const response = await (0, api_1.parliamentariansSearch)();
        setSearchParl(response.data.results);
    }
    async function SearchMaterias() {
        const response = await (0, apiNode_1.searchMaterias)();
        setMaterias(response.data);
    }
    async function SearchParlSpeech() {
        const response = await (0, api_1.searchParlSpeech)();
        setParlSpeech(response.data.results);
    }
    async function MatterUpdated(matter, register) {
        const response = await (0, apiNode_1.PatchMatterVote)(panelId, matter, register);
    }
    async function DayOrderIds(idSes) {
        const response = await (0, api_1.ordemDia)({ idSes });
        setDayOrders(response.data.results);
    }
    // Updated Speech Parl
    async function GetIdSpeech() {
        const response = await (0, apiNode_1.getSpeechParlData)();
        console.log(response.data.response[0]._id, 'response no autcontext');
        setGetIdSpeech(response.data.response[0]._id);
    }
    async function PatchSpeechParl(getIdSpeech, id, name, fotografia, speechTime, speechTimeInit, presenca, speechTimeInitBoolean, partTime, partTimeInit, partTimeInitBoolean, orderQuestionTime, orderQuestionTimeInit, orderQuestionTimeInitBoolean, finalConsiderationsTime, finalConsiderationsTimeInit, finalConsiderationsTimeInitBoolean, soundPlay) {
        const response = await (0, apiNode_1.patchSpeechParl)({
            getIdSpeech, id, name, fotografia,
            speechTime, speechTimeInit,
            presenca, speechTimeInitBoolean, partTime, partTimeInit, partTimeInitBoolean,
            orderQuestionTime, orderQuestionTimeInit, orderQuestionTimeInitBoolean,
            finalConsiderationsTime, finalConsiderationsTimeInit, finalConsiderationsTimeInitBoolean,
            soundPlay
        });
    }
    async function PatchVotePar(id, novoVoto) {
        await (0, apiNode_1.patchVote)({ id, novoVoto });
    }
    async function PatchPresenceParl(id, presence) {
        console.log(id, presence, 'context');
        await (0, apiNode_1.patchPresence)({ id, presence });
    }
    async function PatchPresenceParlMany(presence) {
        await (0, apiNode_1.patchPresenceParlMany)({ presence });
    }
    //Zerar todos os votos
    async function ReloadVotePanel() {
        await (0, apiNode_1.registerReload)();
    }
    async function PresenceReload() {
        await (0, apiNode_1.presenceReload)();
    }
    async function Cadastros() {
        navigate('/sessoes/cadastros');
    }
    async function MenuInicial() {
        navigate('/sessoes');
    }
    async function DeleteUser(id) {
        await (0, apiNode_1.deleteUser)(id);
        await GetUsers();
    }
    async function GetVotePresence() {
        const id = userParl?.id;
        const response = await (0, apiNode_1.presenceParl)(id);
        setVoteId(response.data._id);
        setPresence(response.data.presenca);
    }
    //Get ID for Presence patch up
    async function PresenceId(presence) {
        const response = await (0, apiNode_1.presenceParlNew)({ voteId, presence });
        setPresence(response.data.response.presenca);
    }
    async function GetDadosPainel() {
        await (0, apiNode_1.getData)(setDados);
    }
    async function ParlVote(idVote, vote) {
        await (0, apiNode_1.parlVote)({ idVote, vote });
    }
    async function RegisterVoteSapl(sessionId, voteResParl, numero_votos_sim, numero_votos_nao, numero_abstencoes, observacao, ip, tipo_resultado_votacao, materia, ordem, expediente, user) {
        const response = await (0, apiNode_1.registerResultVote)({
            sessionId, voteResParl,
            numero_votos_sim, numero_votos_nao, numero_abstencoes,
            observacao, ip, tipo_resultado_votacao, materia,
            ordem, expediente, user
        });
        console.log(response, "response do register vote context 350");
    }
    return (react_1.default.createElement(exports.AuthContext.Provider, { value: {
            authenticated: !!tokenOn, CreateSession, CreateSessionAdmin, userParl, setUserParl, GetSessions,
            sessions, navigate, basicDataOpen, setBasicDataOpen,
            tableOpen, setTableOpen, presenceOpen, setPresenceOpen,
            absenceOpen, setAbsenceOpen, personalTalkOpen, setPersonalTalkOpen,
            finalTalkOpen, setFinalTalkOpen, retirarPautaOpen, setRetirarPautaOpen,
            idSession, setIdSession, year, setYear, month, setMonth, day, setDay, type,
            setType, dash, setDash, sess, setSess, parlamentares, setParlamentares,
            GetParlamentares, CreateSessionPlen, painelLayout, setPainelLayout, GetPainel,
            dadosPainel, setDadosPainel, Logout, LogoutParl, Cadastros, MenuInicial, SearchParliamen,
            searchParl, setSearchParl, SaveIdPanel, panelId, setPanelId,
            estado, setEstado, dados, setDados, SearchMaterias, materias, setMaterias,
            MatterUpdated, GetVotes, resultVote, setResultVote, PatchPanelMessage,
            SearchParlSpeech, parlSpeech, setParlSpeech, GetUsers, usersGet, setUsersGet,
            DayOrderIds, dayOrder, setDayOrders,
            GetIdSpeech, getIdSpeech, setGetIdSpeech, PatchSpeechParl,
            CreateUser, DeleteUser, Matters, matters, setMatters,
            voteResParl, setVoteResParl, votes, setVotes,
            matterComplet, setMatterComplet, CloseVote, PatchVotePar,
            ReloadVotePanel, userAdm, setUserAdm, error, setError,
            voteId, setVoteId, presence, setPresence, PresenceId, GetVotePresence,
            GetDadosPainel, ParlVote, PresenceReload, RegisterVoteSapl,
            PatchPresenceParl, PatchPresenceParlMany
        } }, children));
};
exports.AuthProvider = AuthProvider;
