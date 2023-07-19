import axios from 'axios'

export const api = axios.create({
  // @ts-ignore
  baseURL: "http://localhost:3333" //import.meta.env.VITE_URL_API_NODE,
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

export const searchMaterias = async ( ) => {
  let errors =[];
  const response = await axios.get('https://sapl.valenca.rj.leg.br/api/materia/materialegislativa/?o=-data_apresentacao&page_size=100')
  console.log(response, 'na api response ')

  errors= response.data
  return response
}
export const searchParlSpeech = async () => {
  let errors = [];
  const response = await axios.get("https://sapl.valenca.rj.leg.br/api/parlamentares/parlamentar/")
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

export const getUsers = async () => {
  let errors = [];
  const response = await api.get(`/auth/users`)
  errors= response.data
  return response
}
