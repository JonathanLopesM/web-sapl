import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"


export function SpeechTimes () {
  const { SearchParlSpeech, parlSpeech, GetPainel, dados, PatchSpeechParl,GetIdSpeech, getIdSpeech, setGetIdSpeech } = useContext(AuthContext)
  console.log(dados.data, "dados.data no controlTime")
  const [timerOn, setTimerOn] = useState(false)
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(600)//dados?.data?.speechParl?.speechTimeInit)

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60
  let speechTime;
  let speechTimeInit;
  let speechTimeInitBoolean;
  useEffect(()=>{
    if(!getIdSpeech){
      GetIdSpeech()
    }
  },[])
  console.log(getIdSpeech, "id speech")
  useEffect(()=>{
    console.log(dados.data?.speechParl?.speechTimeInitBoolean
      , "total seconds")
    // if(dados.data?.speechParl?.speechTime !== timerOn){
    //   setTimerOn(dados.data?.speechParl?.speechTime)
    //   // setTotalTimeInSeconds(dados.data?.speechParl?.speechTimeInit)

    // }
    if(dados.data?.speechParl?.speechTimeInitBoolean){
      console.log("set restart seconds")
      speechTimeInitBoolean = false
      setTotalTimeInSeconds(dados.data?.speechParl?.speechTimeInit)
      PatchSpeechParl(getIdSpeech, undefined,undefined,undefined, undefined, undefined, undefined, speechTimeInitBoolean )
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
  },[totalTimeInSeconds, timerOn, dados?.data?.speechParl?.speechTime, dados?.data?.speechParl?.speechTimeBoolean, dados?.data?.speechParl?.speechTimeInitBoolean ])
 
  function handleRestartDisc () {
    setTotalTimeInSeconds(10*60)
    speechTimeInitBoolean = true
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined, undefined, undefined, undefined, speechTimeInitBoolean )
  }
  function handleInitTimerSpeech () {
    
    speechTime = true
    speechTimeInit= totalTimeInSeconds
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined, speechTime )
    setTimeout(() => {
      setTimerOn(true)
    }, 300);
  }
  function handleInitTimerSpeechNot(){
    
    speechTime = false
    PatchSpeechParl(getIdSpeech, undefined,undefined,undefined, speechTime)
    setTimerOn(false)
  }

  console.log(timerOn, "timerOn 50")

  return (
    <div className="flex w-full justify-between">

      <div className="flex flex-col">
        <span className="font-bold">
          Cronometro do Discurso
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