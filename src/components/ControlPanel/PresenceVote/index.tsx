import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"
import axios from "axios"
import { Register } from "./Register"

export function PresenceVoteControl ({sessionId} ){
  const { SearchMaterias,materias, setMaterias, MatterUpdated, GetVotes, resultVote, voteResParl, setVoteResParl, dayOrder, Matters, matters, setMatters, votes, setVotes, matterComplet, setMatterComplet } = useContext(AuthContext)
  const [matterState, setMatterState ] = useState('')
  
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
    console.log(matterState, "matter onde ")
    setVotes(true)
  }

  console.log(matterState, "matter")
  // console.log(matterArrayDefin, "definitivo")

  console.log(matters, "matters no foco ")
  return (
    <div className="flex flex-col border p-4 py-5 gap-8">
      <div className="flex  w-full items-center">

        <table className="flex flex-col ">
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
                      <td className="flex flex-col border p-2 max-w-[40%]">
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
      </div>
      <Register 
        setMatterState={setMatterState} sessionId={sessionId}
      />
    </div>
  )
}