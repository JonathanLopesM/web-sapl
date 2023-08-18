import React, { useContext, useEffect, useState } from "react"
import { Header } from "../components/DASHBOARD_PARLAMENTAR/Header"
import { DashParl } from "../components/DASHBOARD_PARLAMENTAR"
import { AuthContext } from "../contexts/AuthProvider"
import { Bars3Icon, XMarkIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Vote } from "../components/DASHBOARD_PARLAMENTAR/Vote"

export function ParlDashboard () {
  const [page, setPage] = useState("presence")
  const {  userParl, setUserParl, LogoutParl, PresenceId,GetVotePresence, presence, dados } = useContext(AuthContext)
  const [openSidebar, setOpenSidebar] = useState(false)
  useEffect(()=>{
    if(!userParl){
      let user = localStorage.getItem("novace@userParl")
      console.log(user, "user vindo do par")
      user =JSON.parse(user)
      setUserParl(user)
    }
    GetVotePresence()
  },[])
  console.log(userParl, "parl")
  console.log(presence, "presence")
  console.log(dados, "dados dados dados ")
  return (
    <div className="flex  w-full  h-screen mx-auto">
      
      <div className="flex flex-col w-full ">
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} page={page} />
        <div className="w-full max-w-[900px] mx-auto">
          <h3 className="text-xl font-bold text-gray-500 p-4 max-w-[900px]  ">
            Bem vindo {userParl?.__str__}!
          </h3>
        </div>
        {page == "presence" && <DashParl page={page} setPage={setPage} />}
        {page == "vote" && <Vote page={page} setPage={setPage} />}
      </div>
      {openSidebar && 
      <div className="absolute inset-y-0 right-0 w-[70%] max-w-[300px] bg-white border-2">
        <div>
          <header className="flex w-full bg-white  items-center">
              <div className="flex w-10 h-10 hover:bg-gray-500 rounded-lg items-center justify-center cursor-pointer">
                <XMarkIcon onClick={()=>setOpenSidebar(!openSidebar)} className="block h-6 w-6" aria-hidden="true" />
              </div>
              <img className="block h-14 w-auto lg:h-16 mx-auto"
                      src="/novace_logo.png"
                      alt="Logo Novace" />
          </header>
          <div className="bg-[#1175B7] w-full h-[300px]">
            {userParl && 
              <div className="flex flex-col justify-center  p-4">
                <div className="flex justify-center  rounded-full w-[100px] h-[100px] overflow-hidden bg-white ">
                  <img 
                    className="flex w-[80px] h-[100px] "
                    src={userParl?.fotografia} alt={userParl?.__str__} 
                  />
                </div>
                <div className="flex flex-col text-white font-bold">
                  <span className="font-light">
                    usuário: 
                  </span>
                  <span>{userParl?.__str__}</span>
                  <span className="font-light  mt-2">
                    username: 
                  </span>
                  <span>{userParl?.username}</span>
                </div>
                <button onClick={LogoutParl} type="button" className="flex border mt-10 font-bold bg-white hover:bg-gray-200 text-center justify-center rounded-md">
                  SAIR
                </button>
              </div>
            }

          </div>
        </div>
      </div>}
    </div>
  )
}