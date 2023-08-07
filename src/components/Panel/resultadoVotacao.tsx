import React from "react"

export function ResultadoVotacao({dados, materia}){
  console.log(dados, "dados resultado de votacao")
  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex h-14 text-center justify-center items-center ">
        <h4 className="text-2xl font-extrabold">
          {materia}
        </h4>  
      </div>
      <div className="flex flex-col w-[80%] mx-auto text-2xl  mt-20 items-center justify-center">
        <div className="flex flex-col w-[300px] font-bold text-4xl gap-4">
          <span>
            Sim: {dados.data.response.Yes}
          </span>
          <span>
            Não: {dados.data.response.Not}
          </span>
          <span>
            Abstenções: {dados.data.response.NVote}
          </span>
          <span>
            Presentes: {dados.data.response.Presence}
          </span>
          <span>
            Total votos: {dados.data.response.totalVotes}
          </span>
        </div>

      </div>
    </div>
  )
}