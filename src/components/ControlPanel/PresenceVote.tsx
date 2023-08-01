import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function PresenceVoteControl ({sessionId} ){
  const { SearchMaterias,materias, setMaterias, MatterUpdated, GetVotes, resultVote, dayOrder } = useContext(AuthContext)
  const [matter, setMatter ] = useState('')


  useEffect(()=>{
    SearchMaterias()
    GetVotes()
  },[matter])

  const handleChange = (event) => {
    setMatter(event.target.value)
  }
  const handleSetMatter = (mat) => {
    MatterUpdated(matter)
  }
  let matterSession= materias.filter(mate=> {
    return dayOrder.some(order => mate.id == order.materia && !order.resultado )
    // for(let o =0; o < dayOrder.length; o++ ){
    //   if(dayOrder[o].materia === mate.id ){
    //       return mate
    //   }
    // }
  })
  return (
    <div className="flex flex-col border p-4 py-5 gap-8">
      <div className="flex  w-full items-center">
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
        <button type="button" onClick={handleSetMatter} 
          className="flex bg-green-500 min-w-[160px] h-10 px-2 text-white text-center justify-center py-2 rounded-md mt-7">
              ATUALIZAR PAINEL
        </button>
      </div>
      

      <div className="flex flex-col border p-8">
        <div className="flex font-bold text-xl">
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