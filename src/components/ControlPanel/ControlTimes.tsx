import React, { useEffect, useState } from "react"


export function ControlTimes () {

  const [timerOn, setTimerOn] = useState(false)
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(10*60)

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60

  useEffect(()=>{
    if(totalTimeInSeconds === 0){
      alert("tempo acabou")
    }  
    if(timerOn){
      setTimeout(()=>{
        setTotalTimeInSeconds(totalTimeInSeconds -1)
      },1000)
    }
  },[totalTimeInSeconds, timerOn])

  function handleRestartDisc () {
    setTotalTimeInSeconds(10*60)
  }

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
            !timerOn ? 
            <span onClick={()=>setTimerOn(true)} className="flex cursor-pointer border px-4 rounded bg-green-200">
            iniciar
          </span>
          :
          <span onClick={()=>setTimerOn(false)} className="flex cursor-pointer border px-4 rounded bg-green-200">
            pausar
          </span>
          }
          <span onClick={handleRestartDisc} className="flex cursor-pointer border px-4 rounded bg-green-200">
            reiniciar
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">
          Cronometro do Aparte
        </span>
        <div className="my-2">
          <h3 className="text-2xl">
            00:00:00
          </h3>
        </div>
        <div className="flex gap-4">
          <button className="flex cursor-pointer border px-4 rounded bg-green-200">
            iniciar
          </button>
          <span className="flex cursor-pointer border px-4 rounded bg-green-200">
            reiniciar
          </span>
        </div>
      </div>

    </div>
  )
}