import React, { useContext, useMemo } from "react"
import { Header } from "../components/Header"
import { useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import ModalCadastro from "./ModalCadastro"
import ModalEdit from "./ModalEdit"

export function NewUser() {
    const [openCadastro, setOpenCadastro] = useState(false)
    const { SearchParliamen, searchParl, setSearchParl, GetUsers,usersGet, setUsersGet } = useContext(AuthContext)
    
    const [openCadastro2, setOpenCadastro2] = useState()
    const [openEdit, setOpenEdit] = useState(false)

    const [selectUser, setSelectUser] = useState(null)
    console.log(usersGet, "Teste")

    useEffect(()=>{
        GetUsers()
    },[])

    const handleEdit = (userId) => {
        const user2 = usersGet?.resParl.find(par => par.id === userId);

        setSelectUser(user2)

        setTimeout(()=>{
            setOpenEdit(true)
        },2000)
    }
    return (
        <div>
            <Header />
            <ModalCadastro open={openCadastro} setOpen={setOpenCadastro} />
            <ModalEdit openEdit={openEdit} setOpenEdit={setOpenEdit} selectUser={selectUser} />
            <div className="flex flex-col">
                {
                    usersGet &&
                    usersGet?.resParl.map((par:any)=>(
                        <span onClick={()=>handleEdit(par.id)} className="flex gap-8" key={par.id}>
                            {par.nome_completo}
                            <button onClick={()=>setOpenCadastro2(par.id)}>exlcuir</button>
                        </span>
                    ))
                }
            </div>
            <div className="flex flex-col">
                {
                   usersGet && 
                    usersGet?.response.map((par:any)=>(
                        <span onClick={()=>handleEdit(par.id)} className="flex gap-8" key={par.id}>
                            {par.username}
                            <button onClick={()=>setOpenCadastro2(par.id)}>exlcuir</button>
                        </span>
                    ))
                }
            </div>
                <button 
                onClick={() => setOpenCadastro(!openCadastro)}
                className="flex mt-10 rounded-md bg-slate-300 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 mx-auto">Cadastrar Novo Usuário</button>
        </div>
    )
}