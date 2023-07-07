import React,{ SetStateAction } from "react";


export interface IUser {
}

export interface ICustomer {

}
interface ObjectStatement {
  
}

export interface IContext extends IUser {
  authenticated: boolean;
  CreateSession: (email:string, password:string) => Promise<void>;
  GetSessions: any;
  sessions: any;
  navigate: any;

  basicDataOpen:any, setBasicDataOpen:any,
  tableOpen:any, setTableOpen:any,
  presenceOpen:any, setPresenceOpen:any,
  absenceOpen:any, setAbsenceOpen:any,
  personalTalkOpen:any, setPersonalTalkOpen:any,
  finalTalkOpen:any, setFinalTalkOpen:any,
  retirarPautaOpen:any, setRetirarPautaOpen:any
  
  idSession:any, setIdSession:any
  parlamentares:any
  setParlamentares:any
  GetParlamentares:any

  year:any, setYear:any,month:any, setMonth:any,day:any, setDay:any,type:any, setType:any
  dash:any, setDash:any, sess:any,setSess:any

  CreateSessionPlen:any

  painelLayout :any, setPainelLayout:any

  GetPainel: any, dadosPainel:any, setDadosPainel:any
  Logout:any
}

export interface IAuthProvider {
  children: JSX.Element;
}