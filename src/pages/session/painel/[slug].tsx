import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"
import { useParams } from "react-router-dom"
import { PainelParlamentares } from "../../../components/painel/parlamentares"
import { ResultadoVotacao } from "../../../components/painel/resultadoVotacao"

export function Painel({sessions}){
  const {id, nome} = useParams()
  console.log(nome,id , 'nome')
  
  const { GetSessions, painelLayout, setPainelLayout, GetPainel, dadosPainel, setDadosPainel } = useContext(AuthContext)
  console.log(dadosPainel, 'dados do painel')

  useEffect(()=>{
    GetPainel({id})
  },[])
    // useEffect(()=>{
    //   console.log('useEffect')
    //   if(!sessions){
    //     console.log(sessions, 'sessions no if')
    //     GetSessions('2023','','', '')

    //   }
    // },[!sessions])
    console.log(sessions, 'sessions depois do effect')
    let session = '' as any
    let ses = JSON.parse(localStorage.getItem('sessions'))
    console.log(ses, 'sessons do local Storage')
    if(ses){
      session = ses.filter(ses => {
        if(ses.id == id){
          return ses
        }
      })
    }
    
    if(sessions){
      session = sessions.filter(ses => {
        if(ses.id == id){
          return ses
        }
      })
    }

  return (
    <>
    {session &&
      <div className="flex flex-col text-white h-screen w-full bg-gray-900 " >
        <header className="flex w-full h-44 border-b justify-center text-white gap-4 my-4 pb-4">
            <div className="flex w-[80%] justify-between items-center ">
              <div className='flex p-6 px-8 bg-white rounded-full'>
                <img className="w-24 h-28" src="/Brasao_barra_Mansa.jpeg" alt="" />
              </div>
              <h1 className="flex text-4xl font-bold">
                Câmara Municipal de Barra Mansa
              </h1>
            </div>
        </header>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <h3 className="border p-4 text-3xl">
              {session[0].__str__}
            </h3>
            
              {session.iniciada && <span className="flex bg-white text-green-500 justify-center text-center items-center font-extrabold px-4 text-3xl">SESSÃO AUTORIZADA </span>}
              {!session.iniciada && <span className="flex bg-white text-red-500 justify-center text-center items-center font-extrabold px-4 text-3xl">SESSÃO AUTORIZADA </span>}
            
          </div>
          <div>
            {/* {painelLayout == 'parlamentares' &&<PainelParlamentares />} */}
            {painelLayout == 'resultadovotacao' && <ResultadoVotacao /> }

          </div>
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