import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"

export function Register({ setMatterState, sessionId, setProjectsView}) {
  const { MatterUpdated, GetVotes, resultVote, voteResParl, votes, setVotes,matterComplet, CloseVote, Matters, PatchVotePar, ReloadVotePanel, RegisterVoteSapl } = useContext(AuthContext)
  useEffect(()=>{
      if(!resultVote){
        GetVotes()
      }   
  },[])
  
  const [yesVoteForm, setYesVoteForm] = useState(resultVote && resultVote?.Yes )
  const [notVoteForm, setNotVoteForm] = useState(resultVote && resultVote?.Not )
  const [abstentionForm, setAbstentionForm] = useState(resultVote && resultVote?.Yes )
  const [precenseForm, setPresenseForm] = useState(resultVote && resultVote?.Presense )
  const [voteTotalForm, setVoteTotalForm] = useState(resultVote && resultVote?.totalVotes )
  const [resultVoteForm, setResultVoteForm] = useState(0) as any
  const [observation, setObservation] = useState("")
  const [buttonClose, setButtonClose] = useState(true)

  const [valueVote, setValueVote] = useState() as any

  const handleCancel = () => {
    setMatterState("")
    // ReloadVotePanel()
    // MatterUpdated("", false)
    setVotes(!votes)
    setProjectsView("materias")
  }

  function handleCloseVote(e) {
    console.log(sessionId, voteResParl, resultVote?.Yes, resultVote?.Not, resultVote?.abstain, observation, "", resultVoteForm,   Number(resultVote?.materia), matterComplet.matterId, null, null )
    RegisterVoteSapl(sessionId, voteResParl, resultVote?.Yes, resultVote?.Not, resultVote?.abstain, observation, "", resultVoteForm,   Number(resultVote?.materia), matterComplet.matterId, null, null )
    
    setButtonClose(false)
    CloseVote(matterComplet.id, matterComplet?.matterId, Number(resultVoteForm), observation, resultVote?.Yes, resultVote?.Not, resultVote?.totalVotes, voteResParl)
    Matters(sessionId)
    MatterUpdated(undefined, true)
  }

  function handleEncerrar() {
    
    Matters(sessionId)
    // ReloadVotePanel()
    setProjectsView("materias")
    // setMatterState("")
    // MatterUpdated("", false)
    setVotes(!votes)
  }

  function handleEditVote (id, novoVoto ){
    PatchVotePar(id, novoVoto)
    setTimeout(()=>{
      GetVotes()
    },1000)
  }

  return (
    <>
    {
        votes && 
        <div className="flex flex-col border p-8 mt-[55px] overflow-auto">
            <div className="flex font-bold text-xl">
              <h3 className="flex flex-col">
                Matéria Votada: 
                <span  className="flex ml-4">
                  matéria: <span className="font-normal ml-2"> {matterComplet && matterComplet?.__str__} </span>
                </span>
                <span  className="flex ml-4">
                  ementa: <span className="font-normal ml-2"> {matterComplet && matterComplet?.ementa}</span> 
                </span>
              </h3>
            </div>
            <div>
              <div className=" my-5">
                <h3 className="font-bold text-2xl">
                  Votos parlamentares
                </h3>
                <ul  className="flex flex-col gap-2">
                  {voteResParl && voteResParl.map(parl => (
                    <>{parl.presenca && <li key={parl.id} className="flex gap-8 text-center items-center w-[500px] justify-between">
                    {parl.name}
                    
                    <div className="flex gap-4">
                        {!parl.presenca ?
                          <span className="flex text-red-400">
                            Ausente
                        </span>
                        : <span className="flex text-green-400">
                          Presente
                        </span> }
                        
                        {
                          !parl.presenca
                          ?
                            <span className="border rounded-md px-2 py-1 w-[150px]">
                              {parl.voto}
                            </span>
                            :
                            (parl.voto.toLowerCase() === "não votou" ? <select onChange={(e)=>{
                              const novoVoto = e.target.value
                              handleEditVote(parl.user, novoVoto )
                              }} value={parl.voto} className="border rounded-md px-2 py-1 w-[150px] text-center" name="" id="">
                              <option value="Não votou">Não votou</option>
                              <option value="Sim">Sim</option>
                              <option value="Não">Não</option>
                              <option value="Abster">Abster</option>
                            </select> 
                            : <span className="border rounded-md px-2 py-1 w-[150px]">
                                {parl.voto}
                              </span>
                          )
                        }
                    </div>
                  </li>
                  }
                  </>
                  ))}
                </ul>

              </div>
            </div>
            <div>
              <h6 className="flex text-3xl font-bold">
                Votos
              </h6>
              <div className="flex flex-col ml-4">
                <span>
                  SIM: {resultVote?.Yes}
                </span>
                <span>
                  NÃO: {resultVote?.Not}
                </span>
                <span>
                  ABSTER: {resultVote?.abstain}
                </span>
                <span>
                  Presença: {resultVote?.Presence}
                </span>
                <span>
                  Total de Votos: {resultVote?.totalVotes}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <label className="flex flex-col" >
                  Resultado de Votação
                  {
                  buttonClose 
                  ? <select onChange={(e)=>setResultVoteForm(e.target.value)} value={resultVoteForm} className="border rounded-md p-2" >
                    <option value="">
                      ----------
                    </option>
                    <option value={1}>
                      APROVADO POR MAIORIA ABSOLUTA
                    </option>
                    <option value={2}>
                      APROVADO POR MAIORIA SIMPLES
                    </option>
                    <option value={3}>
                      APROVADO POR UNANIMIDADE
                    </option>
                    <option value={4}>
                      REPROVADA
                    </option>
                    <option value={5}>
                      MATÉRIA LIDA
                    </option>
                    <option value={6}>
                      APROVADA EM 1º DISCUSSÃO
                    </option>
                    <option value={7}>
                      APROVADA EM 2º DISCUSSÃO
                    </option>
                    <option value={8}>
                      APROVADA EM REGIME DE URGÊNCIA ESPECIAL
                    </option>
                    <option value={9}>
                      APROVADA EM DISCUSSÃO ÚNICA
                    </option>
                    <option value={10}>
                      APROVADO POR 2/3
                    </option>
                    <option value={11}>
                      PEDIDO DE VISTA
                    </option>
                   </select>
                  : <div className="border rounded-md p-2">
                      { resultVoteForm == 1 && "APROVADO POR MAIORIA ABSOLUTA"}
                      { resultVoteForm == 2 && "APROVADO POR MAIORIA SIMPLES"}
                      { resultVoteForm == 3 && "APROVADO POR UNANIMIDADE"}
                      { resultVoteForm == 4 && "REPROVADA"}
                      { resultVoteForm == 5 && "MATÉRIA LIDA"}
                      { resultVoteForm == 6 && "APROVADA EM 1º DISCUSSÃO"}
                      { resultVoteForm == 7 && "APROVADA EM 2º DISCUSSÃO"}
                      { resultVoteForm == 8 && "APROVADA EM REGIME DE URGÊNCIA ESPECIAL"}
                      { resultVoteForm == 9 && "APROVADA EM DISCUSSÃO ÚNICA"}
                      { resultVoteForm == 10 && "APROVADO POR 2/3"}
                      { resultVoteForm == 11 && "PEDIDO DE VISTA"}
                   </div>
                  }
                </label>

                <label className="flex flex-col max-w-[500px]" htmlFor="">
                  Observações
                  <textarea onChange={(e)=>setObservation(e.target.value)} className="border p-2" cols={20} rows={5}></textarea>
                </label>
              <div className="flex w-full justify-between">
                {
                  buttonClose ? <button type="button" onClick={handleCancel} className=" border p-2 px-4 rounded-lg bg-yellow-500  hover:bg-yellow-300">
                    Cancelar Votação
                  </button>
                : <button type="button" className="cursor-default opacity-60 border p-2 px-4 rounded-lg bg-gray-400">
                    Cancelar Votação
                  </button>
                }
                {buttonClose 
                ? (resultVoteForm == 0 ?
                  <div className="border cursor-default opacity-50 p-2 px-4 rounded-lg bg-gray-500  text-white font-bold">
                    Fechar Votação
                  </div>
                 :<button type="button" onClick={handleCloseVote} className="border p-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-bold">
                  Fechar Votação
                </button>)
                : <button type="button" onClick={handleEncerrar} className="border p-2 px-4 rounded-lg bg-red-500 hover:bg-red-400 text-white font-bold">
                    Encerrar
                  </button>
                }
              </div>
              </div>

            </div>
          </div>
      }
    </>
  )
}