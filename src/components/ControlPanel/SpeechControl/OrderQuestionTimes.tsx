import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"


export function OrderQuestionTimes () {
  const { SearchParlSpeech, parlSpeech, GetPainel, dados, PatchSpeechParl,GetIdSpeech, getIdSpeech, setGetIdSpeech } = useContext(AuthContext)
  
  const [timerOn, setTimerOn] = useState(false)
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(1*60)//dados?.data?.speechParl?.orderQuestionTimeInit)

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60
  let orderQuestionTime;
  let orderQuestionTimeInit;
  let orderQuestionTimeInitBoolean;
  useEffect(()=>{
    if(!getIdSpeech){
      GetIdSpeech()
    }
  },[])
  
  useEffect(()=>{
    // if(dados.data?.speechParl?.orderQuestionTime !== timerOn){
    //   setTimerOn(dados.data?.speechParl?.orderQuestionTime)
    //   // setTotalTimeInSeconds(dados.data?.speechParl?.orderQuestionTimeInit)

    // }
    if(dados.data?.speechParl?.orderQuestionTimeInitBoolean){
      
      orderQuestionTimeInitBoolean = false
      setTotalTimeInSeconds(dados.data?.speechParl?.orderQuestionTimeInit)
      PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined, undefined, undefined,undefined, undefined, undefined, orderQuestionTimeInitBoolean )
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
  },[totalTimeInSeconds, timerOn, dados?.data?.speechParl?.orderQuestionTime, dados?.data?.speechParl?.orderQuestionTimeBoolean, dados?.data?.speechParl?.orderQuestionTimeInitBoolean ])
  
  function handleRestartDisc () {
    setTotalTimeInSeconds(1*60)
    orderQuestionTimeInitBoolean = true
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined, undefined, undefined,undefined, undefined, undefined, orderQuestionTimeInitBoolean )
  }
  function handleInitTimerSpeech () {
    
    orderQuestionTime = true
    orderQuestionTimeInit= totalTimeInSeconds
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined,undefined, undefined, undefined, orderQuestionTime)
    setTimeout(() => {
      setTimerOn(true)
    }, 300);
  }
  function handleInitTimerSpeechNot(){
    
    orderQuestionTime = false
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined,undefined, undefined, undefined, orderQuestionTime)
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