import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function PainelParlamentares ({ dados, materia }) {
  const { parlamentares, GetParlamentares} = useContext(AuthContext)

  useEffect(()=>{
    if(!parlamentares){
      GetParlamentares()
    }
  },[])
  return (
    <>
     <div className="flex h-14 text-center justify-center items-center ">
        <h4 className="text-2xl font-extrabold">
          {materia}
        </h4>  
     </div>
    {dados && 
    <div className="flex flex-col w-full max-h-screen justify-center items-center mt-5">
      <div className="grid grid-cols-2 gap-4 w-[80%]">
        {dados.map(par=> (
          <div key={par.id} className="flex gap-4 justify-between border rounded-l-[48px]">
            <div className="flex gap-2 ">
              <div className="flex bg-white  w-24 h-24 object-cover overflow-hidden rounded-full">
                <img className="flex object-contain " src={par.fotografia} alt={`foto do parlamentar ${par.name}`} />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="flex text-2xl font-semibold">
                  {par.name}
                </h2>
                {
                  par.presenca ? 
                  <span className="text-green-400 font-bold">Presente</span>
                  : <span className="text-red-400 font-bold">
                    Ausente
                  </span>
                }
              </div>
            </div>
            <div className="flex border items-center justify-center px-2">
              <span className="font-bold w-[80px] text-center">
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