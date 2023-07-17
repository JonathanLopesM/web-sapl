import React from "react"

export function Message(dados){
  console.log(dados, 'dados message')
  
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h6 className="flex text-4xl font-bold">
        MENSAGEM: 
      </h6>
      <h6 className="flex text-4xl font-bold"
      >
        {
          dados !== null && dados !== undefined &&
          <span>
            {dados.dados.message}
          </span>
        }
      </h6>
    </div>
  )
}