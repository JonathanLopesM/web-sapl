import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { PresenceVoteControl } from "./PresenceVote"
import { PatchPanelView, openClosePanelView } from "../../services/apiNode"
import { ResultVoteControl } from "./ResultVote"
import {  MessageControl } from "./Message"
import { SpeechControl } from "./SpeechControl/index"
import { Presence } from "./Presence"

export function PainelEletronico({ session }){
  const { painelLayout, setPainelLayout,SearchParlSpeech, SaveIdPanel, panelId, setPanelId, estado, setEstado } = useContext(AuthContext)
  const [form, setForm] = useState('bemvindos')
  const [color, setColor] = useState(estado)
  
  useEffect(()=> {
    SaveIdPanel()
    SearchParlSpeech()
  },[color])

  const handleFunction = () => {
    window.open(`/sessoes/painel`, "_blank", "width=1600, height=1100")
  }

  const handleOpenPanel = (state) => {
    setColor(state)
    openClosePanelView(panelId, state)
  }

  const handleViewWindow = (tela) => {
    PatchPanelView(panelId, tela);
  }

  return (
    <div className="flex flex-col w-full ">
      <h2 className="flex gap-2 font-bold text-xl">

        {session &&
          session.__str__
        } 
      </h2>
      <div className="sm:flex w-full justify-between my-5 ">
        <a onClick={handleFunction} target="_blank">
          <button className="flex border px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-300 text-white ">
            Iniciar painel completo
          </button>
        </a>
        <div className="flex mt-2 sm:mt-0">
          <button onClick={()=>handleOpenPanel(true)} className={`flex border px-4 py-2 rounded-l-lg ${color && 'bg-green-400 hover:bg-green-300 text-white'} `}>
              Abrir painel
          </button>
          <button onClick={()=>handleOpenPanel(false)} className={`flex border px-4 py-2 rounded-r-lg ${!color && 'bg-red-400 hover:bg-red-300 text-white'} `}>
              Fechar painel
          </button>
        </div>
      </div>
      <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2 sm:flex justify-between">
              <button 
                    onClick={(e:any)=>{
                      handleViewWindow(0)
                      setForm(e.target.value)
                      setPainelLayout('bemvindos')
                    }} 
                    className={`flex border px-2 py-2 rounded-md ${form == 'bemvindos' && 'bg-gray-400 text-white'} `} 
                    value="bemvindos"
                    type="button"
                >
                  Bem vindos
                </button>
                <button 
                    onClick={(e:any)=>{
                      handleViewWindow(1)
                      setForm(e.target.value)
                      setPainelLayout('presenca')
                    }} 
                    className={`flex border px-2 py-2 rounded-md ${form == 'presenca' && 'bg-gray-400 text-white'}`} 
                    value="presenca"
                    type="button"
                >
                  Presença
                </button>
                <button 
                    onClick={(e:any)=>{
                      handleViewWindow(1)
                      setForm(e.target.value)
                      setPainelLayout('presencavotacao')
                    }} 
                    className={`flex border px-2 py-2 rounded-md ${form == 'presencavotacao' && 'bg-gray-400 text-white'}`} 
                    value="presencavotacao"
                    type="button"
                >
                  votação
                </button>
                <button 
                  onClick={(e:any)=>{
                      handleViewWindow(2)
                      setForm(e.target.value)
                      setPainelLayout('presencavotacao')
                    }
                  } 
                  className={`hidden border px-2 py-2 rounded-md ${form == 'resultadodevotacao' && 'bg-gray-400 text-white'}`} 
                  value="resultadodevotacao"
                  type="button"
                >
                  Resultado de votação
                </button>
                <button 
                  onClick={(e:any)=>{
                    handleViewWindow(3)
                    setForm(e.target.value)
                    setPainelLayout('discurso')
                  }}
                  className={`flex border px-2 py-2 rounded-md ${form == 'discurso' && 'bg-gray-400 text-white'}`}  
                  value="discurso"
                  type="button"
                >
                  Discurso
                </button>
                <button 
                  onClick={(e:any)=>{
                    handleViewWindow(4)
                    setForm(e.target.value)
                    setPainelLayout('silencio')
                  }} 
                  className={`flex border px-2 py-2 rounded-md ${form == 'silencio' && 'bg-gray-400 text-white'}`} 
                  value="silencio"
                  type="button"
                >
                  Silêncio
                </button>
                <button 
                  onClick={(e:any)=>{
                    setForm(e.target.value)
                    setPainelLayout('mensagem')
                  }} 
                  className={`flex border px-2 py-2 rounded-md ${form == 'mensagem' && 'bg-gray-400 text-white'}`} 
                  value="mensagem"
                  type="button"
                >
                  Mensagem
                </button>
              </div>
        {
          form == 'presencavotacao' 
          && <PresenceVoteControl sessionId={session.id} />
        }
        {
          form == 'presenca' 
          && <Presence sessionId={session.id} />
        }
        {
          form == 'resultadodevotacao' 
          && <ResultVoteControl />
        }
        {form == 'discurso' 
        && <SpeechControl />
        }

        {form == 'mensagem' 
          && <MessageControl />
        }

        <button className="hidden bg-green-500 text-white text-center justify-center py-2 rounded-md">
            ATUALIZAR PAINEL
        </button>
      </form>

    </div>
  )
}