import axios from 'axios'

export const api = axios.create({
  baseURL:'https://api-sapl.onrender.com'
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