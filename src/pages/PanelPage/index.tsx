import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { useParams } from "react-router-dom"
import { PainelParlamentares } from "../../components/Panel/parlamentares"
import { ResultadoVotacao } from "../../components/Panel/resultadoVotacao"

export function Painel({sessions}){
  const {id, nome} = useParams()
  console.log(nome,id , 'nome')
  
  const { GetSessions, painelLayout, setPainelLayout, GetPainel, dadosPainel, setDadosPainel } = useContext(AuthContext)
  console.log(dadosPainel, 'dados do painel')

  useEffect(()=>{
    GetPainel({id})
  },[])
   


  return (
    <>
    {
      <div className="flex flex-col text-white h-screen w-full bg-gray-900 " >
        <header className="flex w-full h-14 border-b justify-center text-white gap-4 my-4 pb-4">
            <div className="flex w-[80%] justify-between items-center ">
              <div className='flex py-4 px-2 bg-white rounded-full'>
                <img 
                  className="w-10 h-6" 
                  src="/novace_logo.png" 
                  alt="" 
                  />
              </div>
              <h1 className="flex text-4xl font-bold">
                Painel de votação
              </h1>
            </div>
        </header>
        <div className="flex flex-col">
          <div className="flex justify-center">
              {/* { <h3 className="flex bg-white text-green-500 justify-center text-center items-center font-extrabold px-8 p-2 text-3xl">SESSÃO AUTORIZADA </h3>} */}
              {<h3 className="flex bg-white text-red-500 justify-center text-center items-center font-extrabold px-8 p-2 text-3xl">SESSÃO NÃO AUTORIZADA </h3>}
          </div>
            {<PainelParlamentares />}
            {/* {<ResultadoVotacao /> } */}
        </div>
        <div className="flex bg-gray-200 mt-auto justify-center  py-5">
          <div className="flex justify-between sm:w-[80%]">
            <h4 className=" text-green-500 text-3xl font-bold ">
              12 Presentes
            </h4>
            <h4 className=" text-green-500 text-3xl font-bold ">
              100.00% PRESENÇA PARLAMENTAR
            </h4>
          </div>
        </div>

      </div>
    }
    </>
  )
}