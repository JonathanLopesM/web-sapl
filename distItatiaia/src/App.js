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
const react_1 = __importStar(require("react"));
require("./App.css");
const Login_1 = __importDefault(require("./pages/Login"));
const react_router_dom_1 = require("react-router-dom");
const AuthProvider_1 = require("./contexts/AuthProvider");
const Dashboard_1 = require("./pages/Dashboard");
const _slug_1 = require("./pages/session/[slug]");
const DefaultLayout_1 = require("./layouts/DefaultLayout");
const PanelPage_1 = require("./pages/PanelPage");
const NewUser_1 = require("./pages/NewUser");
const ModalEdit_1 = __importDefault(require("./components/NewUser/ModalEdit"));
const LoginParl_1 = __importDefault(require("./pages/LoginParl"));
const ParlDashboard_1 = require("./pages/ParlDashboard");
const DefaultLayoutParl_1 = require("./layouts/DefaultLayoutParl");
function App() {
    const Private = ({ children }) => {
        const { authenticated, userParl } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
        if (!authenticated) {
            if (!userParl) {
                return react_1.default.createElement(react_router_dom_1.Navigate, { to: '/' });
            }
        }
        return children;
    };
    const ParlPrivate = ({ children }) => {
        const { authenticated, userAdm } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
        if (!authenticated) {
            if (!userAdm) {
                return react_1.default.createElement(react_router_dom_1.Navigate, { to: '/parlamentar' });
            }
        }
        return children;
    };
    return (react_1.default.createElement(AuthProvider_1.AuthProvider, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Login_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/sessoes', element: react_1.default.createElement(Private, null,
                    react_1.default.createElement(DefaultLayout_1.DefaultLayout, null)) },
                react_1.default.createElement(react_router_dom_1.Route, { path: '/sessoes', element: react_1.default.createElement(Private, null,
                        " ",
                        react_1.default.createElement(Dashboard_1.Dashboard, null),
                        " ") }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/sessoes/cadastros', element: react_1.default.createElement(NewUser_1.NewUser, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/sessoes/cadastros/editar/:id', element: react_1.default.createElement(ModalEdit_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/sessoes/sessao/:id', element: react_1.default.createElement(_slug_1.Session, null) })),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/sessoes/painel', element: react_1.default.createElement(PanelPage_1.Painel, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/parlamentar', element: react_1.default.createElement(LoginParl_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/parlamentar/acesso', element: react_1.default.createElement(ParlPrivate, null,
                    react_1.default.createElement(DefaultLayoutParl_1.DefaultLayoutParl, null),
                    " ") },
                react_1.default.createElement(react_router_dom_1.Route, { path: '/parlamentar/acesso/votacao', element: react_1.default.createElement(ParlDashboard_1.ParlDashboard, null) })))));
}
exports.default = App;
