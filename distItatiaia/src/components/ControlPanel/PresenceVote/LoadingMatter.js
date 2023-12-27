"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingMatter = void 0;
const react_1 = __importDefault(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
function LoadingMatter() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("tbody", { className: "flex w-full  animate-pulse " },
            react_1.default.createElement("td", { className: "flex  border p-2 w-[80px] items-center justify-center" }, "0"),
            react_1.default.createElement("td", { className: "flex flex-col w-[20%] border p-2 justify-between" },
                react_1.default.createElement("span", { className: "text-gray-600 " },
                    "Nome da materia  ",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("span", { className: " bg-gray-600" }, "akshkjas sadjkajsdakshkjas sadjkajsdakshkjas")),
                react_1.default.createElement("span", { className: "text-blue-500" }, "Texto original")),
            react_1.default.createElement("td", { className: "flex flex-col border p-2 w-full max-w-[40%]" },
                "Ementa",
                react_1.default.createElement("span", { className: "text-gray-600 " },
                    "observacao: ",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("span", { className: " bg-gray-600" }, "akshkjas sadjkajsdakshkjas sadjkajsdakshkjas sadjkajsdakshkjas sadjkajsdakshkjasakshkjas sadjkajsd sadjkajsd"))),
            react_1.default.createElement("td", { className: "flex  border p-2 w-[30%]" },
                react_1.default.createElement("div", { className: "flex flex-col " },
                    react_1.default.createElement("span", { className: "text-gray-600  " },
                        "Projeto ",
                        react_1.default.createElement("span", { className: "bg-gray-600" }, "n\u00E3o votado"),
                        " ",
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("span", { className: " bg-gray-600" }, "akshkjas sadjkajsdakshkjas sadjkajsdakshkjas"))))),
        react_1.default.createElement("span", { className: "flex items-center gap-4 mx-auto text-xl" },
            react_1.default.createElement(outline_1.ArrowPathIcon, { className: "flex w-8 animate-spin" }),
            "Carregando...")));
}
exports.LoadingMatter = LoadingMatter;
