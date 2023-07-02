import React from "react"

export function MesaDiretora(){
  const parlamentares = [
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
  return (
    <div className="flex flex-col w-full">
      <h2 className="flex text-xl font-semibold">
        Mesa Diretora 
        <span className="flex text-gray-600 font-medium">
          (2ª Sessão Ordinária de 2023 da 3ª Sessão Legislativa da 50ª Legislatura)
        </span>
      </h2>
      <div className=" flex flex-col w-full justify-between">
        <h3>
        Escolha da Composição da Mesa Diretora da Sessão Plenária
        </h3>
        <div className="flex w-full">
          <label htmlFor="composicao">
            Composição 
            <textarea className="flex border-2 rounded-md w-72 h-44" name="composicao" id="composicao" />
          </label>

          <div className="flex flex-col items-center justify-center w-full gap-2">
            <input className="flex w-full justify-center max-w-[100px] px-4 py-2 border rounded-lg bg-blue-400 hover:bg-blue-300 text-white" type="button" value="incluir" />
            <input className="flex w-full justify-center max-w-[100px] px-4 py-2 border rounded-lg bg-red-400 hover:bg-red-300 text-white" type="button" value="Excluir" />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <label htmlFor="parlamentar">
              Parlamentar | Cargo
              <select
                className="flex border px-4 rounded-lg py-2"
               name="parlamentar" id="parlamentar">
                {parlamentares.map(par => (
                  <option key={par.id} value={par.name}>{par.name}</option>
                ))}
              </select>
            </label>
              <select className="flex border px-4 rounded-lg py-2"
               name="" id="">
                <option value="">1º Vice-Presidente</option>
                <option value="">2º Vice-Presidente</option>
                <option value="">1º Secretário</option>
                <option value="">2º Secretário</option>

              </select>

          </div>
        </div>
      </div>
      
    </div>
  )
}