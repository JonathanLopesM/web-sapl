import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"

export function FinalConsiderationsTimes () {
  const { SearchParlSpeech, parlSpeech, GetPainel, dados, PatchSpeechParl,GetIdSpeech, getIdSpeech, setGetIdSpeech } = useContext(AuthContext)
  const [timerOn, setTimerOn] = useState(false)
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(5*60)//dados?.data?.speechParl?.finalConsiderationsTimeInit)
  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60
  let finalConsiderationsTime;
  let finalConsiderationsTimeInit;
  let finalConsiderationsTimeInitBoolean;
  useEffect(()=>{
    if(!getIdSpeech){
      GetIdSpeech()
    }
  },[])
  
  useEffect(()=>{
    if(dados.data?.speechParl?.finalConsiderationsTimeInitBoolean){
      finalConsiderationsTimeInitBoolean = false
      setTotalTimeInSeconds(dados.data?.speechParl?.finalConsiderationsTimeInit)
      PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ,finalConsiderationsTimeInitBoolean )
      return
    }
    if(totalTimeInSeconds === 0){
      return 
    } else {
      if(timerOn){
      const interval = setInterval(()=>{
        setTotalTimeInSeconds((prev) => prev  - 1)
      },1000)
      return ()=> clearInterval(interval)
    }
    
  }
  },[totalTimeInSeconds, timerOn, dados?.data?.speechParl?.finalConsiderationsTime, dados?.data?.speechParl?.finalConsiderationsTimeBoolean, dados?.data?.speechParl?.finalConsiderationsTimeInitBoolean ])
  
  function handleRestartDisc () {
    setTotalTimeInSeconds(5*60)
    finalConsiderationsTimeInitBoolean = true
    PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ,finalConsiderationsTimeInitBoolean )
  }
  function handleInitTimerSpeech () {
    
    finalConsiderationsTime = true
    finalConsiderationsTimeInit= totalTimeInSeconds
    PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,finalConsiderationsTime )
    setTimeout(() => {
      setTimerOn(true)
    }, 300);
  }
  function handleInitTimerSpeechNot(){
    
    finalConsiderationsTime = false
    PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,finalConsiderationsTime )
    setTimerOn(false)
  }

  

  return (
    <div className="flex w-full justify-between">

      <div className="flex flex-col">
        <span className="font-bold">
          Cronometro do Questões de Ordem
        </span>
        <div className="my-2">
          <h3 className="text-2xl">
            <span>{minutes.toString().padStart(2, "0")}</span>
            : 
            <span>{seconds.toString().padStart(2, "0")}</span>
          </h3>
        </div>
        <div className="flex gap-4">
          {
            timerOn === false ? 
            <span onClick={handleInitTimerSpeech} className="flex cursor-pointer border px-4 rounded bg-green-200 hover:bg-green-400">
            iniciar
          </span>
          :
          <span onClick={handleInitTimerSpeechNot} className="flex cursor-pointer border px-4 rounded bg-green-200 hover:bg-green-400">
            pausar
          </span>
          }
          <span onClick={handleRestartDisc} className="flex cursor-pointer border px-4 rounded bg-green-200 hover:bg-green-400">
            reiniciar
          </span>
        </div>
      </div>
      

    </div>
  )
}