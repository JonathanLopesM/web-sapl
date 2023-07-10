import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function PainelParlamentares ({dados}) {
  const { parlamentares, GetParlamentares} = useContext(AuthContext)

  useEffect(()=>{
    if(!parlamentares){
      GetParlamentares()
    }
  },[])

  console.log(dados, 'nos parlamntares')

  console.log(parlamentares, 'parlamentares')
  return (
    <>
    {dados && 
    <div className="flex flex-col w-full max-h-screen justify-center items-center mt-5">
      <div className="grid grid-cols-2 gap-4 w-[80%]">
        {dados.map(par=> (
          <div key={par.id} className="flex gap-4 justify-between">
            <div className="flex gap-2">
              <img className="flex w-24 h-24 rounded-full   " src={par.fotografia} alt={`foto do parlamentar ${par.name}`} />
              <div className="flex flex-col justify-center">
                <h2 className="flex text-2xl font-semibold">
                  {par.name}
                </h2>
                {
                  par.presenca ? 
                  <span className="text-green-400 font-bold">Presente</span>
                  : <span>
                    Ausente
                  </span>
                }
              </div>
            </div>
            <div className="flex border items-center justify-center px-2">
              <span className="font-bold">
                {par.voto}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
    }
    </>
  )
}