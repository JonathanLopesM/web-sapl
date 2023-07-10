import React, { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { io } from "socket.io-client"

export function PainelEletronico({id, session}){
  console.log(id, 'id de chegada')
  const {painelLayout, setPainelLayout} = useContext(AuthContext)
  const parlamentares = [
    {
      id:0,
      name: '- - - - - - - '
    },
    {
      id:1,
      name: 'CASÉ'
    },
    {
      id:2,
      name: 'CRISTINA MAGNO'
    },
    {
      id:3,
      name: 'DANIEL MACIEL'
    },
    {
      id:4,
      name: 'DR EDUARDO'
    },
    {
      id:5,
      name: 'FURLANI'
    },
    {
      id:6,
      name: 'GUSTAVO GOMES'
    },
    {
      id:7,
      name: 'JOÃOZINHO DO AR'
    },
    {
      id:8,
      name: 'LUCIANA ALVES'
    },
    {
      id:9,
      name: 'MAMEDE'
    },
    {
      id:10,
      name: 'MARCEL CASTRO'
    },
    {
      id:11,
      name: 'MARQUINHO'
    },


  ]
  const [form, setForm] = useState('presencavotacao')
  const [discurso, setDiscurso] = useState('')
  // const socket = io('http://localhost:3333');
  const handleFunction = () => {
    window.open(`/sessoes/painel`, "_blank", "width=1200, height=900")
  
  }

  const handleOpenPanel = (state) => {
    console.log("fechar ou abrir painel")
    console.log(state)
  }

  const handleViewWindow = (tela) => {
    console.log(tela)
  }


  console.log(painelLayout, 'no controle do painel')
  return (
    <div className="flex flex-col w-full">
      <h2>
        Painel Eletrônico 
        <span>
          (2ª Sessão Ordinária de 2023 da 3ª Sessão Legislativa da 50ª Legislatura)
        </span> 
      </h2>
      <div className="flex w-full justify-between my-5">
        <a onClick={handleFunction} target="_blank">
          <button className="flex border px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-300 text-white ">
            Iniciar painel completo
          </button>
        </a>
        <div className="flex">
          <button onClick={handleOpenPanel} className="flex border px-4 py-2 rounded-l-lg bg-green-400 hover:bg-green-300 text-white ">
              Abrir painel
          </button>
          <button onClick={handleOpenPanel} className="flex border px-4 py-2 rounded-r-lg bg-red-400 hover:bg-red-300 text-white ">
              Fechar painel
          </button>
        </div>
      </div>
      <form className="flex flex-col gap-4">
              <div className="flex justify-between">
              <button 
                    onClick={(e:any)=>{
                      handleViewWindow(0)
                      setForm(e.target.value)}
                    } 
                    className={`flex border px-2 py-2 rounded-md ${form == 'precensavotacao' && 'bg-gray-400 text-white'}`} 
                    value="precensavotacao"
                    type="button"
                >
                  Bem vindos
                </button>
                <button 
                    onClick={(e:any)=>{
                      handleViewWindow(1)
                      setForm(e.target.value)}
                    } 
                    className={`flex border px-2 py-2 rounded-md ${form == 'precensavotacao' && 'bg-gray-400 text-white'}`} 
                    value="precensavotacao"
                    type="button"
                >
                  Presença e votação
                </button>
                <button 
                  onClick={(e:any)=>{
                      handleViewWindow(2)
                      setForm(e.target.value)
                      setPainelLayout('resultadovotacao')
                    }
                  } 
                  className={`flex border px-2 py-2 rounded-md ${form == 'resultadodevotacao' && 'bg-gray-400 text-white'}`} 
                  value="resultadodevotacao"
                  type="button"
                >
                  Resultado de votação
                </button>
                <button 
                  onClick={(e:any)=>setForm(e.target.value)}
                  className={`flex border px-2 py-2 rounded-md ${form == 'discurso' && 'bg-gray-400 text-white'}`}  
                  value="discurso"
                  type="button"
                >
                  Discurso
                </button>
                <button 
                  onClick={(e:any)=>setForm(e.target.value)} 
                  className={`flex border px-2 py-2 rounded-md ${form == 'silencio' && 'bg-gray-400 text-white'}`} 
                  value="silencio"
                  type="button"
                >
                  Silêncio
                </button>
                <button 
                  onClick={(e:any)=>setForm(e.target.value)} 
                  className={`flex border px-2 py-2 rounded-md ${form == 'mensagem' && 'bg-gray-400 text-white'}`} 
                  value="mensagem"
                  type="button"
                >
                  Mensagem
                </button>
              </div>

        {form == 'discurso' ? <label 
        htmlFor="">
          Orador
          <select 
            className="flex w-full border px-4 py-1 rounded-md"
           name="" id="">
            {parlamentares.map(par => (
              <option key={par.id} value={par.name}>{par.name}</option>
            ))}
          </select>
        </label> 
        : <label 
        className="flex flex-col text-gray-200"
        htmlFor="">
          Orador
          <span
            className="flex w-full border px-4 py-1 rounded-md">
              - - - - - - - -
          </span>
        </label>}


        {form == 'mensagem' 
          ? <label htmlFor="mensagem">
              Mensagem
              <input 
                className="flex w-full border px-4 py-1 rounded-md"
                type="text" placeholder="mensagem" />
            </label> 
          : <label className="flex flex-col text-gray-300" htmlFor="mensagem">

              Mensagem
              <span
                className="flex w-full border px-4 py-1 rounded-md">
                  Mensagem
                </span>
            </label>
        }

        <button className="flex bg-green-500 text-white text-center justify-center py-2 rounded-md">
            ATUALIZAR PAINEL
        </button>
      </form>

    </div>
  )
}