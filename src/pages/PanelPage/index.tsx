import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { PainelParlamentares } from "../../components/Panel/parlamentares"
import { ResultadoVotacao } from "../../components/Panel/resultadoVotacao"
import { io } from "socket.io-client"
import { getData } from "../../services/apiNode"
import { WelcomeToPeapleHome } from "../../components/Panel/Welcome"
import { Message } from "../../components/Panel/Message"
import { SpeechPanel } from "../../components/Panel/Speech/index"
import { useNavigate } from "react-router-dom"


// const socket = io('http://localhost:3333');
let poolingTimeout;
async function PoolingToBack (setDados) {
  await getData(setDados)

  poolingTimeout = setTimeout(()=> PoolingToBack(setDados), 800)
}
export function Painel(){
  const { dados, setDados, idSession } = useContext(AuthContext)
    const navigate = useNavigate()
  useEffect(()=> {
    // Conferir se tem um token, 

    // se tiver rediciona para a dashboard 
    const token = localStorage.getItem('sessionid')
    // if(!token){
    //   navigate('/')
    // }
    // else {
    //   navigate('/sessoes')
    // }
    //se não direciona Login
  }, [idSession])
  
  useEffect(()=>{
   PoolingToBack(setDados)

   return () => clearTimeout(poolingTimeout)
  },[])

  // useEffect(()=>{
    
  //   //Evento para receber os dados do socket back
  //   socket.on("dados-atualizados", (dadosrecebidos)=>{
  //     console.log(dadosrecebidos, 'dadosrecebidos')
  //       setDados(dadosrecebidos)
  //   })
  //   // Evento para lidar com erros
  //   socket.on('erro', (mensagem) => {
  //     console.error('Erro:', mensagem);
  //   });

  //   // Emitir o evento para o servidor Socket.io solicitar os dados
  //   socket.emit('obter-dados-atualizados', {
  //     id:1
  //   });
    
  //   // Remover os event listeners quando o componente for desmontado
  //   return () => {
  //     socket.off('dados');
  //     socket.off('erro');
  //   };
  // },[])
  let presences = []

  if(dados && dados?.data && dados?.data?.stateVote){
    presences = dados?.data?.stateVote.filter(fil => {
      if(fil.presenca == true){
        return fil
      }
    })
  }

  console.log(dados, "dados")

  return (

      <div className="flex flex-col text-white h-screen w-full bg-gray-900 " >
        <header className="flex w-full h-14 border-b justify-center text-white gap-4 my-4 pb-4">
            <div className="flex w-[80%] items-center gap-2">
              <div className='flex py-4 px-2 bg-white rounded-full '>
                <img 
                  className="w-10 h-6 " 
                  src="/novace_logo.png" 
                  alt="" 
                  />
              </div>
              <h1 className="flex text-4xl font-bold">
                Painel de votação
              </h1>
            </div>
        </header>
        <div className="flex flex-col items-center justify-items-center ">
          <div className="flex flex-col w-full  items-center h-[600px]">
              {/* { <h3 className="flex bg-white text-green-500 justify-center text-center items-center font-extrabold px-8 p-2 text-3xl">SESSÃO AUTORIZADA </h3>} */}
           
            {!dados?.data?.estado ? <WelcomeToPeapleHome dados={dados?.data} /> 
            : <>
                {dados?.data?.tela === 0 && <WelcomeToPeapleHome dados={dados?.data} />}
                {dados?.data?.tela === 1 && <PainelParlamentares dados={dados?.data.stateVote} materia={dados?.data.materia}  />}
                {dados?.data?.tela === 2 && <ResultadoVotacao dados={dados?.data} materia={dados?.data.materia}  />}
                {dados?.data?.tela === 3 && <SpeechPanel dados={dados?.data} />}
                {dados?.data?.tela === 4 && <h5 className="flex w-full text-center mx-auto justify-center items-center bg-white text-black text-6xl font-extrabold p-4">SILÊNCIO!</h5>}
                {dados?.data?.tela === 5 && <Message dados={dados?.data}  />}
              </>
            }
            
            {/* {<ResultadoVotacao /> } */}
            </div>
        </div>
        {dados?.data?.stateVote && 
          <div className={`flex bg-gray-200 mt-auto justify-center  py-5`}>
            <div className="flex justify-between sm:w-[80%]">
              <h4 className=" text-green-500 text-3xl font-bold ">
                PRESENÇA PARLAMENTAR
              </h4>
              <h4 className=" text-green-500 text-3xl font-bold ">
                {presences?.length} Presente(s)
              </h4>
              
            </div>
          </div>
        }

      </div>
    
  
  )
}