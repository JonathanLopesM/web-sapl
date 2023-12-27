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
exports.SpeechPanel = void 0;
const react_1 = __importStar(require("react"));
const Speech_1 = require("./Speech");
const PartPanel_1 = require("./PartPanel");
const OrderQuestionPanel_1 = require("./OrderQuestionPanel");
const FinalConsiderationsPanel_1 = require("./FinalConsiderationsPanel");
const EfeitoSonoroCampainha_mp3_1 = __importDefault(require("../../../assets/EfeitoSonoroCampainha.mp3"));
function SpeechPanel({ dados }) {
    console.log(dados?.speechParl?.soundPlay, " daddos para pegar o true do som");
    const [audio] = (0, react_1.useState)(new Audio(EfeitoSonoroCampainha_mp3_1.default));
    (0, react_1.useEffect)(() => {
        dados?.speechParl?.soundPlay ? audio.play() : audio.pause();
    }, [dados?.speechParl?.soundPlay]);
    return (react_1.default.createElement("div", { className: "flex flex-col w-full " },
        react_1.default.createElement("h5", { className: "flex w-full h-10 sm:h-20 text-center mx-auto justify-center items-center bg-white text-black text-xl sm:text-6xl font-extrabold p-4" }, "Discurso!"),
        react_1.default.createElement("div", { className: "flex flex-col w-[90%] h-screen sm:h-full mx-auto gap-4 mt-2 " },
            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row sm:gap-[100px] justify-center items-center  " },
                react_1.default.createElement("div", { className: "flex flex-col gap-2  items-center " },
                    react_1.default.createElement("div", { className: "flex bg-white rounded-full relative overflow-hidden max-h-[400px] w-[200px] 2xl:w-[400px] items-center justify-center" },
                        react_1.default.createElement("img", { className: "flex w-[170px] h-[200px]  2xl:w-[80%] 2xl:h-[80%] ", src: dados?.speechParl?.fotografia, alt: "" })),
                    react_1.default.createElement("div", { className: "flex flex-col justify-center text-start" },
                        react_1.default.createElement("h2", { className: "font-bold text-4xl" }, dados?.speechParl?.name),
                        react_1.default.createElement("p", null, "Em discurso"))),
                react_1.default.createElement("div", { className: "flex justify-center w-full max-w-[50%] md:max-w-[30%] px-2  " },
                    react_1.default.createElement(Speech_1.Speech, { dados: dados }))),
            react_1.default.createElement("div", { className: "flex flex-col sm:flex-row w-full sm:max-w-[80%] mx-auto justify-between sm:mt-44 sm:items-center" },
                react_1.default.createElement(PartPanel_1.PartPanel, { dados: dados }),
                react_1.default.createElement(OrderQuestionPanel_1.OrderQuestionPanel, { dados: dados }),
                react_1.default.createElement(FinalConsiderationsPanel_1.FinalConsiderationsPanel, { dados: dados })))));
}
exports.SpeechPanel = SpeechPanel;
