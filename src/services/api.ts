import axios from 'axios'

export const api = axios.create({
  // @ts-ignore
  baseURL: 'http://saplitatiaia.novace.com.br/'
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
  const response = await api.get("/api/parlamentares/parlamentar/?page_size=50")
  errors = response.data.errors
  return response
}

export const ordemDia = async ({idSes}) => {
  let errors = [];
  
  const response = await api.get(`/api/sessao/ordemdia/?sessao_plenaria=${idSes}`)
  errors = response.data.errors
  return response
}


export const searchParlSpeech = async () => {
  let errors = [];
  const response = await api.get("/api/parlamentares/parlamentar/")
  errors= response.data
  return response
}

export const getSessionSapl = async ({year, month, day, type}) => {
  let errors = []

  const response =  await api.get(`/api/sessao/sessaoplenaria?o=-data_inicio&page_size=100`, 
  { validateStatus: false} as any)
  errors = response.data.errors
  return response
}

export const registerResultVote = async ({
  voteResParl,
    numero_votos_sim, numero_votos_nao, numero_abstencoes,
    observacao, ip, tipo_resultado_votacao, materia, 
    ordem, expediente, user
}) => {
  let errors = []

  const response = await api.post(`/api/sessao/registrovotacao/`, {
    voteResParl,
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

