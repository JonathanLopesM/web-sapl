import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const { CreateSession, idSession } = useContext(AuthContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const history = useNavigate()
  const navigate = useNavigate();

  useEffect(()=> {
    // Conferir se tem um token, 

    // se tiver rediciona para a dashboard 
    const token = localStorage.getItem('sessionid')
    if(!token){
      navigate('/')
    }
    else {
      navigate('/sessoes')
    }
    //se não direciona Login
  }, [idSession])

  function HandleSetPass (e){
    console.log(password)
    setPassword(e.target.value)
  }
  function HandleSetUser(e){
    console.log(username)
    setUsername(e.target.value)
  }

  async function HandleSubmit(e){
    e.preventDefault()
    console.log(username, password, 'user e senha')
    CreateSession(username, password)
  }



  return (
    <div className="flex px-10 justify-items-center h-screen ">
      <div className="flex flex-col items-center gap-4 justify-center mx-auto ">
          <img className="w-28" src="/Brasao_barra_Mansa.jpeg" alt="brasão de barra mansa" />
          <div className="flex flex-col">
            <h2 className="flex w-72 text-center text-2xl text-blue-500 sm:text-3xl font-bold">
              Câmara Municipal de Barra Mansa
            </h2>
            <p className="flex text-gray-500">
              Sistema de Apoio ao Processo Legislativo
            </p>
          </div>
        </div>
        <div className="flex min-h-full flex-col justify-center  py-12 px-12 border-l-2 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Faça o login para acessar a área!
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={HandleSubmit} method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Usuário
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e)=> HandleSetUser(e)}
                    value={username}
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    placeholder="Digite seu username"
                    required
                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Senha
                  </label>
                
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e)=>HandleSetPass(e)}
                    value={password}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    autoComplete="current-password"
                    required
                    className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Acessar
                </button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
  )
}
