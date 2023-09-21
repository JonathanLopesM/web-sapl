import React from "react"

export function Message(dados){
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h6 className="flex text-7xl font-bold">
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