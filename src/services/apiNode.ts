import axios from 'axios'

export const api = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_URL_API_NODE,
})
//https://api-sapl.onrender.com http://localhost:3333

export const getToken = async ({username, password}) => {
  let errors = []
  console.log(username, password)
  const response = await api.post('/auth/login', {
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



export const PatchMatterVote = async (idPanel, matter) => {
  let errors = [];
  const response = await api.patch(`/painel/dados/${idPanel}`, {
    materia: matter
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
  console.log(getIdSpeech,"na api")
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
  console.log(id, "id na api 166")
  const response = await api.delete(`/auth/users/${id}`)
  return response
}

export const getSession = async ({year, month, day, type}) => {
  let errors = []

  const response =  await api.get(`/api/sessao/sessaoplenaria/`, 
  { validateStatus: false} as any)
  errors = response.data.errors
  return response
}
export const searchMaterias = async ( ) => {
  let errors =[];
  const response = await api.get('/api/materia/materialegislativa/')
  console.log(response, 'na api response ')

  errors= response.data
  return response
}