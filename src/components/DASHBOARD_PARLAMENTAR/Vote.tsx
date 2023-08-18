import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { ArrowPathIcon } from '@heroicons/react/24/outline'

export function Vote ({page, setPage}) {
  const {dados, GetDadosPainel, ParlVote, userParl} = useContext(AuthContext)
  const [vote, setVote] = useState("")

  useEffect(()=>{
    GetDadosPainel()
  },[])
  useEffect(()=>{
    if(dados){
      if(!dados?.data?.estado){
        setTimeout(()=>{
          setPage("presence")
        },3000)
      }
      if(!dados?.data?.materia){
        setTimeout(()=>{
          setPage("presence")
        },3000)
      }
    }
  },[])
  console.log(userParl, "parl user ")
  function handleConfirmVote(){
    console.log("confirm vote")
    ParlVote (userParl._id, vote)
    setPage("presence")
  }
  return (
    <div className="flex flex-col justify-center items-center max-w-[900px]">
      <div className="flex w-full justify-center border-y-2">
        { dados && dados?.data?.estado 
          ? <h3 className="flex text-2xl font-bold text-green-500">
            SESSAO AUTORIZADA
          </h3>
          : <h3 className="flex text-2xl font-bold text-red-500">
          SESSAO NÃO AUTORIZADA
        </h3>
        }
      </div>
      <div className="flex w-full ">
        { dados && dados?.data?.materia 
        ? 
        <div className="flex flex-col w-full mt-10 ">
          <div className="flex flex-col w-[90%] justify-center items-center text-center mx-auto gap-2">
            <h5 className="flex text-2xl font-bold">
              {dados?.data.materia.__str__}
            </h5>
            <p className="flex text-lg">
              {dados?.data.materia.ementa}
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="border-b-2 mb-2 ">
              <h5 className="flex text-2xl font-bold px-5 ">
                Votação
              </h5>
            </div>
            <div className="flex flex-col bg-gray-800 h-[200px] rounded-lg mx-1 p-2 justify-between pt-5 items-center">
              <div className="flex justify-between w-full max-w-[400px]">
                <button onClick={()=>setVote("Abster")} type="button" className={`flex w-[100px] h-[80px] bg-white ${vote === "Abster" ? "opacity-100" : "opacity-40"} rounded-md items-center justify-center font-bold text-xl`} >
                  ABSTER
                </button>
                <button onClick={()=>setVote("Não")} type="button" className={`flex w-[100px] h-[80px] bg-red-400 ${vote === "Não" ? "opacity-100" : "opacity-40"} rounded-md items-center justify-center font-bold text-xl`} >
                  NÃO 
                </button>
                <button onClick={()=>setVote("Sim")} type="button" className={`flex w-[100px] h-[80px] bg-green-400 ${vote === "Sim" ? "opacity-100" : "opacity-40"} rounded-md items-center justify-center font-bold text-xl`} >
                  SIM
                </button>
              </div>
                {!!vote 
                ? <button onClick={handleConfirmVote} type="button"  className={`flex w-[200px] ${!!vote ? "opacity-100 bg-green-500 hover:bg-green-400" : "opacity-40 bg-white"} rounded-lg font-bold justify-center mx-auto text-xl`}>
                    CONFIRME
                  </button>
                : <span  className={`flex w-[200px] cursor-default ${!!vote ? "opacity-100 bg-green-500" : "opacity-40 bg-white"} rounded-lg font-bold justify-center mx-auto text-xl`}>
                    CONFIRME
                  </span>
                }
            </div>
            
          </div>

        </div>
        :
        <div className="flex flex-col w-full justify-center items-center">
          <span className="mt-20 mx-auto sm:text-2xl mb-10">
            Não há Materia em votação, volte mais tarde!
          </span>
          <ArrowPathIcon className="w-5 animate-spin " />
          <span>Redirecionando você...</span>
        </div>
        }
      </div>
    </div>
  )
}