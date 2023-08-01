import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export function MessageControl () {
  const { PatchPanelMessage } = useContext(AuthContext)
  const [message, setMessage] = useState('')
  const tela = 5
  const handleSetMessage = () => {
    PatchPanelMessage(tela, message )
  }

  return (
    <div className="flex w-full">
        <form action="" className="flex flex-col gap-4">
          <label htmlFor="mensagem" className="font-bold text-2xl">
                Mensagem
            <textarea
              value={message}
              onChange={event => setMessage(event.target.value)}
              className="flex w-full border px-4 py-1 rounded-md text-xl"
              placeholder="Digite a mensagem"
              rows={5}
              cols={44}
            />
          </label> 
          <button type="button" onClick={handleSetMessage} className="flex bg-green-500 text-white text-center justify-center py-2 rounded-md">
            ATUALIZAR PAINEL
          </button>
        </form>
    </div>
  )
}