import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"

export function PartPanel ({dados}) {
  const { PatchSpeechParl, getIdSpeech, GetIdSpeech } = useContext(AuthContext)

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(dados?.speechParl?.partTimeInit) //10*60 10 minutes
  

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60
  let partTimeInitBoolean;
  useEffect(()=>{
    if(!getIdSpeech){
      GetIdSpeech()
    }
  },[])
  
  useEffect(()=>{
    if(dados?.speechParl?.partTimeInitBoolean){

      partTimeInitBoolean = false
      setTotalTimeInSeconds(dados?.speechParl?.partTimeInit)
      PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, partTimeInitBoolean )
      return
    }

    if(totalTimeInSeconds === 0){
      
      return 
    } else {
      if(dados?.speechParl.partTime){
        
      const interval = setInterval(()=>{
        setTotalTimeInSeconds((prev) => prev  - 1)
      },1000)
      return ()=> clearInterval(interval)
    }
  }
  },[totalTimeInSeconds, dados?.speechParl?.partTime, dados?.speechParl?.partTimeBoolean, dados?.speechParl?.partTimeInitBoolean ])

  return (
    <div className="flex flex-col">
        <span className="text-xl font-bold">
          Cronômetro do Aparte
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