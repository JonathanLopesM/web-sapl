import React, { useContext, useEffect, useState } from "react"
import { ChevronDownIcon, ChevronUpIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthProvider"

export function DashParl ({page, setPage}) {
  const {presence, GetVotePresence, GetDadosPainel,PresenceId} = useContext(AuthContext)
  const [presenceState, setPresenceState] = useState(false)
  const [select, setSelect] = useState(false)
  const navigation = useNavigate()
  useEffect(()=>{
    GetVotePresence()
  },[select, presenceState])
  
  function handleSetPresenceState () {
    setSelect(!select)
    setPresenceState(!presenceState)
    PresenceId(!presence)
    
    setTimeout(()=>{
      GetVotePresence()
    }, 1000)

  }
  function handleEnterSession (){
    GetDadosPainel()
    setPage("vote")
  }

  return (
    <div className="flex flex-col w-[90%] mx-auto max-w-[900px]">

      <div className="flex flex-col w-full relative">
        <div onClick={()=>setPresenceState(!presenceState)} className="flex w-full border-2 border-[#81B7FB] cursor-pointer rounded-lg justify-between hover:opacity-80">
          {!presenceState 
            ? <ChevronDownIcon className=" pl-2 w-8" color="#81B7FB" />
            : <ChevronUpIcon className=" pl-2 w-8" color="#81B7FB" />
          }
          <p className="flex text-xl px-5 py-2 font-bold text-blue-400">
            SUA PRESENÇA: 
          </p>
          {
            presence ? 
            <span className="flex w-[110px] rounded-r-md bg-green-400 text-center items-center justify-center font-bold text-white text-xl   ">
              Presente
            </span> 
          : <span className="flex w-[110px] rounded-r-md bg-red-400 text-center items-center justify-center font-bold text-white text-xl   ">
                Ausente
            </span>
          }
        </div>
        {presenceState
        && <div className="flex absolute flex-col border border-black text-center justify-center items-center rounded-md mt-14 w-full h-[120px] mx-auto text-xl gap-2 py-2 bg-white">
            Marque a sua presença na câmara
            <button onClick={handleSetPresenceState} className="flex w-[200px] bg-blue-300 text-white text-xl font-bold justify-center rounded-md py-2">
              PRESENÇA
            </button> 
          </div>}
      </div>

      {presence && <div onClick={handleEnterSession} className="flex h-[100px] border-2 border-[#81B7FB] rounded-md mt-10 p-[2px] cursor-pointer">
        <div className="flex bg-[#81B7FB] rounded-l-md">
            <ChevronDoubleRightIcon className="w-10" color="white" />
        </div>
        <div className="flex font-bold justify-center text-center w-full items-center">
          <span className="text-2xl text-[#81B7FB] ">
            Entrar na Sessão
          </span>
        </div>
      </div>}
    </div>
  )
}