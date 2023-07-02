import React from "react"

export function OrdemDoDiaLayout(){
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-3xl">
      Matérias da Ordem do Dia 
      <span className="text-gray-400 ml-2 font-normal">
      (2ª Sessão Ordinária de 2023 da 3ª Sessão Legislativa da 50ª Legislatura)
      </span>
      </h2>
      
      <div className="flex w-full justify-end">
        <button className="flex border px-4 py-2 rounded-l-xl">
          Adicionar Matéria da Ordem do Dia
        </button>
        <button className="flex border px-4 py-2 ">
          Adicionar Várias Matérias
        </button>
        <button className="flex border px-4 py-2 rounded-r-xl">
          Filtrar por
        </button>
      </div>
      <div className="flex flex-col w-full">
        <h3>Total de Matérias da Ordem do Dia: <span>1</span></h3>
        <div className="flex flex-col w-full">
          <table className="flex flex-col">
            <thead className="flex">
              <tr className='flex w-full justify-between'>
                <th className="flex w-[80px] ">
                  Nº Ordem
                </th>
                <th className="flex w-[250px] ">
                  Matéria
                </th>
                <th className="flex w-[350px]">
                  Ementa/Situação de Pauta/Observação
                </th>
                <th className="flex w-[100px]">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody className="flex flex-col w-full">
              <tr className="flex  items-center bg-gray-100 p-2 w-full justify-between">
                <td className="flex w-[30px]">
                  1
                </td>
                <td className="flex w-[200px]">
                  Indicação de nº 502 de 2022
                </td>
                <td className="flex w-[300px]">
                  Pavimentação asfáltica na Rua projetada no Bairro SÃO DOMINGOS
                </td>
                <td className="flex w-[100px]">
                  APROVADO
                </td>
              </tr>
            </tbody>

          </table>

        </div>
      </div>
    </div>
  )
}