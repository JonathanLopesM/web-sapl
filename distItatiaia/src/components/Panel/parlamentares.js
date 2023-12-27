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
exports.PainelParlamentares = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
function PainelParlamentares({ dados, materia }) {
    const { parlamentares, GetParlamentares, matters, Matters } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    (0, react_1.useEffect)(() => {
        if (!parlamentares) {
            GetParlamentares();
        }
    }, []);
    console.log(dados, "dados");
    console.log(matters, "mattersno painel ");
    const partidos = [
        { name: "CRISTINA MAGNO", partido: "PP" },
        { name: "BRUNO OLIVEIRA", partido: "PRTB" },
        { name: "CASÉ", partido: "UNIÃO" },
        { name: "DANIEL MACIEL", partido: "PP" },
        { name: "DECO", partido: "PSC" },
        { name: "DR EDUARDO", partido: "PV" },
        { name: "FURLANI", partido: "UNIÃO" },
        { name: "GUSTAVO GOMES", partido: "REPUB" },
        { name: "JOSÉ MARQUES", partido: "PSD" },
        { name: "JOÃOZINHO DO AR", partido: "DC" },
        { name: "LUCIANA ALVES", partido: "DC" },
        { name: "MAMEDE", partido: "PSC" },
        { name: "MARIA LÚCIA", partido: "PRTB" },
        { name: "MARQUINHO", partido: "UNIÃO" },
        { name: "PAOLA DA PIZZARIA", partido: "PSDB" },
        { name: "PAULO GRÁFICA", partido: "UNIÃO" },
        { name: "PAULO CHUCHU", partido: "UNIÃO" },
        { name: "PAULO SANDRO", partido: "DC" },
        { name: "PISSULA", partido: "PV" },
        { name: "PROF. FERNANDA", partido: "PT" },
        { name: "RAYANE BRAGA", partido: "UNIÃO" },
        { name: "WAGUIM", partido: "UNIÃO" },
        { name: "MARCELL CASTRO", partido: "CIDADANIA" }
    ];
    // Verificar os dados do retorno parar conferir se 
    // visualizar o voto do parl na tela do painel
    console.log(materia, "materia");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        materia &&
            react_1.default.createElement("div", { className: " sm:flex text-center justify-center items-center lg:gap-2 sm:px-8" },
                react_1.default.createElement("h4", { className: "text-xs lg:text-base xl:text-xl font-extrabold" }, materia.__str__),
                "-",
                react_1.default.createElement("h4", { className: " text-xs  xl:text-xl font-extrabold" }, materia.ementa)),
        dados &&
            react_1.default.createElement("div", { className: "flex flex-col w-full min-h-[600px] lg:min-h-full sm:max-h-screen justify-center items-center mt-5" },
                react_1.default.createElement("div", { className: "grid  sm:grid-cols-3 gap-4 px-2 lg:w-[80%]" }, dados.stateVote.map((par, index) => (react_1.default.createElement("div", { key: par.id, className: "flex gap-4 justify-between border rounded-l-[48px]" },
                    react_1.default.createElement("div", { className: "flex gap-2 items-center " },
                        react_1.default.createElement("div", { className: "flex bg-white w-12 h-12 lg:w-12 lg:h-12 xl:w-16  xl:h-16 object-cover overflow-hidden rounded-full justify-center" },
                            react_1.default.createElement("img", { className: "flex object-contain ", src: par.fotografia, alt: `foto do parlamentar ${par.name}` })),
                        react_1.default.createElement("div", { className: "flex flex-col justify-center sm:text-xs lg:text-lg" },
                            react_1.default.createElement("h2", { className: "flex sm:text-[8px] lg:text-base font-semibold" }, par.name),
                            react_1.default.createElement("div", { className: "flex gap-2" },
                                react_1.default.createElement("span", null,
                                    partidos[index]?.partido ? partidos[index]?.partido : '',
                                    " |"),
                                par.presenca ?
                                    react_1.default.createElement("span", { className: "text-green-400 font-bold" }, "Presente")
                                    : react_1.default.createElement("span", { className: "text-red-400 font-bold" }, "Ausente")))),
                    dados?.registro ?
                        react_1.default.createElement("div", { className: `flex border-2 ${par.voto == "Sim" && "border-green-500"} ${par.voto == "Não" && "border-red-500"} w-[100px] items-center justify-center px-2 sm:text-xs lg:text-base` },
                            react_1.default.createElement("span", { className: `font-bold ${par.voto == "Sim" && "text-green-500"} ${par.voto == "Não" && "text-red-500"} w-[80px] text-center ` }, par.voto))
                        : react_1.default.createElement("div", { className: `flex border w-[20px] lg:w-20 xl:w-[100px] items-center justify-center px-2 ${par?.voto?.toLowerCase() !== "não votou" ? "bg-yellow-300" : "bg-white"}` }))))))));
}
exports.PainelParlamentares = PainelParlamentares;
