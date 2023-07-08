import axios from 'axios'

export const api = axios.create({
  baseURL:'https://api-sapl.onrender.com'
})

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