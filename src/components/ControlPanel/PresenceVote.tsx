import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function PresenceVoteControl ( ){
  const { SearchMaterias,materias, setMaterias, MatterUpdated } = useContext(AuthContext)
  const [matter, setMatter ] = useState('')


  useEffect(()=>{
    SearchMaterias()
  },[])

  const handleChange = (event) => {
    setMatter(event.target.value)
  }
  const handleSetMatter = (mat) => {

    console.log(mat,' materia de votacao ')
    MatterUpdated(matter)
  }
  console.log(matter, 'cola ahshd')
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
              materias.map(mat=>(
                
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
      <div className="hidden ">
        <div className="grid grid-cols-2 gap-4">
          <div>
            Bernandro Machado  | Não votou
          </div>
          <div>
            Amauri Lantereiro  | Não votou
          </div>
          <div>
            Bernandro Machado  | Não votou
          </div>
        </div>
        <div>

        </div>

      </div>
      <button type="button" onClick={handleSetMatter} className="flex bg-green-500 text-white text-center justify-center py-2 rounded-md">
            ATUALIZAR PAINEL
      </button>
    </div>
  )
}