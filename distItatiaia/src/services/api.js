"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerResultVote = exports.getSessionSapl = exports.searchParlSpeech = exports.ordemDia = exports.parliamentariansSearch = exports.paineldados = exports.getParlamentares = exports.createSession = exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
exports.api = axios_1.default.create({
    // @ts-ignore
    baseURL: import.meta.env.VITE_URL_API,
});
const createSession = async ({ cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio, hora_fim, numero, data_fim, url_audio, url_video, upload_pauta, upload_ata, upload_anexo, iniciada, finalizada, interativa, tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura }) => {
    let errors = [];
    const response = await exports.api.post('/api/sessao/sessaoplenaria/', {
        cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio,
        hora_fim, numero, data_fim, url_audio, url_video, upload_pauta,
        upload_ata, upload_anexo, iniciada, finalizada, interativa,
        tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura
    });
    errors = response.data.errors;
    return response;
};
exports.createSession = createSession;
const getParlamentares = async () => {
    let errors = [];
    const response = await exports.api.get('/api/parlamentares/parlamentar/search_parlamentares', { valuedadeStatus: false });
    errors = response.data.errors;
    return response;
};
exports.getParlamentares = getParlamentares;
const paineldados = async ({ id, token }) => {
    let errors = [];
    const response = await exports.api.get(`/painel/${id}/dados`, {
        headers: {
            Cookie: `sessionid=${token}`,
        }
    });
    errors = response.data.errors;
    return response;
};
exports.paineldados = paineldados;
const parliamentariansSearch = async () => {
    let errors = [];
    const response = await exports.api.get("/api/parlamentares/parlamentar/?page_size=50");
    errors = response.data.errors;
    return response;
};
exports.parliamentariansSearch = parliamentariansSearch;
const ordemDia = async ({ idSes }) => {
    let errors = [];
    const response = await exports.api.get(`/api/sessao/ordemdia/?sessao_plenaria=${idSes}`);
    errors = response.data.errors;
    return response;
};
exports.ordemDia = ordemDia;
const searchParlSpeech = async () => {
    let errors = [];
    const response = await exports.api.get("/api/parlamentares/parlamentar/");
    errors = response.data;
    return response;
};
exports.searchParlSpeech = searchParlSpeech;
const getSessionSapl = async ({ year, month, day, type }) => {
    let errors = [];
    const response = await exports.api.get(`/api/sessao/sessaoplenaria?o=-data_inicio&page_size=100`, { validateStatus: false });
    errors = response.data.errors;
    return response;
};
exports.getSessionSapl = getSessionSapl;
const registerResultVote = async ({ voteResParl, numero_votos_sim, numero_votos_nao, numero_abstencoes, observacao, ip, tipo_resultado_votacao, materia, ordem, expediente, user }) => {
    let errors = [];
    const response = await exports.api.post(`/api/sessao/registrovotacao/`, {
        voteResParl,
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
