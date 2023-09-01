
import React from "react"
import { ArrowPathIcon } from "@heroicons/react/24/outline"

export function LoadingMatter() {
  return (
    <>
    <tbody className="flex w-full  animate-pulse ">
      <td className="flex  border p-2 w-[80px] items-center justify-center">
          0
      </td>
      <td className="flex flex-col w-[20%] border p-2 justify-between">
                      
                        <span className="text-gray-600 ">
                          Nome da materia  <br />
                          <span className=" bg-gray-600">
                            akshkjas sadjkajsdakshkjas sadjkajsdakshkjas
                          </span>
                        </span>
                        <span 
                          className="text-blue-500"
                          >
                            Texto original
                        </span>
                        
                      </td>
                      <td className="flex flex-col border p-2 w-full max-w-[40%]">
                        Ementa

                        <span className="text-gray-600 ">
                          observacao: <br />
                          <span className=" bg-gray-600">
                          akshkjas sadjkajsdakshkjas sadjkajsdakshkjas sadjkajsdakshkjas sadjkajsdakshkjasakshkjas sadjkajsd sadjkajsd
                          </span>
                        </span>
                      </td>
                      <td className="flex  border p-2 w-[30%]">
                        <div className="flex flex-col ">
                          
                          <span className="text-gray-600  ">
                            Projeto <span className="bg-gray-600">não votado</span> <br />
                            <span className=" bg-gray-600">
                              akshkjas sadjkajsdakshkjas sadjkajsdakshkjas
                            </span>
                          </span>
                          
                          </div>
                      </td>
                      
                </tbody>
                <span className="flex items-center gap-4 mx-auto text-xl">
                        <ArrowPathIcon className="flex w-8 animate-spin" />
                        Carregando...
                      </span>
                </>
  )
}