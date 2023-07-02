import React, { useContext, useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AuthContext } from '../../contexts/AuthProvider'

export default function ModalAddJustify({open, setOpen}) {
/// /sessao/2/justificativaausencia/create
  const cancelButtonRef = useRef(null)
  const { GetParlamentares, parlamentares } = useContext(AuthContext)

  useEffect(()=>{
    if(!parlamentares){
      GetParlamentares()
    }
  },[])
  let options = []
  const ParlamenOption = parlamentares.filter(par => {
    if(par.ativo == true){
      console.log()
      options.push(par.nome_parlamentar)
      return par.nome_parlamentar
    }
  })
  console.log(ParlamenOption, options, 'option parlamentar')

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
                  <div className="flex flex-col w-full sm:w-[80%] mx-auto sm:items-start ">
                    <form action="" className='flex flex-col text-start justify-center items-center mx-auto'>
                      <h3 className=' w-full font-bold text-2xl'>
                        Adicionar Justificativa de Ausência
                        <span className='font-normal ml-2 text-gray-500'>
                          (1ª Sessão Ordinária de 2023 da 3ª Sessão Legislativa da 50ª Legislatura)
                        </span>
                      </h3>
                      <span className='flex w-full'>
                        Justificativa de Ausência
                      </span>
                      <div className='flex flex-col gap-4 w-full'>
                          <div className="flex flex-col sm:flex-row gap-2 w-full">
                            <div className="flex gap-2 w-full">
                              <label className="flex flex-col w-full" htmlFor="ano">
                                Legislatura*
                                  <select className="flex border w-full rounded-md px-2 py-2" name="legislatura" id="legislatura">
                                    <option value="50ª (2021-2024)(Atual)">
                                      50ª (2021-2024)(Atual)
                                    </option>
                                  </select>
                                </label>
                                
                            </div>
                           
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex w-full gap-4">
                              <label className="flex flex-col w-full" htmlFor="ano">Abertura*
                                  <input className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                                </label>
                                <label className="flex flex-col w-full" htmlFor="mes">Horário (hh:mm)*
                                  <input className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                                </label>
                            </div> 
                            
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
                                  className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                  id="formFileLg"
                                  type="file" />
                              </div>
                              <div className='flex flex-col gap-4'>
                                <label className="flex flex-col w-full" htmlFor="">
                                  Tipo de Justificativa
                                  <select className="flex border w-full rounded-md px-2 py-2" name="" id="">
                                    <option value="----">------</option>
                                  </select>
                                </label>
                                <label className="flex flex-col w-full" htmlFor="">
                                  Ausente em*
                                  <select className="flex border w-full rounded-md px-2 py-2" name="" id="">
                                    <option value="Matéria">Matéria</option>
                                    <option value="Sessão">Sessão</option>
                                  </select>
                                </label>
                              </div>
                              <div className='flex flex-col gap-4'>
                                <h3>
                                Matérias do Expediente
                                </h3>
                                <h4>
                                  Matérias do Ordem do Dia
                                </h4>
                                <label className='flex gap-2' htmlFor="">
                                  <input type="checkbox" name="" id="" />
                                  Indicação nº 502 de 2022
                                </label>
                              </div>

                              
                            </div> 
                            
                          </div>
                          
                          <div className='flex w-full justify-between my-10'>
                            <button className='flex bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-500'>
                              Cancelar
                            </button>
                            <button className='flex bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-900'>
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
