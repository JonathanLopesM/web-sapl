import React from "react"

export function Processo({session}){
  
  console.log(session, 'session')
  return (
    <>
    <div className="flex flex-col gap-2">
        <h3 className="flex text-xl sm:text-3xl font-semibold">
          {session[0].__str__}
        </h3>
        
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-end gap-4" >
          <button className="hidden bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900">
              Editar
          </button>
          <button className="flex bg-red-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-900">
              Excluir
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-5 divide-y-2 gap-5">
        <h3 className="flex text-xl font-semibold">
          Dados Básicos
        </h3>
        <div className="flex flex-col gap-2">
          <h3 className="px-2 py-4 text-xl"></h3>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col bg-gray-200 p-4 rounded-md gap-4">
              <div className="flex w-full justify-between">
                <div className="flex flex-col max-w-[30%]">
                  <h4 className="font-bold">Legislatura</h4>
                  <span className="flex ">
                    {session[0].legislatura == 1 && <span>50ª (2021 - 2024)(Atual)</span>}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Sessão Legislativa</h4>
                  <span>
                  {session[0].sessao_legislativa == 1 && <span>-------</span> }
                  {session[0].sessao_legislativa == 2 && <span>3º (2023 - 2023)(Atual)</span>}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Tipo</h4>
                  <span>
                    {session[0].tipo== 0 && <span>-------</span>}
                    {session[0].tipo== 1 && <span>Sessão Extraordinária</span>}
                    {session[0].tipo== 2 && <span>Sessão Ordinária</span>}
                    {session[0].tipo== 3 && <span>Sessão Solene</span>}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Número</h4>
                  <span>
                    {session[0].numero}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Publicar Pauta?</h4>
                  <span>
                    {session[0].publicar_pauta ? 'Sim' : 'Não' }
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col">
                  <h4 className="font-bold">Abertura</h4>
                  <span>
                    {session[0].data_inicio}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Horário (hh:mm)</h4>
                  <span>
                  {session[0].hora_inicio}
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <h4 className="font-bold">Sessão iniciada?</h4>
                  <span>
                  {session[0].iniciada ? 'Sim' : 'Não' }
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col">
                  <h4 className="font-bold">Encerramento</h4>
                  <span>
                    {session[0].data_fim}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Horário (hh:mm)</h4>
                  <span>
                  {session[0].hora_fim}
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <h4 className="font-bold">Sessão finalizada?</h4>
                  <span>
                  {session[0].finalizada ? 'Sim' : 'Não' }
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col">
                  <h4 className="font-bold">Pauta da Sessão</h4>
                  <span>
                    {session[0].upload_pauta}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Ata da Sessão </h4>
                  <span>
                  {session[0].upload_ata}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">Anexo da Sessão</h4>
                  <span className="flex min-w-[200px] h-6">
                  {session[0].upload_anexo}
                  </span>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col">
                  <h4 className="font-bold">URL Arquivo Áudio (Formatos MP3 / AAC)</h4>
                  <span className="flex min-w-[200px] h-6">
                      {session[0].url_audio}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold">URL Arquivo Vídeo (Formatos MP4 / FLV / WebM) </h4>
                  <span className="flex min-w-[200px] h-6">
                  {session[0].url_video}
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}