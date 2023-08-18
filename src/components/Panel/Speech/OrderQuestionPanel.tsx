import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"

export function OrderQuestionPanel ({dados}) {
  const { PatchSpeechParl, getIdSpeech, GetIdSpeech } = useContext(AuthContext)

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(dados?.speechParl?.orderQuestionTimeInit) //10*60 10 minutes

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60
  let orderQuestionTimeInitBoolean;
  useEffect(()=>{
    if(!getIdSpeech){
      GetIdSpeech()
    }
  },[])
  useEffect(()=>{

    
    if(dados?.speechParl?.orderQuestionTimeInitBoolean){
  
      orderQuestionTimeInitBoolean = false
      setTotalTimeInSeconds(dados?.speechParl?.orderQuestionTimeInit)
      PatchSpeechParl(getIdSpeech, undefined,undefined,undefined,undefined,undefined, undefined, undefined, undefined, undefined,undefined, undefined, undefined, orderQuestionTimeInitBoolean )
      return
    }

    if(totalTimeInSeconds === 0){
  
      return 
    } else {
      if(dados?.speechParl.orderQuestionTime){

      const interval = setInterval(()=>{
        setTotalTimeInSeconds((prev) => prev  - 1)
      },1000)
      return ()=> clearInterval(interval)
    }
  }
  },[totalTimeInSeconds, dados?.speechParl?.orderQuestionTime, dados?.speechParl?.orderQuestionTimeBoolean, dados?.speechParl?.orderQuestionTimeInitBoolean ])


  return (
    <div className="flex flex-col">
        <span className="text-xl font-bold">
          Questão de Ordem
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