import axios from 'axios'

export const api = axios.create({
  baseURL:'https://sapl.valenca.rj.leg.br'
})

export const getToken = async ({username, password}) => {
  let errors = []
  console.log(username, password)
  const response = await api.post('/api/auth/token', {
    username,
    password
  }, { validateStatus: false} as any)
  errors = response.data

  return response 
}

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