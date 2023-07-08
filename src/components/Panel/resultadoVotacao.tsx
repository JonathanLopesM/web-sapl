import React from "react"

export function ResultadoVotacao(){
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col">
        <span>
          Sim: 
        </span>
        <span>
          Não:
        </span>
        <span>
          Abstenções:
        </span>
        <span>
          Presentes: 0
        </span>
        <span>
          Total votos:
        </span>

      </div>
    </div>
  )
}