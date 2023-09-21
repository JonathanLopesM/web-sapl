import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"
import { SpeechTimes } from "./SpeechTimes"
import { PartTimes } from "./PartTimes"
import { OrderQuestionTimes } from "./OrderQuestionTimes"
import { FinalConsiderationsTimes } from "./FinalConsiderationsTimes"

export function SpeechControl () {
  const { SearchParlSpeech, parlSpeech, GetPainel, dados, PatchSpeechParl,GetIdSpeech, getIdSpeech, setGetIdSpeech, parlamentares, GetVotes,voteResParl } = useContext(AuthContext)
  const [userObj, setUserObj] = useState({})
  const [soundPlay, setSoundPlay] = useState(false)

  useEffect(() => {
    SearchParlSpeech()
    GetIdSpeech()
    GetPainel()
    GetVotes()
    return ()=>{
      setUserObj("selecione")
      autoSetReload()
    }
  },[])


  const parlaActives = parlamentares.filter(parl => {
    if(parl.ativo){
      return parl
    }
  })
  console.log(parlaActives, 'parlamentares')

  function autoSetReload(){
    let user = [{
      ativo:true,
      fotografia: "http://votacao.novace.com.br/novace_logo.png",
      nome_parlamentar:"Usuário",
    }]
    PatchSpeechParl(getIdSpeech, 100, user[0]?.nome_parlamentar, user[0]?.fotografia)
  }

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
      if(userObj == "selecione"){
         user = [{
          ativo:true,
          fotografia: "http://votacao.novace.com.br/novace_logo.png",
          nome_parlamentar:"Usuário",
        }]
    }
      PatchSpeechParl(getIdSpeech, user[0]?.id ? user[0]?.id : 100, user[0]?.nome_parlamentar, user[0]?.fotografia)
    }
  }
  
  const handleSongAlert = () => {
    setSoundPlay(!soundPlay)
    console.log( soundPlay,"efeito sonoro ligado  ")
    PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined , undefined, soundPlay )
  }
  console.log(userObj, "user obj")
return (
  <div className="flex flex-col w-full gap-4">
      <div className="flex w-full justify-between items-end border-b-2 pb-8 gap-2">
          <label
            className="flex flex-col font-bold text-2xl w-[60%] " 
            htmlFor="">
              Orador
              <select 
                onChange={(e)=>setUserObj(e.target.value)}
                className="flex w-full text-lg border px-4 py-1 rounded-md"
              name="" id="">
                <option value="selecione">Selecione...</option>
                {
                parlaActives.map(par => (
                  <option key={par.id} value={par.id}>{par.nome_parlamentar}</option>
                ))}
              </select>
          </label>
          <div className="flex min-w-[350px] gap-2">
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