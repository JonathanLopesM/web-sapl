import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"

export function Speech ({dados}) {
  const { PatchSpeechParl, getIdSpeech, GetIdSpeech } = useContext(AuthContext)

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(dados?.speechParl?.speechTimeInit) //10*60 10 minutes


  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60
  let speechTimeInitBoolean;
  useEffect(()=>{
    if(!getIdSpeech){
      GetIdSpeech()
    }
  },[])
  useEffect(()=>{

    // if(dados?.speechParl?.speechTime !== timerOn){
    //   setTimerOn(dados?.speechParl?.speechTime)
    //   // setTotalTimeInSeconds(dados?.speechParl?.speechTimeInit)

    // }
    if(dados?.speechParl?.speechTimeInitBoolean){
  
      speechTimeInitBoolean = false
      setTotalTimeInSeconds(dados?.speechParl?.speechTimeInit)
      PatchSpeechParl(getIdSpeech, undefined,undefined,undefined, undefined, undefined, undefined, speechTimeInitBoolean )
      return
    }

    if(totalTimeInSeconds === 0){
  
      return 
    } else {
      if(dados?.speechParl.speechTime){
    
      const interval = setInterval(()=>{
        setTotalTimeInSeconds((prev) => prev  - 1)
      },1000)
      return ()=> clearInterval(interval)
    }
  }
  },[totalTimeInSeconds, dados?.speechParl?.speechTime, dados?.speechParl?.speechTimeBoolean, dados?.speechParl?.speechTimeInitBoolean ])

  return (
    <div className="flex flex-col">
        <span className="text-xl font-bold">
          Cronometro do Discurso
        </span>
        <div className="my-2">
          <h3 className="text-6xl">
            <span>{minutes.toString().padStart(2, "0")}</span>
            : 
            <span>{seconds.toString().padStart(2, "0")}</span>
          </h3>
        </div>
        
    </div>
  )
}