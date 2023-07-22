import React, { useEffect, useState } from "react"

export function Speech () {
  const [timerOn, setTimerOn] = useState(false)
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(3) //10*60 10 minutes

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = totalTimeInSeconds % 60

  useEffect(()=>{
    if(totalTimeInSeconds === 0){
      console.log("tempo acabou")
      return 
    } else {
      if(timerOn){
      const interval = setInterval(()=>{
        setTotalTimeInSeconds((prev) => prev  - 1)
      },1000)
      return ()=> clearInterval(interval)
    }
  }
  },[totalTimeInSeconds, timerOn])

  function handleRestartDisc () {
    setTotalTimeInSeconds(3)
  }

  return (
    <div className="flex flex-col w-full">
      <h5 className="flex w-full text-center mx-auto justify-center items-center bg-white text-black text-6xl font-extrabold p-4">
        Discurso!
      </h5>
      <div className="flex flex-col w-[80%] mx-auto gap-4 mt-2">
        <div className="flex gap-4">
          <div className="flex bg-white rounded-full relative overflow-hidden">
            <img className="flex py-5  " src="/novace_logo.png" alt="" />
          </div>
          <div className="flex flex-col justify-center text-start">
            <h2 className="font-bold text-4xl">
              nome do parlamentar
            </h2>
            <p >
              Em discurso
            </p>

          </div>
        </div>
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
      </div>
    </div>
  )
}