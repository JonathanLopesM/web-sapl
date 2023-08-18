import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"

export function FinalConsiderationsPanel ({dados}) {
  const { PatchSpeechParl, getIdSpeech, GetIdSpeech } = useContext(AuthContext)

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(dados?.speechParl?.finalConsiderationsTimeInit) //10*60 10 minutes
  

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60
  let finalConsiderationsTimeInitBoolean;
  useEffect(()=>{
    if(!getIdSpeech){
      GetIdSpeech()
    }
  },[])
  
  useEffect(()=>{
   
    if(dados?.speechParl?.finalConsiderationsTimeInitBoolean){
      
      finalConsiderationsTimeInitBoolean = false
      setTotalTimeInSeconds(dados?.speechParl?.finalConsiderationsTimeInit)
      PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ,finalConsiderationsTimeInitBoolean )
      return
    }

    if(totalTimeInSeconds === 0){
      
      return 
    } else {
      if(dados?.speechParl.finalConsiderationsTime){
        
      const interval = setInterval(()=>{
        setTotalTimeInSeconds((prev) => prev  - 1)
      },1000)
      return ()=> clearInterval(interval)
    }
  }
  },[totalTimeInSeconds, dados?.speechParl?.finalConsiderationsTime, dados?.speechParl?.finalConsiderationsTimeBoolean, dados?.speechParl?.finalConsiderationsTimeInitBoolean ])

  return (
    <div className="flex flex-col">
        <span className="text-xl font-bold">
          Considerações finais
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