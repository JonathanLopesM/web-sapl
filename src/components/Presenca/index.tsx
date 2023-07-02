import React, { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function Presenca(){

  const { parlamentares } = useContext(AuthContext)

  console.log(parlamentares)
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="flex text-2xl font-semibold">
        Presença 
      <span className="flex text-gray-400 ml-2">
        (1ª Sessão Ordinária de 2023 da 3ª Sessão Legislativa da 50ª Legislatura)
      </span>
      </h1>
      <div className="flex flex-col gap-4">
        
        <label htmlFor="exibirtodos" className="flex gap-2">
          <input type="checkbox" name="exibirtodos" id="exibirtodos" />
          Marcar/Desmarcar Todos
        </label>
        <label htmlFor="exibirtodos" className="flex gap-2">
          <input type="checkbox" name="exibirtodos" id="exibirtodos" />
          Exibir somente parlamentares ativos
        </label>
        <div>
        {parlamentares && parlamentares.map((par)=>(
          <label key={par.id} htmlFor="brunooliveira" className="flex gap-2">
            <input type="checkbox" name="brunooliveira" id="brunooliveira" />
            {`${par.nome_parlamentar} / ${par.partido}`}
          </label>
        )) }

        </div>
      </div>
    </div>
  )
}