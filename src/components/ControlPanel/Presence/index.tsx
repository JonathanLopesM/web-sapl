import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"

export function Presence({ sessionId}) {
  const { MatterUpdated, GetVotes, resultVote, voteResParl, votes, setVotes,matterComplet, CloseVote, Matters, PatchVotePar, ReloadVotePanel, RegisterVoteSapl, PatchPresenceParl, PatchPresenceParlMany } = useContext(AuthContext)
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
  const [presenceMany, setPresenceMany] = useState(false)

  const [valueVote, setValueVote] = useState() as any

  const handleCancel = () => {
    // setMatterState("")
    // ReloadVotePanel()
    // MatterUpdated("", false)
    setVotes(!votes)
    // setProjectsView("materias")
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
    // setProjectsView("materias")
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
  function handleEditPresence(id, presence){
    console.log(id, presence)
    let precensaBoolean = false
    if(presence === 'Presente') precensaBoolean = true
    PatchPresenceParl(id, precensaBoolean)
    setTimeout(()=>{
      GetVotes()
    },1000)
  }
  function handleEditMany(presenceMany){
    let precensaBoolean = false
    if(presenceMany === 'Presente') precensaBoolean = true
    PatchPresenceParlMany(precensaBoolean)
    setTimeout(()=>{
      GetVotes()
    },1000)
  }

  console.log(voteResParl, 'voteResParl')
  return (
        <div className="flex flex-col border p-8 mt-[55px] overflow-auto">
              <div className=" my-2">
                <h3 className="font-bold text-2xl mb-5">
                  Presença dos parlamentares
                </h3>
                <ul  className="grid grid-cols-1 sm:grid-cols-2 flex-col gap-2">
                    <li 
                      className="hidden gap-8 text-center items-center w-[500px] justify-between border-b-2 pb-2"
                    >
                      Modificar Todos
                      <div className="flex gap-4">
                          <select onChange={(e)=>{
                            const novaPresenca = e.target.value
                            handleEditMany(novaPresenca)
                          }} value={presenceMany ? 'Presente': 'Ausente'} 
                          className={`border rounded-md px-2 py-1 w-[150px] text-center ${!presenceMany ? 'text-red-400' : 'text-green-400'}`} name="" id=""
                        >
                            <option value="Ausente">Ausente</option>
                            <option value="Presente">Presente</option>
                        </select> 
                      </div>
                    </li>
                  {voteResParl.map(parl => (
                    <li 
                    key={parl.id} 
                    className="flex gap-8 text-center items-center w-[500px] justify-between"
                    >
                      {parl.name}
                    <div className="flex gap-4">
                        <select onChange={(e)=>{
                            const novaPresenca = e.target.value
                            handleEditPresence(parl._id, novaPresenca)
                          }} value={parl.presenca ? 'Presente': 'Ausente'} 
                          className={`border rounded-md px-2 py-1 w-[150px] text-center ${!parl.presenca ? 'text-red-400' : 'text-green-400'}`} name="" id=""
                        >
                            <option value="Ausente">Ausente</option>
                            <option value="Presente">Presente</option>
                        </select> 
                        <span className="border rounded-md px-2 py-1 w-[150px]">
                          {parl.voto}
                        </span>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
  )
}