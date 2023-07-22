import React, { createContext, useEffect, useState } from "react"
import { IAuthProvider, IContext } from "./types"
import { createSession, getParlamentares, getSession, paineldados, parliamentariansSearch, deleteUser } from "../../services/api";
import { Link, useNavigate } from "react-router-dom"
import { PatchMatterVote, createUsers, getData, getDataIdPanel, getToken, getUsers, getVotes, patchPanelMessage, searchMaterias, searchParlSpeech } from "../../services/apiNode"



export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
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

  //MmViNDIxMmYw

  async function CreateSession(username, password) {

    const response = await getToken({ username, password })

    console.log(response, 'response no context')
    if (response.data.token) {
      const token = response.data.token

      localStorage.setItem('sessionid', token)

      console.log('deveria direcionar no context')
      navigate('/sessoes')
    } else if (response.data.message) {
      setError(response.data.message)
      console.log(error, 'error no context')
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

    console.log(response, 'session response context no context')
  }

  async function GetSessions(year: string, month: string, day: string, type: string) {
    console.log(year, month, day, type, 'dados do get session no context')
    const response = await getSession({ year, month, day, type })
    console.log(response.data.results, 'response do sessions no context')
    setSessions(response.data.results)

    localStorage.setItem('sessions', JSON.stringify(sessions))
  }


  async function GetParlamentares() {
    const response = await getParlamentares()

    console.log(response, 'response  no context')
    setParlamentares(response.data)

  }

  async function GetPainel() {
    const respon = await getData(setDados)
    setDados(respon)
    console.log(respon, 'respon no context no context')
  }

  async function Logout() {
    localStorage.removeItem('sessionid')
    navigate('/')
  }

  async function PatchPanelMessage (tela, message){
    const response = await patchPanelMessage(panelId, tela, message)
    console.log(response, 'response do dados')
  }
  async function GetVotes(){
    const response = await getVotes()
    console.log(response.data.response)
    setResultVote(response.data.response)
  }

  async function SaveIdPanel() {
    const response = await getDataIdPanel() as any

    console.log(response, 'response do id do painel no context')
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
      console.log( username,
        password,
        confirmpassword,
        active,
        nivel,
        id, "dados de cadastro dentro do context 151")
    const response = await createUsers({username, password, confirmpassword,active,nivel,id})
// Larga na typagem o nome da funcao
    console.log(response, "response do Create User no context")
  }
  async function GetUsers() {
    const response = await getUsers()
    console.log(response, "get user contexto ")
    setUsersGet(response.data)

  }

  async function SearchParliamen () {
    const response = await parliamentariansSearch() as any
    console.log(response, 'response no context no context')
    setSearchParl(response.data.results)
  }

  async function SearchMaterias(){
    const response = await searchMaterias()
    console.log(response, 'Server no context')

    setMaterias(response.data.results)
  }

  async function SearchParlSpeech () {
    const response = await searchParlSpeech()
    console.log(response, 'Valor do responde do ParlSet')
    setParlSpeech(response.data.results)
  }

  async function MatterUpdated(matter) {
    const response = await PatchMatterVote(panelId, matter)
    console.log(response, 'response do Matter no context no context')
  }

  async function Cadastros() {
    navigate('/sessoes/cadastros')
  }

  async function MenuInicial() {
    navigate('/sessoes')
  }

  async function DeleteUser(id) {
      deleteUser(id)
      alert('Usuário Deletado!')
  }

  return (
    <AuthContext.Provider value={
      { 
        authenticated: true, CreateSession, GetSessions, 
        sessions, navigate, basicDataOpen, setBasicDataOpen,
        tableOpen, setTableOpen, presenceOpen, setPresenceOpen,
        absenceOpen, setAbsenceOpen, personalTalkOpen, setPersonalTalkOpen,
        finalTalkOpen, setFinalTalkOpen, retirarPautaOpen, setRetirarPautaOpen, 
        idSession, setIdSession, year, setYear, month, setMonth, day, setDay, type, 
        setType, dash, setDash, sess, setSess, parlamentares, setParlamentares, 
        GetParlamentares, CreateSessionPlen, painelLayout, setPainelLayout, GetPainel, 
        dadosPainel, setDadosPainel, Logout, Cadastros, MenuInicial, SearchParliamen,
        searchParl, setSearchParl, SaveIdPanel, panelId, setPanelId, 
        estado, setEstado, dados, setDados, SearchMaterias,materias, setMaterias,
        MatterUpdated, GetVotes,resultVote, setResultVote,PatchPanelMessage, 
        SearchParlSpeech,parlSpeech, setParlSpeech, GetUsers,usersGet, setUsersGet,
        CreateUser, DeleteUser

      }} >
      {children}
    </AuthContext.Provider>
  )

}