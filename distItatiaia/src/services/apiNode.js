"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerResultVote = exports.parlVote = exports.presenceParlNew = exports.presenceParl = exports.presenceReload = exports.registerReload = exports.patchPresenceParlMany = exports.patchPresence = exports.patchVote = exports.createCloseVote = exports.searchMaterias = exports.getSession = exports.deleteUser = exports.patchSpeechParl = exports.getSpeechParlData = exports.patchUsers = exports.getUsers = exports.createUsers = exports.patchPanelMessage = exports.getVotes = exports.PatchMatterVote = exports.openClosePanelView = exports.PatchPanelView = exports.getDataIdPanel = exports.getData = exports.getTokenAdmin = exports.getToken = exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
exports.api = axios_1.default.create({
    // @ts-ignore
    baseURL: import.meta.env.VITE_URL_API_NODE,
});
// "http://localhost:3333"
const getToken = async ({ username, password }) => {
    let errors = [];
    const response = await exports.api.post('/auth/login', {
        username,
        password
    }, { validateStatus: false });
    errors = response.data;
    return response;
};
exports.getToken = getToken;
const getTokenAdmin = async ({ username, password }) => {
    let errors = [];
    const response = await exports.api.post('/auth/login/admin', {
        username,
        password
    }, { validateStatus: false });
    errors = response.data;
    return response;
};
exports.getTokenAdmin = getTokenAdmin;
const getData = async (setDados) => {
    let errors = [];
    const response = await exports.api.get("/painel/dados");
    errors = response.data;
    setDados(response);
};
exports.getData = getData;
const getDataIdPanel = async () => {
    let errors = [];
    const response = await exports.api.get("/painel/dados");
    errors = response.data;
    return response;
};
exports.getDataIdPanel = getDataIdPanel;
const PatchPanelView = async (idPanel, tela) => {
    let errors = [];
    const response = await exports.api.patch(`/painel/dados/${idPanel}`, {
        tela: tela
    });
    errors = response.data;
    return response;
};
exports.PatchPanelView = PatchPanelView;
const openClosePanelView = async (idPanel, estado) => {
    let errors = [];
    const response = await exports.api.patch(`/painel/dados/${idPanel}`, {
        estado: estado
    });
    errors = response.data;
    return response;
};
exports.openClosePanelView = openClosePanelView;
const PatchMatterVote = async (idPanel, matter, register) => {
    let errors = [];
    const response = await exports.api.patch(`/painel/dados/${idPanel}`, {
        materia: matter,
        registro: register
    });
    errors = response.data;
    return response;
};
exports.PatchMatterVote = PatchMatterVote;
const getVotes = async () => {
    let errors = [];
    const response = await exports.api.get("/parl/vote");
    errors = response.data;
    return response;
};
exports.getVotes = getVotes;
const patchPanelMessage = async (idPanel, tela, message) => {
    let errors = [];
    const response = await exports.api.patch(`/painel/dados/${idPanel}`, {
        tela,
        message
    });
    errors = response.data;
    return response;
};
exports.patchPanelMessage = patchPanelMessage;
//Crud dos users
const createUsers = async ({ username, password, confirmpassword, active, nivel, id }) => {
    let errors = [];
    const response = await exports.api.post(`/auth/users`, {
        username,
        password,
        confirmpassword,
        active,
        nivel,
        id
    });
    errors = response.data;
    return response;
};
exports.createUsers = createUsers;
//Buscar Usuários - retorno de usuarios parlamentares e admin's
const getUsers = async () => {
    let errors = [];
    const response = await exports.api.get(`/auth/users`);
    errors = response.data;
    return response;
};
exports.getUsers = getUsers;
const patchUsers = async ({ id, username, password, active }) => {
    let errors = [];
    const response = await exports.api.patch(`/auth/user/${id}`, {
        username, password, active
    });
    errors = response.data;
    return response;
};
exports.patchUsers = patchUsers;
const getSpeechParlData = async () => {
    let errors = [];
    const response = await exports.api.get(`/speech/timer`);
    errors = response.data;
    return response;
};
exports.getSpeechParlData = getSpeechParlData;
const patchSpeechParl = async ({ getIdSpeech, id, name, fotografia, speechTime, speechTimeInit, presenca, speechTimeInitBoolean, partTime, partTimeInit, partTimeInitBoolean, orderQuestionTime, orderQuestionTimeInit, orderQuestionTimeInitBoolean, finalConsiderationsTime, finalConsiderationsTimeInit, finalConsiderationsTimeInitBoolean, soundPlay }) => {
    let errors = [];
    const response = await exports.api.patch(`/speech/timer/${getIdSpeech}`, {
        id, name, fotografia, speechTime, speechTimeInit,
        presenca, speechTimeInitBoolean,
        partTime, partTimeInit, partTimeInitBoolean,
        orderQuestionTime, orderQuestionTimeInit, orderQuestionTimeInitBoolean,
        finalConsiderationsTime, finalConsiderationsTimeInit, finalConsiderationsTimeInitBoolean,
        soundPlay
    });
    errors = response.data;
    return response;
};
exports.patchSpeechParl = patchSpeechParl;
const deleteUser = async (id) => {
    let errors = [];
    const response = await exports.api.delete(`/auth/users/${id}`);
    return response;
};
exports.deleteUser = deleteUser;
const getSession = async (id) => {
    let errors = [];
    const response = await exports.api.get(`/api/sessao/sessaoplenaria/${id}`, { validateStatus: false });
    errors = response.data.errors;
    return response;
};
exports.getSession = getSession;
const searchMaterias = async () => {
    let errors = [];
    const response = await exports.api.get('/api/materia/materialegislativa/');
    errors = response.data;
    return response;
};
exports.searchMaterias = searchMaterias;
//api/sessao/votacao
const createCloseVote = async ({ materia, ordem, tipo_resultado_votacao, observacao, numero_votos_sim, numero_votos_nao, numero_abstencoes, votes }) => {
    let errors = [];
    const response = await exports.api.post('/api/sessao/votacao', {
        materia, ordem,
        tipo_resultado_votacao, observacao,
        numero_votos_sim,
        numero_votos_nao,
        numero_abstencoes,
        votes
    });
    errors = response.data;
    return response;
};
exports.createCloseVote = createCloseVote;
// app.patch("/parl/vote/:user", Voting)
const patchVote = async ({ id, novoVoto }) => {
    let errors = [];
    const response = await exports.api.patch(`/parl/vote/${id}`, {
        voto: novoVoto
    });
    errors = response.data;
    return response;
};
exports.patchVote = patchVote;
const patchPresence = async ({ id, presence }) => {
    console.log(id, presence, 'api');
    const response = await exports.api.patch(`/parl/presence/${id}`, {
        presence: presence
    });
    return response;
};
exports.patchPresence = patchPresence;
const patchPresenceParlMany = async ({ presence }) => {
    const response = await exports.api.patch('/parl/presence/many', {
        presence: presence
    });
    return response;
};
exports.patchPresenceParlMany = patchPresenceParlMany;
//zerar todos os votos
const registerReload = async () => {
    let errors = [];
    const response = await exports.api.get("/api/sessao/zerar");
    errors = response.data;
    return response;
};
exports.registerReload = registerReload;
const presenceReload = async () => {
    let errors = [];
    const response = await exports.api.get("/api/sessao/presencezero");
    errors = response.data;
    return response;
};
exports.presenceReload = presenceReload;
// Vote Routes 
const presenceParl = async (id) => {
    let errors = [];
    const response = await exports.api.get(`/parl/vote/${id}`);
    errors = response.data;
    return response;
};
exports.presenceParl = presenceParl;
//Updated presence
const presenceParlNew = async ({ voteId, presence }) => {
    let errors = [];
    const response = await exports.api.patch(`/parl/presence/${voteId}`, {
        presence: presence
    });
    errors = response.data;
    return response;
};
exports.presenceParlNew = presenceParlNew;
// vote 
const parlVote = async ({ idVote, vote }) => {
    let errors = [];
    const response = await exports.api.patch(`/parl/vote/${idVote}`, {
        voto: vote
    }, { validateStatus: false });
    errors = response.data;
    return response;
};
exports.parlVote = parlVote;
//Registro do Resultado da Votação
const registerResultVote = async ({ sessionId, voteResParl, numero_votos_sim, numero_votos_nao, numero_abstencoes, observacao, ip, tipo_resultado_votacao, materia, ordem, expediente, user }) => {
    let errors = [];
    const response = await exports.api.post(`/api/sessao/registrovotacao/`, {
        sessionId, voteResParl,
        numero_votos_sim,
        numero_votos_nao,
        numero_abstencoes,
        observacao,
        ip,
        tipo_resultado_votacao,
        materia,
        ordem,
        expediente,
        user
    });
    errors = response.data.errors;
    return response;
};
exports.registerResultVote = registerResultVote;
