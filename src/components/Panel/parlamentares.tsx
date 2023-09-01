import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function PainelParlamentares ({ dados, materia}) {
  const { parlamentares, GetParlamentares, matters, Matters} = useContext(AuthContext)

  useEffect(()=>{
    if(!parlamentares){
      GetParlamentares()
    }
    // if(!matters){
    //    Matters(sessionId)
    // }
  },[])
  console.log(dados, "dados")
  console.log(matters, "mattersno painel ")


// Verificar os dados do retorno parar conferir se 
// visualizar o voto do parl na tela do painel
console.log(materia, "materia")
  return (
    <>
     {
      materia &&
      <div className=" sm:flex text-center justify-center items-center lg:gap-2 sm:px-8">
        <h4 className="text-xs lg:text-base xl:text-xl font-extrabold">
          {materia.__str__}
        </h4>  
        -
        <h4 className=" text-xs  xl:text-xl font-extrabold">
          {materia.ementa}
        </h4>  
     </div>
     }
    {dados && 
    <div className="flex flex-col w-full sm:max-h-screen justify-center items-center mt-5">
      <div className="grid  sm:grid-cols-3 gap-4 px-2 sm:w-[80%]">
        {dados.stateVote.map(par=> (
          <div key={par.id} className="flex gap-4 justify-between border rounded-l-[48px]">
            <div className="flex gap-2 items-center ">
              <div className="flex bg-white w-5 h-5 lg:w-12 lg:h-12 xl:w-16  xl:h-16 object-cover overflow-hidden rounded-full justify-center">
                <img className="flex object-contain " src={par.fotografia} alt={`foto do parlamentar ${par.name}`} />
              </div>
              <div className="flex flex-col justify-center sm:text-xs lg:text-xl">
                <h2 className="flex sm:text-[8px] font-semibold">
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
            {
              dados?.registro ? 
              <div className={`flex border-2 ${par.voto == "Sim" && "border-green-500"} ${par.voto == "Não" && "border-red-500"} w-[100px] items-center justify-center px-2 `}>
                  {/* // text-green-400 */}
                  <span className={`font-bold ${par.voto == "Sim" && "text-green-500"} ${par.voto == "Não" && "text-red-500"} w-[80px] text-center `}>
                    {par.voto}
                  </span>
              </div>
              : <div className={`flex border w-[20px] lg:w-20 xl:w-[100px] items-center justify-center px-2 ${par.voto !== "Não Votou" ? "bg-yellow-300" : "bg-white"}`}>
                </div>
            }
          </div>
        ))}
      </div>

    </div>
    }
    </>
  )
}