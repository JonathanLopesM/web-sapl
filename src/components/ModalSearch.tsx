import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ModalSearch({open, setOpen}) {

  const cancelButtonRef = useRef(null)

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[95%] sm:w-[80%] max-w-[1200px] ">
                <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto">
                  <div className="flex flex-col  sm:items-start ">
                    <form action="" className='flex flex-col w-full sm:w-[80%]  text-start justify-center items-center mx-auto'>
                      <h3 className='flex w-full font-bold text-2xl'>Pesquisa Textual</h3>

                      <div className='flex flex-col w-full gap-4 '>
                          
                          <div className="flex flex-col sm:flex-row gap-4 mt-10">
                              <label className="flex flex-col w-full" htmlFor="ano">Pesquisar
                                  <input className="flex border w-full rounded-md px-2 py-2" name="abertura" id="abertura" type="text" />
                              </label>
                          </div>
                          <div className="flex flex-col  gap-4">
                            <h2 className="flex text-xl font-semibold">
                              Em quais tipos de documento deseja pesquisar ?
                            </h2>
                            <label htmlFor="marcar/todos" className='flex gap-2'>
                              <input type="checkbox" name="marcar/todos" id="marcar/todos" />
                              Marcar/Desmarcar Todos
                            </label>

                            <ul className='flex flex-col'>
                              <li className=''>
                                <label htmlFor="marcar/todos" className='flex gap-2'>
                                  <input type="checkbox" name="marcar/todos" id="marcar/todos" />
                                  Documentos Acessórios
                                </label>
                              </li>
                              <li className=''>
                                <label htmlFor="marcar/todos" className='flex gap-2'>
                                  <input type="checkbox" name="marcar/todos" id="marcar/todos" />
                                  Matérias Legislativas
                                </label>
                              </li>
                              <li className=''>
                                <label htmlFor="marcar/todos" className='flex gap-2'>
                                  <input type="checkbox" name="marcar/todos" id="marcar/todos" />
                                  Normas Jurídicas
                                </label>
                              </li>
                              <li className=''>
                                <label htmlFor="marcar/todos" className='flex gap-2'>
                                  <input type="checkbox" name="marcar/todos" id="marcar/todos" />
                                  Sessões Plenárias
                                </label>
                              </li>
                            </ul>

                          </div>
                          
                         
                          <div className='flex w-full justify-end my-10'>
                            
                            <button className='flex bg-blue-800 text-white px-4 py-2 rounded-xl hover:bg-blue-900'>
                             Pesquisar
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
