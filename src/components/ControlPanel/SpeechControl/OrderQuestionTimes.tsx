import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"


export function OrderQuestionTimes () {
  const { SearchParlSpeech, parlSpeech, GetPainel, dados, PatchSpeechParl,GetIdSpeech, getIdSpeech, setGetIdSpeech } = useContext(AuthContext)
  console.log(dados.data, "dados.data no controlTime")
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
  console.log(getIdSpeech, "id speech")
  useEffect(()=>{
    console.log(dados.data?.speechParl?.orderQuestionTimeInitBoolean
      , "total seconds")
    // if(dados.data?.speechParl?.orderQuestionTime !== timerOn){
    //   setTimerOn(dados.data?.speechParl?.orderQuestionTime)
    //   // setTotalTimeInSeconds(dados.data?.speechParl?.orderQuestionTimeInit)

    // }
    if(dados.data?.speechParl?.orderQuestionTimeInitBoolean){
      console.log("set restart seconds")
      orderQuestionTimeInitBoolean = false
      setTotalTimeInSeconds(dados.data?.speechParl?.orderQuestionTimeInit)
      PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined, undefined, undefined,undefined, undefined, undefined, orderQuestionTimeInitBoolean )
      return
    }

    if(totalTimeInSeconds === 0){
      console.log("tempo acabou")
      return 
    } else {
      if(timerOn){
        console.log(totalTimeInSeconds, "total seconds")
      const interval = setInterval(()=>{
        setTotalTimeInSeconds((prev) => prev  - 1)
      },1000)
      return ()=> clearInterval(interval)
    }
    console.log(totalTimeInSeconds, "total dentro do ")
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

  console.log(timerOn, "timerOn 50")

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