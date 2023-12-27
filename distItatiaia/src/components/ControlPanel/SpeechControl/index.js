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
exports.SpeechControl = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../../contexts/AuthProvider");
const SpeechTimes_1 = require("./SpeechTimes");
const PartTimes_1 = require("./PartTimes");
const OrderQuestionTimes_1 = require("./OrderQuestionTimes");
const FinalConsiderationsTimes_1 = require("./FinalConsiderationsTimes");
function SpeechControl() {
    const { SearchParlSpeech, parlSpeech, GetPainel, dados, PatchSpeechParl, GetIdSpeech, getIdSpeech, setGetIdSpeech, parlamentares, GetVotes, voteResParl } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [userObj, setUserObj] = (0, react_1.useState)({});
    const [soundPlay, setSoundPlay] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        SearchParlSpeech();
        GetIdSpeech();
        GetPainel();
        GetVotes();
        return () => {
            setUserObj("selecione");
            autoSetReload();
        };
    }, []);
    const parlaActives = parlamentares.filter(parl => {
        if (parl.ativo) {
            return parl;
        }
    });
    console.log(parlaActives, 'parlamentares');
    function autoSetReload() {
        let user = [{
                ativo: true,
                fotografia: "http://votacao.novace.com.br/novace_logo.png",
                nome_parlamentar: "Usuário",
            }];
        PatchSpeechParl(getIdSpeech, 100, user[0]?.nome_parlamentar, user[0]?.fotografia);
    }
    function handleSetParl() {
        let user;
        if (userObj) {
            user = parlSpeech.filter(parl => {
                console.log(parl.id);
                if (parl.id == userObj) {
                    return parl;
                }
                return;
            });
            if (userObj == "selecione") {
                user = [{
                        ativo: true,
                        fotografia: "http://votacao.novace.com.br/novace_logo.png",
                        nome_parlamentar: "Usuário",
                    }];
            }
            PatchSpeechParl(getIdSpeech, user[0]?.id ? user[0]?.id : 100, user[0]?.nome_parlamentar, user[0]?.fotografia);
        }
    }
    const handleSongAlert = () => {
        setSoundPlay(!soundPlay);
        console.log(soundPlay, "efeito sonoro ligado  ");
        PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, soundPlay);
    };
    console.log(userObj, "user obj");
    return (react_1.default.createElement("div", { className: "flex flex-col w-full gap-4" },
        react_1.default.createElement("div", { className: "flex w-full justify-between items-end border-b-2 pb-8 gap-2" },
            react_1.default.createElement("label", { className: "flex flex-col font-bold text-2xl w-[60%] ", htmlFor: "" },
                "Orador",
                react_1.default.createElement("select", { onChange: (e) => setUserObj(e.target.value), className: "flex w-full text-lg border px-4 py-1 rounded-md", name: "", id: "" },
                    react_1.default.createElement("option", { value: "selecione" }, "Selecione..."),
                    parlaActives.map(par => (react_1.default.createElement("option", { key: par.id, value: par.id }, par.nome_parlamentar))))),
            react_1.default.createElement("div", { className: "flex min-w-[350px] gap-2" },
                react_1.default.createElement("button", { type: "button", onClick: handleSetParl, className: "flex h-10 px-4 bg-green-500 hover:bg-green-300 text-white text-center justify-center py-2 rounded-md" }, "ATUALIZAR PAINEL"),
                !soundPlay ?
                    react_1.default.createElement("button", { type: "button", onClick: handleSongAlert, className: "flex w-[165px] h-10 px-4 bg-green-500 hover:bg-green-300 text-white text-center justify-center py-2 rounded-md" }, "Play Sinal Sonoro")
                    : react_1.default.createElement("button", { type: "button", onClick: handleSongAlert, className: "flex w-[165px] h-10 px-4 bg-green-500 hover:bg-green-300 text-white text-center justify-center py-2 rounded-md" }, "Stop Sinal Sonoro"))),
        react_1.default.createElement("div", { className: "flex " },
            react_1.default.createElement(SpeechTimes_1.SpeechTimes, null),
            react_1.default.createElement(PartTimes_1.PartTimes, null)),
        react_1.default.createElement("div", { className: "flex " },
            react_1.default.createElement(OrderQuestionTimes_1.OrderQuestionTimes, null),
            react_1.default.createElement(FinalConsiderationsTimes_1.FinalConsiderationsTimes, null))));
}
exports.SpeechControl = SpeechControl;
