import React, { useContext } from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AuthContext } from '../contexts/AuthProvider'

export default function ModalCleanSession({open, setOpen}) {
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
