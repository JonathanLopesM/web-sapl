import React from "react"

export function WelcomeToPeapleHome(dados){
  console.log(dados.dados, 'dados no welcome')
  return (
    <div className="flex flex-col w-full text-center">
      <h2 className="text-4xl font-bold p-4 px-4">
        BEM VINDO A CASA DO POVO
      </h2>
      {dados.dados.estado 
      ? <h3 className="flex bg-white text-green-500 justify-center text-center items-center font-extrabold px-8 p-2 text-3xl"> 
          SESSÃO AUTORIZADA 
        </h3>
      : <h3 className="flex bg-white text-red-500 justify-center text-center items-center font-extrabold px-8 p-2 text-3xl">
          SESSÃO NÃO AUTORIZADA 
        </h3>
        }
    </div>
  )
}