import axios from 'axios'

export const api = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_URL_API_NODE,
})
// "http://localhost:3333"

export const getToken = async ({username, password}) => {
  let errors = []
  
  const response = await api.post('/auth/login', {
    username,
    password
  }, { validateStatus: false} as any)
  errors = response.data

  return response 
}
export const getTokenAdmin = async ({username, password}) => {
  let errors = []
  
  const response = await api.post('/auth/login/admin', {
    username,
    password
  }, { validateStatus: false} as any)
  errors = response.data

  return response 
}

export const getData = async (setDados) => {
  let errors = [];
  const response = await api.get("/painel/dados")

  errors= response.data
  
  setDados(response)
}
export const getDataIdPanel = async () => {
  let errors = [];
  const response = await api.get("/painel/dados")

  errors= response.data
  return response
}

export const PatchPanelView = async (idPanel, tela) => {
  let errors = [];
  const response = await api.patch(`/painel/dados/${idPanel}`, {
    tela: tela
  })
  errors= response.data
  return response
}
export const openClosePanelView = async (idPanel, estado) => {
  let errors = [];
  const response = await api.patch(`/painel/dados/${idPanel}`, {
    estado: estado
  })
  errors= response.data
  return response
}



export const PatchMatterVote = async (idPanel, matter, register) => {
  let errors = [];
  const response = await api.patch(`/painel/dados/${idPanel}`, {
    materia: matter,
    registro: register
  })
  errors= response.data
  return response
}

export const getVotes = async () => {
  let errors = [];
  const response = await api.get("/parl/vote")
  errors= response.data
  return response
}

export const patchPanelMessage = async (idPanel, tela, message) => {
  let errors = [];
  const response = await api.patch(`/painel/dados/${idPanel}`, {
    tela, 
    message
  })
  errors= response.data
  return response
}
//Crud dos users
export const createUsers = async ({
  username,
  password,
  confirmpassword,
  active,
  nivel,
  id
}) => {
  let errors = [];
  
  const response = await api.post(`/auth/users`, {
    username,
    password,
    confirmpassword,
    active,
    nivel,
    id
  })
  errors= response.data
  return response
}

//Buscar Usuários - retorno de usuarios parlamentares e admin's
export const getUsers = async () => {
  let errors = [];
  const response = await api.get(`/auth/users`)
  errors= response.data
  return response
}

export const patchUsers = async ({id, username, password, active}) => {
  let errors = [];
  const response = await api.patch(`/auth/user/${id}`, {
    username, password, active
  })
  errors= response.data
  return response
}

export const getSpeechParlData = async () => {
  let errors = [];
  const response = await api.get(`/speech/timer`)
  errors= response.data
  return response
}
export const patchSpeechParl = async ({
  getIdSpeech, id, name, fotografia, speechTime, speechTimeInit,
  presenca, speechTimeInitBoolean,
   partTime, partTimeInit, partTimeInitBoolean,
   orderQuestionTime, orderQuestionTimeInit,orderQuestionTimeInitBoolean,
   finalConsiderationsTime,finalConsiderationsTimeInit,finalConsiderationsTimeInitBoolean,
   soundPlay
}) => {
  let errors = [];
  const response = await api.patch(`/speech/timer/${getIdSpeech}`, {
    id, name, fotografia, speechTime, speechTimeInit,
    presenca, speechTimeInitBoolean, 
    partTime, partTimeInit, partTimeInitBoolean,
    orderQuestionTime, orderQuestionTimeInit,orderQuestionTimeInitBoolean,
    finalConsiderationsTime,finalConsiderationsTimeInit,finalConsiderationsTimeInitBoolean,
    soundPlay 

  })
  errors= response.data
  return response
}

export const deleteUser = async (id) => {
  let errors = [];
  
  const response = await api.delete(`/auth/users/${id}`)
  return response
}

export const getSession = async (id) => {
  let errors = []

  const response =  await api.get(`/api/sessao/sessaoplenaria/${id}`, 
  { validateStatus: false} as any)
  errors = response.data.errors
  return response
}
export const searchMaterias = async ( ) => {
  let errors =[];
  const response = await api.get('/api/materia/materialegislativa/')
  

  errors= response.data
  return response
}
//api/sessao/votacao
export const createCloseVote = async ({
  materia, ordem,
    tipo_resultado_votacao, observacao,
    numero_votos_sim,
    numero_votos_nao,
    numero_abstencoes,
	  votes 
}) => {
  let errors =[];
  const response = await api.post('/api/sessao/votacao', {
    materia, ordem,
    tipo_resultado_votacao, observacao,
    numero_votos_sim,
    numero_votos_nao,
    numero_abstencoes,
	  votes 
  })
  

  errors= response.data
  return response
}

// app.patch("/parl/vote/:user", Voting)
export const patchVote = async ({id, novoVoto}) => {
  
  let errors= [];
  const response = await api.patch(`/parl/vote/${id}`, {
    voto: novoVoto
  })
  errors= response.data
  return response
}

//zerar todos os votos
export const registerReload = async () => {
  let errors= [];
  const response = await api.get("/api/sessao/zerar")

  errors= response.data
  return response
}
export const presenceReload = async () => {
  let errors= [];
  const response = await api.get("/api/sessao/presencezero")

  errors= response.data
  return response
}

// Vote Routes 
export const presenceParl = async (id) => {
  let errors= [];
  const response = await api.get(`/parl/vote/${id}`)
  errors = response.data
  return response
}
//Updated presence
export const presenceParlNew = async ({voteId, presence}) => {
  let errors= [];
  const response = await api.patch(`/parl/presence/${voteId}`, {
    presence: presence
  })
  errors = response.data
  return response
}
// vote 
export const parlVote = async ({idVote, vote}) => {
  let errors= [];

  const response = await api.patch(`/parl/vote/${idVote}`, {
    voto: vote
  }, { validateStatus: false} as any)
  errors = response.data
  return response
}

//Registro do Resultado da Votação
export const registerResultVote = async ({
  numero_votos_sim, numero_votos_nao, numero_abstencoes,
  observacao, ip, tipo_resultado_votacao, materia, 
  ordem, expediente, user
}) => {
let errors = []

const response = await api.post(`/api/sessao/registrovotacao/`, {
  numero_votos_sim,
  numero_votos_nao,
  numero_abstencoes,
  observacao,
  ip,
  tipo_resultado_votacao,
  materia,
  ordem,
  expediente,
  user
})
errors = response.data.errors
return response
}
