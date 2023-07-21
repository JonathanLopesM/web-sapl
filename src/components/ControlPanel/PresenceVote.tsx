import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function PresenceVoteControl ({sessionId} ){
  const { SearchMaterias,materias, setMaterias, MatterUpdated, GetVotes, resultVote, dayOrder } = useContext(AuthContext)
  const [matter, setMatter ] = useState('')


  useEffect(()=>{
    SearchMaterias()
    GetVotes()
  },[])

  const handleChange = (event) => {
    setMatter(event.target.value)
  }
  const handleSetMatter = (mat) => {

    console.log(mat,' materia de votacao ')
    MatterUpdated(matter)
  }
  console.log(sessionId, 'sessionId')
  console.log(materias, "materias")
  console.log(dayOrder, "day order antes do filter")
  const matterSession = materias.filter((mate)=> {
    for(let o =0; o <= dayOrder.length; o++ ){
      console.log(dayOrder[o].materia, "dentro do for")
      if(mate.id === dayOrder[o].materia){
        return mate
      }
      return;
    }
  })

  console.log(matterSession, 'cola ahshd')
  return (
    <div className="flex flex-col border p-4 py-5 gap-8">
      <div className="flex flex-col w-full">
        <label className="flex  flex-col p-2 rounded-lg text-lg font-semibold" htmlFor="">
          Matéria em votação
          <select 
            value={matter}
            onChange={handleChange}
          
            className="flex w-full text-xl  font-bold border px-4 p-2 rounded-xl overflow-auto " 
            name="" id="">
              {
                matter === '' ? 
                <option value="">Selecione...</option>
                :
                <option value="">Limpar...</option>
              }
            {
              matterSession.map(mat=>(
                
                <option 
                  key={mat.id} 
                  className="flex max-h-[100px] text-base font-thin" 
                  value={`${mat.__str__} - ${mat.ementa}`}>
                  {mat.__str__} - {mat.ementa}
                </option>
              ))
            }
          </select>
        </label>
      </div>
      <button type="button" onClick={handleSetMatter} className="flex bg-green-500 text-white text-center justify-center py-2 rounded-md">
            ATUALIZAR PAINEL
      </button>

      <div className="flex flex-col border p-8">
      <div className="flex font-bold text-3xl">
        <h3 className="flex flex-col">
          Matéria Votada: 
          <span  className="flex ml-4">
            {resultVote?.materia && resultVote?.materia}
          </span>
        </h3>
      </div>
      <div>
        <h6 className="flex text-3xl font-bold">
          Votos
        </h6>
        <div className="flex flex-col ml-4">
          <span>
            SIM: {resultVote?.Yes}
          </span>
          <span>
            NÃO: {resultVote?.Not}
          </span>
          <span>
            Presença: {resultVote?.Presence}
          </span>
          <span>
            Total de Votos: {resultVote?.totalVotes}
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}