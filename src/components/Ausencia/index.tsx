import React, { useState } from "react"
import ModalAddJustify from "./ModalAddJustify"

export function Ausencia (){
  const [addJusti, setAddJusti] = useState(false)
  return (
    <div className="flex flex-col">
      {addJusti && <ModalAddJustify open={addJusti} setOpen={setAddJusti} />}
      <h2 className=" text-2xl font-semibold">
        Justificativas de Ausências 
        <span className="text-gray-400 ml-2 font-normal">
          (1ª Sessão Ordinária de 2023 da 3ª Sessão Legislativa da 50ª Legislatura)
        </span>
      </h2>
      <div className="flex flex-col">
        <div className="flex w-full justify-end">
          <button onClick={()=>setAddJusti(true)} className="flex border px-4 py-2 rounded-md hover:bg-gray-300">
            Adicionar Justificativa de Ausência
          </button>
        </div>
        <div>
          <span>
            nenhum registro encontrado
          </span>
        </div>

      </div>

    </div>
  )
}