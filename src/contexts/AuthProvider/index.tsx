import React,{ createContext, useEffect, useState } from "react"
import { IAuthProvider, IContext } from "./types"
import { createSession, getParlamentares, getSession, paineldados } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { getToken } from "../../services/apiNode"



export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [error, setError ] = useState('')
  const [sessions, setSessions] = useState()

  const [basicDataOpen, setBasicDataOpen] = useState(true)
  const [tableOpen, setTableOpen] = useState(false)
  const [presenceOpen, setPresenceOpen] = useState(false)
  const [absenceOpen, setAbsenceOpen] = useState(false)
  const [personalTalkOpen, setPersonalTalkOpen] = useState(false)
  const [finalTalkOpen, setFinalTalkOpen] = useState(false)
  const [retirarPautaOpen, setRetirarPautaOpen] = useState(false)

  const [idSession, setIdSession]= useState('')
  const [parlamentares, setParlamentares,] = useState() as any

  const [year, setYear] = useState('2023')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [type, setType] = useState('')

  const [dash, setDash] = useState(true)
  const [sess, setSess] = useState(false)

  const [painelLayout, setPainelLayout] = useState('parlamentares')

  const [ dadosPainel, setDadosPainel ] = useState('') as any

  //MmViNDIxMmYw

  
  
  async function CreateSession(username, password) {

    const response = await getToken({username, password})

    console.log(response,  'response')
    if(response.data.token){
      const token = response.data.token

      localStorage.setItem('sessionid', token)

      console.log('deveria direcionar')
      navigate('/sessoes')
    } else if(response.data.message) {
      setError(response.data.message)
      console.log(error, 'error')
    }else{
      setError('Email/Senha Inválidos!') 
    }

  }

  async function CreateSessionPlen({
    cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio,
    hora_fim, numero, data_fim, url_audio, url_video, upload_pauta,
    upload_ata, upload_anexo, iniciada, finalizada, interativa, 
    tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura
  }){

    const response = await createSession({
      cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio,
      hora_fim, numero, data_fim, url_audio, url_video, upload_pauta,
      upload_ata, upload_anexo, iniciada, finalizada, interativa, 
      tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura
    })

    console.log(response, 'session response context')
  }

  async function GetSessions(year:string, month:string, day:string, type:string) {
    console.log(year,month, day, type, 'dados do get session')
    const response = await getSession({year, month, day, type})
    console.log(response.data.results , 'response do sessions')
    setSessions(response.data.results)

    localStorage.setItem('sessions', JSON.stringify(sessions))
  }

  
  async function GetParlamentares (){
    const response = await getParlamentares()

    console.log(response, 'response ')
    setParlamentares(response.data)

  }

  async function GetPainel({id}){

  }

  async function Logout (){
    localStorage.removeItem('sessionid')
    navigate('/')

  }




  return (
    <AuthContext.Provider value={{ authenticated: true , CreateSession, GetSessions, sessions, navigate, basicDataOpen, setBasicDataOpen, tableOpen, setTableOpen, presenceOpen, setPresenceOpen, absenceOpen, setAbsenceOpen, personalTalkOpen, setPersonalTalkOpen, finalTalkOpen, setFinalTalkOpen, retirarPautaOpen, setRetirarPautaOpen,idSession, setIdSession,year, setYear,month, setMonth,day, setDay,type, setType, dash, setDash, sess,setSess,parlamentares, setParlamentares,GetParlamentares, CreateSessionPlen, painelLayout, setPainelLayout, GetPainel, dadosPainel, setDadosPainel, Logout }} >
      {children}
    </AuthContext.Provider>
  )
  
}