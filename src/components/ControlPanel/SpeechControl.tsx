import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { ControlTimes } from "./ControlTimes"

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
  const { SearchParlSpeech, parlSpeech } = useContext(AuthContext)

  useEffect(()=>{
    SearchParlSpeech()
  },[])
  console.log(parlSpeech, 'parlamentares search')
  const handleSetMessage = () => {
    console.log("reload de parlamentares atulaziados ")
  }

return (
  <div className="flex flex-col w-full gap-4">
      <label
        className="flex flex-col font-bold text-2xl " 
        htmlFor="">
          Orador
          <select 
            className="flex w-full text-lg border px-4 py-1 rounded-md"
           name="" id="">
            <option value="">Selecione...</option>
            {parlSpeech.map(par => (
              <option key={par.id} value={par.__str__}>{par.__str__}</option>
            ))}
          </select>
      </label> 
      <button type="button" onClick={handleSetMessage} className="flex bg-green-500 text-white text-center justify-center py-2 rounded-md">
            ATUALIZAR PAINEL
      </button>
      <ControlTimes />
  </div>
)
}