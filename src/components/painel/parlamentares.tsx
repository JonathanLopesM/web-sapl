import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function PainelParlamentares () {
  const { parlamentares, GetParlamentares} = useContext(AuthContext)

  useEffect(()=>{
    if(!parlamentares){
      GetParlamentares()
    }
  },[])

  console.log(parlamentares, 'parlamentares')
  return (
    <>
    {parlamentares && 
    <div className="flex flex-col w-full max-h-screen justify-center items-center mt-5">
      <div className="grid grid-cols-2 gap-4 w-[80%]">
        {parlamentares.map(par=> (
          par.titular == 'Sim' &&
          <div className="flex gap-4 ">
            <img className="flex rounded-full w-16 " src={par.fotografia} alt="" />
            <div>
              <h2 className="flex text-2xl font-semibold">
                {par.nome_parlamentar}
              </h2>
              <span>
                ({par.partido})
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