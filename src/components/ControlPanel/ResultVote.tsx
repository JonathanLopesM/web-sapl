import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function ResultVoteControl () {
  const { GetVotes,resultVote } = useContext(AuthContext)
  useEffect(()=>{
      GetVotes()
  },[])

  return (
    <div className="flex flex-col border p-8">
      <div className="flex font-bold text-3xl">
        <h3 className="flex flex-col">
          Matéria Votada: 
          <span  className="flex ml-4">
            {resultVote?.materia && resultVote?.materia}
          </span>
        </h3>
      </div>
      <div>
        <h6 className="flex text-3xl font-bold">
          Votos
        </h6>
        <div className="flex flex-col ml-4">
          <span>
            SIM: {resultVote?.Yes}
          </span>
          <span>
            NÃO: {resultVote?.Not}
          </span>
          <span>
            Presença: {resultVote?.Presence}
          </span>
          <span>
            Total de Votos: {resultVote?.totalVotes}
          </span>
        </div>
      </div>
    </div>
  )
}