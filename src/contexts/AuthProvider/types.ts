import React, { SetStateAction } from "react";


export interface IUser {
}

export interface ICustomer {

}
interface ObjectStatement {

}

export interface IContext extends IUser {
  authenticated: boolean;
  CreateSession: (email: string, password: string) => Promise<void>;
  CreateSessionAdmin:(email: string, password: string) => Promise<void>;
  userParl:any;
  setUserParl:any;
  GetSessions: any;
  sessions: any;
  navigate: any;

  basicDataOpen: any, setBasicDataOpen: any,
  tableOpen: any, setTableOpen: any,
  presenceOpen: any, setPresenceOpen: any,
  absenceOpen: any, setAbsenceOpen: any,
  personalTalkOpen: any, setPersonalTalkOpen: any,
  finalTalkOpen: any, setFinalTalkOpen: any,
  retirarPautaOpen: any, setRetirarPautaOpen: any

  idSession: any, setIdSession: any
  parlamentares: any
  setParlamentares: any
  GetParlamentares: any

  year: any, setYear: any, month: any, setMonth: any, day: any, setDay: any, type: any, setType: any
  dash: any, setDash: any, sess: any, setSess: any

  CreateSessionPlen: any

  painelLayout: any, setPainelLayout: any

  GetPainel: any, dadosPainel: any, setDadosPainel: any
  Logout: any
  Cadastros: any
  MenuInicial: any

  SearchParliamen:any,searchParl:any, setSearchParl:any

  SaveIdPanel:any
  panelId:any, 
  setPanelId:any
  estado:any, setEstado:any
  dados:any
  setDados:any
  SearchMaterias:any
  materias:any 
  setMaterias:any

  MatterUpdated:any

  GetVotes:any
  resultVote:any
  setResultVote:any
  PatchPanelMessage:any
  SearchParlSpeech:any
  parlSpeech:any
  setParlSpeech:any
  GetUsers:any
  usersGet:any 
  setUsersGet:any
  CreateUser:any
  DayOrderIds:any
  dayOrder:any
  setDayOrders:any
  GetIdSpeech:any
  getIdSpeech:any
   setGetIdSpeech:any
   PatchSpeechParl:any
  DeleteUser: any
  Matters:any
  matters:any 
  setMatters:any
  voteResParl:any
  setVoteResParl:any
  votes:any
  setVotes:any
  matterComplet:any
  setMatterComplet: any
  CloseVote:any,
  PatchVotePar:any
  ReloadVotePanel:any
  LogoutParl:any
  userAdm:any
  setUserAdm:any
  error:any
  setError:any

  PresenceId:any,GetVotePresence:any
  voteId:any
  setVoteId:any
  presence:any 
  setPresence:any
  GetDadosPainel:any
  ParlVote:any
  PresenceReload:any
  RegisterVoteSapl:any
  PatchPresenceParl:any
  PatchPresenceParlMany:any
}

export interface IAuthProvider {
  children: JSX.Element;
}