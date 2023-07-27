import React, { useContext, useEffect, useState } from "react"
import ModalAddSession from "../../components/ModalAddSession"
import ModalSearch from "../../components/ModalSearch"
import Abertura from "../../components/Menu/Abertura"
import Expedientes from "../../components/Menu/Expedientes"
import OrdemDoDia from "../../components/Menu/OrdemDoDia"
import Resumo from "../../components/Menu/Resumo"
import { AuthContext } from "../../contexts/AuthProvider/index"
import { useNavigate, useParams } from "react-router-dom"
import { Processo } from "../../components/Processo"
import { MesaDiretora } from "../../components/Mesa"
import { PainelEletronico } from "../../components/ControlPanel/index"
import { OrdemDoDiaLayout } from "../../components/OrdemDoDia"
import { Presenca } from "../../components/Presenca"
import { Ausencia } from "../../components/Ausencia"
import { Header } from "../../components/Header"

export function Session () {
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const {sessions, GetSessions, DayOrderIds,dayOrder, setDayOrders } = useContext(AuthContext)
  const { id } = useParams()
  const [layout, setLayout] = useState('dadosbasicos')

  
  useEffect(()=>{
      if(!sessions){
        GetSessions('2023', '','', '')
      }
  },[])
  useEffect(()=>{
    DayOrderIds(id)
  },[])

  
  const history = useNavigate()
  console.log(id, 'id')

  console.log(sessions, 'sessions')
  let session = ''
  if(sessions){
    session = sessions.filter(ses => {
      if(ses.id == id){
        return ses
      }
    })
  }

  return (
    <div className="flex flex-col ">
    <Header />
    {/* <ModalSearch open={openSearch} setOpen={setOpenSearch} />
    <ModalAddSession open={open} setOpen={setOpen} /> */}
    {
      session && 
      <div className="flex flex-col w-[95%]  px-5 lg:px-0  md:max-w-[1200px] mx-auto gap-2">
        {/* <div className=" flex w-full gap-4 justify-end my-5">
            <button onClick={()=> setOpenSearch(!openSearch)} className="flex border px-2 py-1 items-center rounded-lg hover:bg-gray-300 ">Pesquisa Textual</button>
            <button onClick={()=> setOpen(!open)} className="flex border px-2 py-1 items-center rounded-lg hover:bg-gray-300">Adicionar Sessão Plenária</button>
          </div> */}
        <div className="flex w-full  2xl:w-full justify-start gap-4 my-5">
          {/* <Abertura setLayout={setLayout} />
          <Expedientes />
          <OrdemDoDia setLayout={setLayout} /> */}
          <button onClick={()=> setLayout('paineleletronico')} className="flex items-center border-2 px-2 rounded-md text-2xl hover:bg-gray-400">
            Painel Eletrônico
          </button>
          {/* <Resumo /> */}
        </div>
    
        {layout == 'dadosbasicos' && <Processo session={session} />}
        {layout == 'mesa' && <MesaDiretora />}
        {layout == 'presenca' && <Presenca />}
        {layout == 'ausencia' && <Ausencia />}
        
        {layout == 'ordemdodia' && <OrdemDoDiaLayout />}
        {layout == 'paineleletronico' && <PainelEletronico session={session[0]} />}
      </div> 
    }
    
    </div>
  )
}