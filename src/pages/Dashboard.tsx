import React, { useContext, useEffect, useState } from "react"
import ModalAddSession from "../components/ModalAddSession"
import ModalSearch from "../components/ModalSearch"
import { AuthContext } from "../contexts/AuthProvider"
import { Header } from "../components/Header"

export function Dashboard() {
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const { GetSessions, GetParlamentares, parlamentares, sessions, navigate, year, setYear, month, setMonth, day, setDay, type, setType, dash, setDash, sess, setSess } = useContext(AuthContext)

  useEffect(() => {
    if (!sessions) {
      GetSessions(year, month, day, type)
    }
  }, [])
  useEffect(() => {
    if (!parlamentares) {
      GetParlamentares()
    }
  }, [])

  function HandleSearch() {
    GetSessions(year, month, day, type)
  }
  console.log(sessions, parlamentares, 'sessions e parlamentares')

  function formatDate(newDate) {
    const months = {
      0: 'Janeiro',
      1: 'Fevereiro',
      2: 'Março',
      3: 'Abril',
      4: 'Maio',
      5: 'Junho',
      6: 'Julho',
      7: 'Agosto',
      8: 'Setembro',
      9: 'Outubro',
      10: 'Novembro',
      11: 'Dezembro',
    }
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sat']
    const d = new Date(newDate)
    const year = d.getFullYear()
    const date = d.getDate() + 1
    const monthIndex = d.getMonth()
    const monthName = months[d.getMonth()]
    const dayName = days[d.getDay()] // Thu
    const formatted = `${dayName}, ${date} ${monthName} ${year}`
    return formatted.toString()
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col w-[95%] mx-auto mt-10">
        <ModalSearch open={openSearch} setOpen={setOpenSearch} />
        <ModalAddSession open={open} setOpen={setOpen} />
        <div className="flex flex-col gap-2">
          <h3 className="flex text-xl sm:text-4xl font-semibold">
            Selecionar Sessão Plenária
          </h3>
          {/* <div className=" flex w-full gap-4 justify-end">
          <button onClick={()=> setOpenSearch(!openSearch)} 
            className="flex border px-2 py-1 items-center rounded-lg hover:bg-gray-300 ">
            Pesquisa Textual
          </button>
          <button onClick={()=> setOpen(!open)} className="flex border px-2 py-1 items-center rounded-lg hover:bg-gray-300">Adicionar Sessão Plenária</button>
        </div> */}
        </div>
        <div className="hidden flex-col gap-4 ">
          <h3 className="flex text-xl">Pesquisa de sessão Plenária</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex gap-2">
              <label className="flex flex-col" htmlFor="ano">Ano
                <select className="flex border w-44 rounded-md px-2 py-1" name="ano" id="ano">
                  <option value={year}>2023</option>
                </select>
              </label>
              <label className="flex flex-col" htmlFor="mes">Mês
                <select className="flex border w-44 rounded-md px-2 py-1" name="mes" id="mes">
                  <option value="------">-------</option>
                  <option value="janeiro">Janeiro</option>
                  <option value="fevereiro">Fevereiro</option>
                  <option value="março">Março</option>
                  <option value="abril">Abril</option>
                  <option value="Maio">Maio</option>
                  <option value="Junho">Junho</option>
                  <option value="Julho">Julho</option>
                  <option value="Agosto">Agosto</option>
                  <option value="Setembro">Setembro</option>
                  <option value="Outubro">Outubro</option>
                  <option value="Novembro">Novembro</option>
                  <option value="Dezembro">Dezembro</option>
                </select>
              </label>
            </div>
            <div className="flex  gap-2 mx-auto">
              <label className="flex flex-col" htmlFor="mes">Dia
                <select className="flex border w-44 rounded-md px-2 py-1" name="dia" id="dia">
                  <option value="------">-------</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </label>
              <label className="flex flex-col" htmlFor="mes">Tipo
                <select className="flex border w-44 rounded-md px-2 py-1" name="tipo" id="tipo">
                  <option value="------">-------</option>
                  <option value="Sessão Extraordinária">Sessão Extraordinária</option>
                  <option value="Sessão Ordinária">Sessão Ordinária</option>
                  <option value="Sessão Solene">Sessão Solene</option>
                </select>
              </label>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <button onClick={HandleSearch} className="flex bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900">
              Pesquisar
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-5 divide-y-2 gap-5">
          <h3 className="flex text-lg">Sessões encontradas</h3>
          <div className="flex flex-col gap-2">
            <h3 className="px-2 py-4 text-xl">Resultados</h3>
            <div className="flex flex-col gap-5">
              {sessions && sessions.map(ses => (
                <div key={ses.id} onClick={() => { navigate(`/sessoes/sessao/${ses.id}`) }} className="flex flex-col bg-gray-200 p-2 rounded-md cursor-pointer">
                  <h3 className="flex font-bold text-blue-500 text-xl">
                    {ses.__str__}
                  </h3>
                  <div>
                    <span className="font-bold pr-2">Abertura:</span>
                    <span>{formatDate(ses.data_inicio)}</span>
                  </div>
                  <div>
                    <span className="font-bold pr-2">Legislatura:</span>
                    {ses.legislatura == 1 && <span>{ses.numero}ª (2021 - 2024)(Atual)</span>}
                  </div>
                  <div>
                    <span className="font-bold pr-2">Sessão Legislativa:</span>
                    {ses.sessao_legislativa == 1 && <span>3º (2023 - 2023)(Atual)</span>}
                  </div>
                  <div>
                    <span className="font-bold pr-2">Tipo:</span>
                    {ses.tipo == 1 && <span>Sessão Ordinária</span>}
                  </div>
                </div>
              )).reverse()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}