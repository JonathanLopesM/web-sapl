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
exports.ResultVoteControl = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../contexts/AuthProvider");
function ResultVoteControl() {
    const { GetVotes, resultVote } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    (0, react_1.useEffect)(() => {
        GetVotes();
    }, []);
    return (react_1.default.createElement("div", { className: "flex flex-col border p-8" },
        react_1.default.createElement("div", { className: "flex font-bold text-3xl" },
            react_1.default.createElement("h3", { className: "flex flex-col" },
                "Mat\u00E9ria Votada:",
                react_1.default.createElement("span", { className: "flex ml-4" }, resultVote?.materia && resultVote?.materia))),
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
                    "Presen\u00E7a: ",
                    resultVote?.Presence),
                react_1.default.createElement("span", null,
                    "Total de Votos: ",
                    resultVote?.totalVotes)))));
}
exports.ResultVoteControl = ResultVoteControl;
