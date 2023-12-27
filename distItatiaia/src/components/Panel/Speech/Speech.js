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
exports.Speech = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../../contexts/AuthProvider");
function Speech({ dados }) {
    const { PatchSpeechParl, getIdSpeech, GetIdSpeech } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [totalTimeInSeconds, setTotalTimeInSeconds] = (0, react_1.useState)(dados?.speechParl?.speechTimeInit); //10*60 10 minutes
    const minutes = Math.floor(totalTimeInSeconds / 60);
    const seconds = totalTimeInSeconds % 60;
    let speechTimeInitBoolean;
    (0, react_1.useEffect)(() => {
        if (!getIdSpeech) {
            GetIdSpeech();
        }
    }, []);
    (0, react_1.useEffect)(() => {
        // if(dados?.speechParl?.speechTime !== timerOn){
        //   setTimerOn(dados?.speechParl?.speechTime)
        //   // setTotalTimeInSeconds(dados?.speechParl?.speechTimeInit)
        // }
        if (dados?.speechParl?.speechTimeInitBoolean) {
            speechTimeInitBoolean = false;
            setTotalTimeInSeconds(dados?.speechParl?.speechTimeInit);
            PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, speechTimeInitBoolean);
            return;
        }
        if (totalTimeInSeconds === 0) {
            return;
        }
        else {
            if (dados?.speechParl.speechTime) {
                const interval = setInterval(() => {
                    setTotalTimeInSeconds((prev) => prev - 1);
                }, 1000);
                return () => clearInterval(interval);
            }
        }
    }, [totalTimeInSeconds, dados?.speechParl?.speechTime, dados?.speechParl?.speechTimeBoolean, dados?.speechParl?.speechTimeInitBoolean]);
    return (react_1.default.createElement("div", { className: "flex flex-col w-full  " },
        react_1.default.createElement("div", { className: "flex w-full " },
            react_1.default.createElement("h3", { className: "text-[100px] lg:text-[150px] 2xl:text-[250px] font-bold" },
                react_1.default.createElement("span", null, minutes.toString().padStart(2, "0")),
                ":",
                react_1.default.createElement("span", null, seconds.toString().padStart(2, "0"))))));
}
exports.Speech = Speech;
