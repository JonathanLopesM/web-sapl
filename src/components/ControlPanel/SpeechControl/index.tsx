import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"
import { SpeechTimes } from "./SpeechTimes"
import { PartTimes } from "./PartTimes"
import { OrderQuestionTimes } from "./OrderQuestionTimes"
import { FinalConsiderationsTimes } from "./FinalConsiderationsTimes"

export function SpeechControl () {

  const parlamentares = [
      {
        id:0,
        name: '- - - - - - - '
      },
      {
        id:1,
        name: 'CASÉ'
      },
      {
        id:2,
        name: 'CRISTINA MAGNO'
      },
      {
        id:3,
        name: 'DANIEL MACIEL'
      },
      {
        id:4,
        name: 'DR EDUARDO'
      },
      {
        id:5,
        name: 'FURLANI'
      },
      {
        id:6,
        name: 'GUSTAVO GOMES'
      },
      {
        id:7,
        name: 'JOÃOZINHO DO AR'
      },
      {
        id:8,
        name: 'LUCIANA ALVES'
      },
      {
        id:9,
        name: 'MAMEDE'
      },
      {
        id:10,
        name: 'MARCEL CASTRO'
      },
      {
        id:11,
        name: 'MARQUINHO'
      },
  
  
    ]
  const { SearchParlSpeech, parlSpeech, GetPainel, dados, PatchSpeechParl,GetIdSpeech, getIdSpeech, setGetIdSpeech } = useContext(AuthContext)
  const [userObj, setUserObj] = useState({})
  const [soundPlay, setSoundPlay] = useState(false)

  useEffect(()=>{
    SearchParlSpeech()
    GetIdSpeech()
    GetPainel()
  },[])

  function handleSetParl(){
    let user;
    if(userObj){
      user = parlSpeech.filter(parl => {
        console.log(parl.id)
        if(parl.id == userObj){
          return parl
        }
        return
      })
      PatchSpeechParl(getIdSpeech, user[0].id, user[0].nome_parlamentar, user[0].fotografia)
    }
  }
  
  const handleSongAlert = () => {
    setSoundPlay(!soundPlay)
    console.log( soundPlay,"efeito sonoro ligado  ")
    PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined , undefined, soundPlay )
  }

return (
  <div className="flex flex-col w-full gap-4">
      <div className="flex w-full justify-between items-end border-b-2 pb-8">
          <label
            className="flex flex-col font-bold text-2xl w-[60%] " 
            htmlFor="">
              Orador
              <select 
                onChange={(e)=>setUserObj(e.target.value)}
                className="flex w-full text-lg border px-4 py-1 rounded-md"
              name="" id="">
                <option value="">Selecione...</option>
                {parlSpeech.map(par => (
                  <option key={par.id} value={par.id}>{par.__str__}</option>
                ))}
              </select>
          </label>
          <button type="button" onClick={handleSetParl} 
            className="flex h-10 px-4 bg-green-500 hover:bg-green-300 text-white text-center justify-center py-2 rounded-md">
                ATUALIZAR PAINEL
          </button>
          {
            !soundPlay ? 
            <button type="button" onClick={handleSongAlert}
              className="flex w-[165px] h-10 px-4 bg-green-500 hover:bg-green-300 text-white text-center justify-center py-2 rounded-md">
                Play Sinal Sonoro
            </button> 
            : <button type="button" onClick={handleSongAlert}
              className="flex w-[165px] h-10 px-4 bg-green-500 hover:bg-green-300 text-white text-center justify-center py-2 rounded-md">
                Stop Sinal Sonoro
            </button> 
          }
      </div>
      <div className="flex ">
        <SpeechTimes />
        <PartTimes />
      </div>
      <div className="flex ">
        <OrderQuestionTimes />
        <FinalConsiderationsTimes />
      </div>
  </div>
)
}