import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"


export function PartTimes () {
  const { SearchParlSpeech, parlSpeech, GetPainel, dados, PatchSpeechParl,GetIdSpeech, getIdSpeech, setGetIdSpeech } = useContext(AuthContext)
  
  const [timerOn, setTimerOn] = useState(false)
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(2*60)//dados?.data?.speechParl?.partTimeInit)

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60
  let partTime;
  let partTimeInit;
  let partTimeInitBoolean;
  useEffect(()=>{
    if(!getIdSpeech){
      GetIdSpeech()
    }
  },[])

  useEffect(()=>{
    // if(dados.data?.speechParl?.partTime !== timerOn){
    //   setTimerOn(dados.data?.speechParl?.partTime)
    //   // setTotalTimeInSeconds(dados.data?.speechParl?.partTimeInit)
    // }
    if(dados.data?.speechParl?.partTimeInitBoolean){
      partTimeInitBoolean = false
      setTotalTimeInSeconds(dados.data?.speechParl?.partTimeInit)
      PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined, undefined, undefined, partTimeInitBoolean )
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
  },[totalTimeInSeconds, timerOn, dados?.data?.speechParl?.partTime, dados?.data?.speechParl?.partTimeBoolean, dados?.data?.speechParl?.partTimeInitBoolean ])
  
  function handleRestartDisc () {
    setTotalTimeInSeconds(2*60)
    partTimeInitBoolean = true
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined, undefined, undefined, partTimeInitBoolean )
  }
  function handleInitTimerSpeech () {
    partTime = true
    partTimeInit= totalTimeInSeconds
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined, partTime)
    setTimeout(() => {
      setTimerOn(true)
    }, 300);
  }
  function handleInitTimerSpeechNot(){
    partTime = false
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined, partTime)
    setTimerOn(false)
  }

  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <span className="font-bold">
          Cronometro do Aparte
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