import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const { CreateSessionAdmin, idSession, error, setError } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [visible, setVisible ] = useState(false)
  const InputType = visible ? "text" : "password"

  const history = useNavigate()
  const navigate = useNavigate();
  const token = localStorage.getItem('sessionid')
  const admin = localStorage.getItem('novace@Admin')
  useEffect(()=> {
    
    if( !admin){
      if(!token){
        navigate('/')        
      }
    }
    else {
      navigate('/sessoes')
    }
    //se não direciona Login
  }, [idSession])

  function HandleSetPass (e){
    setPassword(e.target.value)
    setError("")
  }
  function HandleSetUser(e){
    setUsername(e.target.value)
    setError("")
  }

  async function HandleSubmit(e){
    e.preventDefault()
    CreateSessionAdmin(username, password)
  }



  return (
    <div className="flex px-10 justify-items-center h-screen ">
        <div className="hidden sm:flex flex-col items-center gap-4 justify-center mx-auto ">
          <img className="w-70" src="/novace_logo.png" alt="Logo Novace" />
          
        </div>
        <div className="flex min-h-full flex-col justify-center  py-12 sm:px-12 sm:border-l-2 ">
          <div className="flex-row sm:mx-auto sm:w-full sm:max-w-sm text-center">
            <img className="sm:hidden mx-auto w-70" src="/novace_logo.png" alt="Logo Novace" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Faça o login para acessar a área!
            </h2>
            <h4 className="mx-auto font-semibold">Itaiaia</h4>
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

              <div className={`flex flex-col ${!error && 'pb-7'}`}>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Senha
                  </label>
                
                </div>
                {/* <div className="mt-2">
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
                </div> */}
                <div className='flex gap-2 border justify-between items-center rounded-md  px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                
                  <label className=' flex flex-col w-full text-xs text-gray-600 my-1 ' htmlFor="password">
                    <input onChange={(e)=> {
                      setPassword(e.target.value)

                    }}
                            value={password || ''}
                            className='focus:outline-none  text-lg w-full ' 
                            type={InputType} 
                            name="password" 
                    />
                  </label>
                  {
                    visible ? 
                    <svg onClick={()=> setVisible(!visible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" color="#adadad"
                        className="w-6 h-6  cursor-pointer ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    : 
                    <svg onClick={()=> setVisible(!visible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" color="#adadad"
                        className="w-6 h-6 cursor-pointer ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  }

                </div>
                {error && <span className={`${!!error ? 'flex' : 'hidden'} bg-red-500 text-white justify-center mt-1`}>{error}</span> }
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

            <div className="flex mt-20 ">
              <a href="/parlamentar" className="text-cyan-400 hover:text-cyan-500 underline">
                Acesso Parlamentar Aqui
              </a>
            </div>

            
          </div>
        </div>
      </div>
  )
}
