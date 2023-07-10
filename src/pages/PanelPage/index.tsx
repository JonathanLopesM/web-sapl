import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { useParams } from "react-router-dom"
import { PainelParlamentares } from "../../components/Panel/parlamentares"
import { ResultadoVotacao } from "../../components/Panel/resultadoVotacao"
import { io } from "socket.io-client"
import { getData } from "../../services/apiNode"
import { WelcomeToPeapleHome } from "../../components/Panel/Welcome"
import { Message } from "../../components/Panel/Message"

// const socket = io('http://localhost:3333');
let poolingTimeout;
let dataReturn;
async function PoolingToBack (setDados) {
  await getData(setDados)

  poolingTimeout = setTimeout(()=> PoolingToBack(setDados), 1000)
}
export function Painel(){

  const [dados, setDados] = useState([]) as any
  
  const { GetSessions, painelLayout, setPainelLayout, GetPainel, dadosPainel, setDadosPainel } = useContext(AuthContext)
  
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
  
  console.log(dados, 'dadaos')


  return (

      <div className="flex flex-col text-white h-screen w-full bg-gray-900 " >
        <header className="flex w-full h-14 border-b justify-center text-white gap-4 my-4 pb-4">
            <div className="flex w-[80%] items-center gap-2">
              <div className='flex py-4 px-2 bg-white rounded-full'>
                <img 
                  className="w-10 h-6" 
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
          <div className="flex w-full justify-center items-center h-[600px]">
              {/* { <h3 className="flex bg-white text-green-500 justify-center text-center items-center font-extrabold px-8 p-2 text-3xl">SESSÃO AUTORIZADA </h3>} */}
              {}
          
            {dados?.data?.tela === 0 && <WelcomeToPeapleHome dados={dados?.data} />}
            {dados?.data?.tela === 1 && <PainelParlamentares dados={dados?.data.stateVote} />}
            {dados?.data?.tela === 2 && <ResultadoVotacao dados={dados?.data.stateVote} />}
            {dados?.data?.tela === 3 && <h5 className="flex w-full text-center mx-auto justify-center items-center bg-white text-black text-6xl font-extrabold p-4">SILÊNCIO!</h5>}
            {dados?.data?.tela === 4 && <Message  />}
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
                {dados?.data?.stateVote.length} Presente(s)
              </h4>
              
            </div>
          </div>
        }

      </div>
    
  
  )
}