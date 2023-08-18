import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"
import axios from "axios"
import { Register } from "./Register"

export function PresenceVoteControl ({sessionId} ){
  const { SearchMaterias,materias, setMaterias, MatterUpdated, GetVotes, resultVote, voteResParl, setVoteResParl, dayOrder, Matters, matters, setMatters, votes, setVotes, matterComplet, setMatterComplet } = useContext(AuthContext)
  const [matterState, setMatterState ] = useState('')
  const [projectsView, setProjectsView] = useState("materias")
  
  const [vote, setVote] = useState("")
  // @ts-ignore
  let url = import.meta.env.VITE_URL_API ;
  useEffect(()=>{
    if(!matters){
      Matters(sessionId)
    }
  },[])

  useEffect(()=>{
    SearchMaterias()
    GetVotes()
  },[matterState])
  useEffect(()=>{
    GetVotes()
  },[votes, matterState])

  const handleSetMatter = () => {
    setProjectsView("register")
    setVotes(true)
  }

  return (
    <div className="flex flex-col border-2  gap-8 overflow-auto max-h-[630px] relative">
      <div className="flex h-14 gap-4  bg-white border w-full absolute  py-2 px-2">
        <button
          type="button" 
          className={`flex border-2  px-4 rounded-md items-center ${projectsView === "materias" && "bg-[#93C5FD] text-white border-blue-400" } text-xl font-bold`}
          onClick={()=>setProjectsView("materias")}
        >
          Materias
        </button>
        {
          votes && 
          <button
          type="button" 
          className={`flex border-2  px-4 rounded-md items-center ${projectsView === "register" && "bg-[#93C5FD] text-white border-blue-400" } text-xl font-bold`}
          onClick={()=>setProjectsView("register")}
        >
          Registro
        </button>
        }
      </div>
      {projectsView === "materias" &&
      <div className="flex  w-full items-center mt-[55px]">
        <table className="flex flex-col overflow-auto max-h-[470px] border">
            <thead className="flex gap-2">
              <td className="w-[60px] lg:w-[80px]">
                Nº 
              </td>
              <td className="flex w-[20%]">
                Matéria
              </td>
              <td className="flex w-[40%]">
                Ementa
              </td>
              <td>
                Resultado
              </td>
            </thead>
                { matters &&
                  matters.map(matter => (
                    <tbody key={matter.id} className="flex  ">
                      <td className="flex  border p-2 w-[80px] items-center justify-center">
                        {matter.numero_ordem}
                      </td>
                      <td className="flex flex-col w-[20%] border p-2 justify-between">
                        {matter.__str__}
                        <a 
                          className="text-blue-500"
                          href={matter.texto_original} 
                          target="_blank">
                            Texto original
                        </a>
                        
                      </td>
                      <td className="flex flex-col border p-2 w-full max-w-[40%]">
                        {matter.ementa}

                        <span className="text-gray-600">
                          observacao: <br />
                          {matter.observacao}
                        </span>
                      </td>
                      <td className="flex  border p-2 w-[30%]">
                      {matter.resultado 
                        ? (matter.resultado) 
                        : (
                        <div className="flex flex-col">
                          <span>Projeto não votado </span>
                        {(matter.id) !== matterState
                          ? <button
                              value={matter.ementa}
                              onClick={(event)=>{
                                setMatterState(matter.id);
                                setMatterComplet(matter);
                                console.log(matterState, "matter dentro da funcao ")
                                MatterUpdated(matter.id);
                               }} 
                              type="button" 
                              className="flex bg-green-500 min-w-[160px] h-10 px-2 text-white text-center justify-center py-2 rounded-md ">
                                  Abrir Votação
                            </button> 
                          : <button
                              value={matter.id}
                              onClick={handleSetMatter} 
                              type="button" 
                              className="flex bg-green-500 min-w-[160px] h-10 px-2 text-white text-center justify-center py-2 rounded-md ">
                                  Registrar
                            </button>
                           }
                          </div>
                          ) 
                      }
                      </td>
                </tbody>
                  )).reverse()
                }
          </table>
      </div>}
      {projectsView === "register" && <Register 
        setMatterState={setMatterState} sessionId={sessionId} setProjectsView={setProjectsView}
      />}
    </div>
  )
}