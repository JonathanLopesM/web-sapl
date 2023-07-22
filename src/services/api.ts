import axios from 'axios'

export const api = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_URL_API,
})


export const createSession = async ({
  cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio,
  hora_fim, numero, data_fim, url_audio, url_video, upload_pauta,
  upload_ata, upload_anexo, iniciada, finalizada, interativa, 
  tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura
}) => {
  let errors = []
  const response = await api.post('/api/sessao/sessaoplenaria/', {
    cod_andamento_sessao, painel_aberto, data_inicio, hora_inicio,
  hora_fim, numero, data_fim, url_audio, url_video, upload_pauta,
  upload_ata, upload_anexo, iniciada, finalizada, interativa, 
  tema_solene, publicar_pauta, tipo, sessao_legislativa, legislatura
  } )
  errors = response.data.errors
  return response
}

export const getSession = async ({year, month, day, type}) => {
  let errors = []

  const response =  await api.get(`/api/sessao/sessaoplenaria?data_inicio__year=${year}&data_inicio__month=${month}&data_inicio__day=${day}&tipo=${type}&salvar=Pesquisar`, 
  { validateStatus: false} as any)
  errors = response.data.errors
  return response
}

export const getParlamentares = async () => {
  let errors = []
  const response = await api.get('/api/parlamentares/parlamentar/search_parlamentares',
  { valuedadeStatus: false } as any)
  errors = response.data.errors
  return response
}

export const paineldados = async ({ id, token }) => {
  let errors = []
  const response = await api.get(`/painel/${id}/dados`, 
  {
    headers :{
      Cookie: `sessionid=${token}`,
    }
  }
  )
  errors = response.data.errors
  return response
}

export const parliamentariansSearch = async () => {
  let errors = []
  const response = await api.get("/api/parlamentares/parlamentar/")
  errors = response.data.errors
  return response
}

export const deleteUser = async (id) => {
  let errors = [];
  const response = {
    _id: id,
    message: "usuário deletado"
  }  
  console.log(response, 'response deleteUser')
  return response
}