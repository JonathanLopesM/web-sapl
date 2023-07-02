import React, { useContext } from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AuthContext } from '../contexts/AuthProvider'

export default function ModalAddSession({open, setOpen}) {
  const cancelButtonRef = useRef(null)
  const { CreateSessionPlen } = useContext(AuthContext)

  const [legis, setLegis] = useState("50ª (2021-2024)(Atual)")
  const [sessao_legislativa, setSessao_legislativa] = useState('-------') 
  const [tipo, setTipo] = useState("-------")
  const [cod_andamento_sessao, setCod_andamento_sessao] = useState('')
  const [painel_aberto, setPainel_aberto] = useState('')
  const [data_inicio, setData_inicio] = useState('')
  const [hora_inicio, setHora_inicio] = useState('')
  const [hora_fim, setHora_fim ]= useState('')
  const [numero,setNumero]= useState('') 
  const [data_fim, setData_fim ]=useState('') 
  const [url_audio, setUrl_audio] = useState('')
  const [url_video, setUrl_video] = useState('') 
  const [upload_pauta, setUpload_pauta] = useState('')
  const [upload_ata, setUpload_ata] = useState('')
  const [upload_anexo, setUpload_anexo] = useState('')
  const [iniciada, setIniciada] = useState('') 
  const [finalizada, setFinalizada] = useState('') 
  const [interativa, setInterativa] = useState('')
  const [tema_solene, setTema_solene] = useState('') 
  const [publicar_pauta, setPublicar_pauta] = useState('')
  
  const [legislatura, setLegislatura] = useState('') 

  console.log(legis, 'legis value ')
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[1200px] ">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto">
                  <div className="flex flex-col sm:items-start ">
                    <form action="" className='flex flex-col text-start justify-center items-center mx-auto'>
                      <h3 className='flex w-full font-bold text-2xl'>Adicionar Sessão Plenária</h3>
                      <span className='flex w-full'>Dados Básicos</span>
                      <div className='flex flex-col gap-4 '>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <div className="flex gap-2">
                              <label className="flex flex-col" htmlFor="ano">Legislatura*
                                  <select onChange={(e)=> setLegis(e.target.value)} className="flex border w-[240px] rounded-md px-2 py-2" name="legislatura" id="legislatura">
                                    <option value="50ª (2021-2024)(Atual)">50ª (2021-2024)(Atual)</option>
                                  </select>
                                </label>
                                <label className="flex flex-col" htmlFor="mes">Sessão Legislativa*
                                  <select onChange={(e)=> setSessao_legislativa(e.target.value)} className="flex border w-[240px] rounded-md px-2 py-2" name="mes" id="mes">
                                    <option value="------">-------</option>
                                    <option value="3º (2023 - 2023)(Atual)">3º (2023 - 2023)(Atual)</option>
                                  </select>
                                </label>
                            </div>
                            <div className="flex  gap-2">
                                  <label className="flex flex-col" htmlFor="mes">Tipo*
                                    <select onChange={(e)=> setTipo(e.target.value)} className="flex border w-[240px] rounded-md px-2 py-2" name="tipo" id="tipo">
                                      <option value="------">-------</option>
                                      <option value="Sessão Extraordinária">Sessão Extraordinária</option>
                                      <option value="Sessão Ordinária">Sessão Ordinária</option>
                                      <option value="Sessão Solene">Sessão Solene</option>
                                    </select>
                                  </label>
                                <label className="flex flex-col" htmlFor="mes">Número
                                    <input onChange={(e)=> setNumero(e.target.value)} type="number" className="flex border w-20 rounded-md px-2 py-[6px]" name="dia" id="dia" />
                                </label>
                                <label className="flex flex-col" htmlFor="mes">Publicar Pauta?
                                    <select onChange={(e)=> setPublicar_pauta(e.target.value)} className="flex border w-[120px] rounded-md px-2 py-2" name="tipo" id="tipo">
                                      <option value="false">Não</option>
                                      <option value="true">Sim</option>
                                    </select>
                                  </label>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex w-full gap-4">
                              <label className="flex flex-col w-full" htmlFor="ano">Abertura*
                                  <input onChange={(e)=> setData_inicio(e.target.value)} className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                                </label>
                                <label className="flex flex-col w-full" htmlFor="mes">Horário (hh:mm)*
                                  <input onChange={(e)=> setHora_inicio(e.target.value)} className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                                </label>
                            </div> 
                            <label className="flex flex-col" htmlFor="mes">Sessão iniciada?
                              <select onChange={(e)=> setIniciada(e.target.value)} className="flex border w-[150px] rounded-md px-2 py-[10px]" name="tipo" id="tipo">
                                  <option value="false">Não</option>
                                  <option value="true">Sim</option>
                              </select>
                            </label>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex w-full gap-4">
                              <label className="flex flex-col w-full" htmlFor="ano">Encerramento
                                  <input onChange={(e)=> setData_fim(e.target.value)} className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                                </label>
                                <label className="flex flex-col w-full" htmlFor="mes">Horário (hh:mm)
                                  <input onChange={(e)=> setHora_fim(e.target.value)} className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                                </label>
                            </div> 
                            <label className="flex flex-col" htmlFor="mes">Sessão finalisada?
                              <select onChange={(e)=> setFinalizada(e.target.value)} className="flex border w-[150px] rounded-md px-2 py-[10px]" name="tipo" id="tipo">
                                  <option value="false">Não</option>
                                  <option value="true">Sim</option>
                              </select>
                            </label>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 my-10">
                            <div className="flex flex-col w-full gap-4">
                              <div className="w-full ">
                                <label
                                  // for="formFileLg"
                                  className=" inline-block text-neutral-700 dark:text-neutral-200"
                                  >Pauta de Sessão</label
                                >
                                <input
                                  onChange={(e)=> setUpload_pauta(e.target.value)}
                                  className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                  id="formFileLg"
                                  type="file" />
                              </div>
                              <div className="w-full ">
                                <label
                                  // for="formFileLg"
                                  className=" inline-block text-neutral-700 dark:text-neutral-200"
                                  >Ata da Sessão</label
                                >
                                <input
                                  onChange={(e)=> setUpload_ata(e.target.value)}
                                  className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                  id="formFileLg"
                                  type="file" />
                              </div>
                              <div className="w-full ">
                                <label
                                  // for="formFileLg"
                                  className=" inline-block text-neutral-700 dark:text-neutral-200"
                                  >Anexo da Sessão</label
                                >
                                <input
                                onChange={(e)=> setUpload_anexo(e.target.value)}
                                  className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                  id="formFileLg"
                                  type="file" />
                              </div>
                            </div> 
                            
                          </div>
                          <div className='flex w-full'>
                              <div className="flex w-full gap-4">
                                <label className="flex flex-col w-full" htmlFor="ano">URL Arquivo de Áudio (formatos MP3 / AAC)
                                    <input 
                                    onChange={(e)=> setUrl_audio(e.target.value)}
                                    className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                                  </label>
                                  <label className="flex flex-col w-full" htmlFor="mes">URL Arquivo Vídeo (Formatos MP4 / FLV / WebM)
                                    <input 
                                      onChange={(e)=> setUrl_video(e.target.value)}
                                     className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                                  </label>
                              </div> 
                          </div>
                          <div className='flex w-full justify-between my-10'>
                            <button onClick={()=> setOpen(!open)} type="button" className='flex bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-500'>
                              Cancelar
                            </button>
                            <button type="submit" className='flex bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-900'>
                              Salvar
                            </button>
                          </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
