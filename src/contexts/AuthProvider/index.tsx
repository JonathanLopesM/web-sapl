import React, { createContext, useEffect, useState } from "react"
import { IAuthProvider, IContext } from "./types"
import { createSession,  getParlamentares, getSessionSapl, ordemDia,paineldados, parliamentariansSearch,    searchParlSpeech} from "../../services/api";
import { Link, useNavigate } from "react-router-dom"
import { PatchMatterVote, createUsers, getData, getDataIdPanel, getSpeechParlData, 
  getToken, getUsers, getVotes, patchPanelMessage, patchSpeechParl, 
   deleteUser,  getSession,searchMaterias, createCloseVote, patchVote, registerReload,
    getTokenAdmin, presenceParl, presenceParlNew, parlVote, presenceReload, registerResultVote } from "../../services/apiNode"

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();

  const [tokenOn, setTokenOn] = useState("")
  const [error, setError] = useState('')
  const [sessions, setSessions] = useState()

  const [basicDataOpen, setBasicDataOpen] = useState(true)
  const [tableOpen, setTableOpen] = useState(false)
  const [presenceOpen, setPresenceOpen] = useState(false)
  const [absenceOpen, setAbsenceOpen] = useState(false)
  const [personalTalkOpen, setPersonalTalkOpen] = useState(false)
  const [finalTalkOpen, setFinalTalkOpen] = useState(false)
  const [retirarPautaOpen, setRetirarPautaOpen] = useState(false)

  const [idSession, setIdSession] = useState('')
  const [parlamentares, setParlamentares,] = useState() as any
  const [userParl, setUserParl] = useState() as any
  const [userAdm, setUserAdm] = useState() as any

  const [year, setYear] = useState('2023')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [type, setType] = useState('')

  const [dash, setDash] = useState(true)
  const [sess, setSess] = useState(false)

  const [painelLayout, setPainelLayout] = useState('parlamentares')

  const [dadosPainel, setDadosPainel] = useState('') as any

  const [searchParl, setSearchParl] = useState([])

  const [panelId, setPanelId] = useState()
  const [estado, setEstado] = useState(false)

  const [dados, setDados] = useState([]) as any

  const [materias, setMaterias] = useState([])
  const [resultVote, setResultVote] = useState() as any

  const [parlSpeech, setParlSpeech] = useState() as any
  const [usersGet, setUsersGet] = useState( ) as any
  const [dayOrder, setDayOrders] = useState() as any

  const [getIdSpeech, setGetIdSpeech] = useState() as any
  const [matters, setMatters] = useState()
  const [voteResParl, setVoteResParl] = useState()
  const [votes, setVotes] = useState(false)
  const [matterComplet, setMatterComplet] = useState()

  const [voteId, setVoteId] = useState()
  const [presence ,setPresence] = useState()

  useEffect(()=> {
    const recoveredUser = localStorage.getItem('sessionid')
    const userset = localStorage.getItem('novace@userParl')
    if(recoveredUser){
      setTokenOn(recoveredUser)
    }
    if(userset){
      setUserParl(JSON.parse(userset))
    }
    },[])
    // getTokenAdmin
    async function CreateSessionAdmin(username, password) {

      const response = await getTokenAdmin({ username, password })
  
      if (response.data.token) {
        
        const token = response.data.token
  
        localStorage.setItem('sessionid', token)
        localStorage.setItem('novace@Admin', JSON.stringify(response.data.response))
        
        setTokenOn(token)
        setIdSession(token)
        setUserAdm(response.data.response)
        // navigate('/sessoes')
      } else if (response.data.message) {
        setError(response.data.message)
        
      } else {
        setError('Email/Senha Inválidos!')
      }
  
    }

  async function CreateSession(username, password) {

    const response = await getToken({ username, password })

    if (response.data.token) {
      
      const token = response.data.token

      localStorage.setItem('sessionid', token)
      localStorage.setItem('novace@userParl', JSON.stringify(response.data.response.user) )
      
      setTokenOn(token)
      setIdSession(token)
      setUserParl(response.data.response.user)
      // navigate('/sessoes')
    } else if (response.data.message) {
      setError(response.data.message)
      
      
    } else {
      setError('Email/Senha Inválidos!')

    }

  }

  async function CreateSessionPlen({
    cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio,
    hora_fim, numero, data_fim, url_audio, url_video, upload_pauta,
    upload_ata, upload_anexo, iniciada, finalizada, interativa,
    tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura
  }) {

    const response = await createSession({
      cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio,
      hora_fim, numero, data_fim, url_audio, url_video, upload_pauta,
      upload_ata, upload_anexo, iniciada, finalizada, interativa,
      tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura
    })

  }

  async function GetSessions(year: string, month: string, day: string, type: string) {
    const response = await getSessionSapl({ year, month, day, type}) as any
    
    setSessions(response.data.results)

    localStorage.setItem('sessions', JSON.stringify(sessions))
  }

  async function Matters(id){
    const response = await getSession(id)
    
    setMatters(response.data)
  }

  async function CloseVote(
    materia, ordem,
    tipo_resultado_votacao, observacao,
    numero_votos_sim,
    numero_votos_nao,
    numero_abstencoes,
	  votes 
    ){
      
        const response = await createCloseVote({
          materia, ordem,
            tipo_resultado_votacao, observacao,
            numero_votos_sim,
            numero_votos_nao,
            numero_abstencoes,
            votes 
        })
        
  }                   

  async function GetParlamentares() {
    const response = await getParlamentares()

    setParlamentares(response.data)

  }
  // PAINEL - Returno do dados
  async function GetPainel() {
    const respon = await getData(setDados)
    // setDados(respon)
    
  }

  async function Logout() {
    localStorage.removeItem('sessionid')
    localStorage.removeItem("novace@userParl")
    localStorage.removeItem("novace@Admin")
    navigate('/')
  }
  async function LogoutParl() {
    localStorage.removeItem('sessionid')
    localStorage.removeItem("novace@userParl")
    navigate('/parlamentar')
  }

  async function PatchPanelMessage (tela, message){
     await patchPanelMessage(panelId, tela, message)
  }
  async function GetVotes(){
    const response = await getVotes()
    setResultVote(response.data.response)
    setVoteResParl(response.data.responseVote)
  }

  async function SaveIdPanel() {
    const response = await getDataIdPanel() as any

    
    setEstado(response.data.estado)
    setPanelId(response.data.idPanel)
  }

  async function CreateUser(
    username,
    password,
    confirmpassword,
    active,
    nivel,
    id ){
      
        
     await createUsers({username, password, confirmpassword,active,nivel,id})
// Larga na typagem o nome da funcao
      GetUsers()
    
  }
  async function GetUsers() {
    const response = await getUsers()
    
    setUsersGet(response.data)

  }

  async function SearchParliamen () {
    const response = await parliamentariansSearch() as any
    
    setSearchParl(response.data.results)
  }

  async function SearchMaterias(){
    const response = await searchMaterias()
    
    
    setMaterias(response.data)
  }

  async function SearchParlSpeech () {
    const response = await searchParlSpeech()
    
    setParlSpeech(response.data.results)
  }

  async function MatterUpdated(matter, register) {
    const response = await PatchMatterVote(panelId, matter, register)
    
  }
  async function DayOrderIds(idSes){
    
    const response = await ordemDia({idSes})

    
    setDayOrders(response.data.results)
  }
  // Updated Speech Parl
  async function GetIdSpeech(){
    const response = await getSpeechParlData()
    console.log(response.data.response[0]._id, 'response no autcontext')
    
     setGetIdSpeech(response.data.response[0]._id)

  }
  //ADICIONAR AS FUNCOES QUE FALTAM DOS STATES 
  async function PatchSpeechParl(getIdSpeech, id, name, fotografia, speechTime, speechTimeInit,
    presenca, speechTimeInitBoolean, partTime, partTimeInit, partTimeInitBoolean,
    orderQuestionTime, orderQuestionTimeInit,orderQuestionTimeInitBoolean,
    finalConsiderationsTime,finalConsiderationsTimeInit,finalConsiderationsTimeInitBoolean,
    soundPlay
    ){
      
    const response = await patchSpeechParl({
      getIdSpeech, id, name, fotografia, 
      speechTime, speechTimeInit,
      presenca, speechTimeInitBoolean, partTime, partTimeInit, partTimeInitBoolean,
      orderQuestionTime, orderQuestionTimeInit,orderQuestionTimeInitBoolean,
      finalConsiderationsTime,finalConsiderationsTimeInit,finalConsiderationsTimeInitBoolean,
      soundPlay
     })
      
  }
  async function PatchVotePar(id, novoVoto) {
    await patchVote({id, novoVoto}) 
  }

  //Zerar todos os votos
  async function ReloadVotePanel (){
     await registerReload()
  }
  async function PresenceReload(){
    await presenceReload()
  }

  async function Cadastros() {
    navigate('/sessoes/cadastros')
  }

  async function MenuInicial() {
    navigate('/sessoes')
  }

  async function DeleteUser(id) {
      await deleteUser(id)
      await GetUsers()
  }

  async function GetVotePresence(){
    const id = userParl?.id
    const response = await presenceParl(id)
    
    setVoteId(response.data._id)
    setPresence(response.data.presenca)
  }
  //Get ID for Presence patch up
  async function PresenceId (presence:boolean){
    
     const response = await presenceParlNew({voteId, presence})
     
     setPresence(response.data.response.presenca)
  }

  async function GetDadosPainel(){
    await getData(setDados)
  }
  async function ParlVote (idVote:string, vote:string) {
     await parlVote({idVote, vote})
  }

  async function RegisterVoteSapl (
    sessionId, voteResParl,
    numero_votos_sim, numero_votos_nao, numero_abstencoes,
    observacao, ip, tipo_resultado_votacao, materia, 
    ordem, expediente, user){
      const response = await registerResultVote({
        sessionId, voteResParl,
        numero_votos_sim, numero_votos_nao, numero_abstencoes,
        observacao, ip, tipo_resultado_votacao, materia, 
        ordem, expediente, user
      })
      console.log(response, "response do register vote context 350")

  }

  return (
    <AuthContext.Provider value={
      { 
        authenticated: !!tokenOn, CreateSession,CreateSessionAdmin, userParl, setUserParl, GetSessions, 
        sessions, navigate, basicDataOpen, setBasicDataOpen,
        tableOpen, setTableOpen, presenceOpen, setPresenceOpen,
        absenceOpen, setAbsenceOpen, personalTalkOpen, setPersonalTalkOpen,
        finalTalkOpen, setFinalTalkOpen, retirarPautaOpen, setRetirarPautaOpen, 
        idSession, setIdSession, year, setYear, month, setMonth, day, setDay, type, 
        setType, dash, setDash, sess, setSess, parlamentares, setParlamentares, 
        GetParlamentares, CreateSessionPlen, painelLayout, setPainelLayout, GetPainel, 
        dadosPainel, setDadosPainel, Logout,LogoutParl, Cadastros, MenuInicial, SearchParliamen,
        searchParl, setSearchParl, SaveIdPanel, panelId, setPanelId, 
        estado, setEstado, dados, setDados, SearchMaterias,materias, setMaterias,
        MatterUpdated, GetVotes,resultVote, setResultVote,PatchPanelMessage, 
        SearchParlSpeech,parlSpeech, setParlSpeech, GetUsers,usersGet, setUsersGet,
        DayOrderIds,dayOrder, setDayOrders,
        GetIdSpeech,getIdSpeech, setGetIdSpeech, PatchSpeechParl,
        CreateUser, DeleteUser, Matters,matters, setMatters,
        voteResParl, setVoteResParl, votes, setVotes,
        matterComplet, setMatterComplet,CloseVote, PatchVotePar,
        ReloadVotePanel, userAdm, setUserAdm, error, setError,
        voteId, setVoteId,presence ,setPresence, PresenceId,GetVotePresence,
        GetDadosPainel, ParlVote, PresenceReload, RegisterVoteSapl

      }} >
      {children}
    </AuthContext.Provider>
  )

}