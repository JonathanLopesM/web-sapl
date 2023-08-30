import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Speech } from "./Speech";
import { PartPanel } from "./PartPanel";
import { OrderQuestionTimes } from "../../ControlPanel/SpeechControl/OrderQuestionTimes";
import { OrderQuestionPanel } from "./OrderQuestionPanel";
import { FinalConsiderationsPanel } from "./FinalConsiderationsPanel";
import alarme from "../../../assets/EfeitoSonoroCampainha.mp3";

export function SpeechPanel({dados}){
  console.log(dados?.speechParl?.soundPlay, " daddos para pegar o true do som")
  
  const [audio] = useState(new Audio(alarme))
  useEffect(()=>{
    dados?.speechParl?.soundPlay ? audio.play() : audio.pause();
  },[ dados?.speechParl?.soundPlay ])
  return (
    <div className="flex flex-col w-full ">
      <h5 className="flex w-full h-10 sm:h-20 text-center mx-auto justify-center items-center bg-white text-black text-xl sm:text-6xl font-extrabold p-4">
        Discurso!
      </h5>
      <div className="flex flex-col w-[90%] h-screen sm:h-full mx-auto gap-4 mt-2 ">
        <div className="flex flex-col sm:flex-row sm:gap-[100px] justify-center items-center  ">
          <div className="flex flex-col gap-2  items-center ">
            <div className="flex bg-white rounded-full relative overflow-hidden max-h-[400px] w-[200px] 2xl:w-[400px] items-center justify-center">
              <img className="flex w-[170px] h-[200px]  2xl:w-[80%] 2xl:h-[80%] " src={dados?.speechParl?.fotografia} alt="" />
            </div>
            <div className="flex flex-col justify-center text-start">
              <h2 className="font-bold text-4xl">
                {dados?.speechParl?.name}
              </h2>
              <p >
                Em discurso
              </p>

            </div>
          </div>
          <div className="flex justify-center w-full max-w-[50%] md:max-w-[30%] px-2  ">
            <Speech dados={dados} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:max-w-[80%] mx-auto justify-between sm:mt-44 sm:items-center">

          <PartPanel dados={dados} />
          <OrderQuestionPanel dados={dados} />
          <FinalConsiderationsPanel dados={dados} />
        </div>
        
      </div>
    </div>
  )
}