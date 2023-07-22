import React, { useContext } from "react"
import { Header } from "../components/Header"
import { useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import ModalCadastro from "./ModalCadastro"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'

export function NewUser() {
    const [openCadastro, setOpenCadastro] = useState(false)
    const { GetUsers, usersGet, DeleteUser } = useContext(AuthContext)
    console.log(usersGet, "Teste")
    const { id } = useParams()
    console.log(id, 'useParams')

    useEffect(() => {
        GetUsers()
    }, [])

    const handleDelete = (idDel) => {
        DeleteUser(idDel)
        console.log(idDel, 'idDel NewUser')
    }

    return (
        <div>
            <Header />
            <ModalCadastro open={openCadastro} setOpen={setOpenCadastro} />

            <div className="flex self-center mt-10 gap-[31%]">
                <button
                    onClick={() => setOpenCadastro(!openCadastro)}
                    className="mx-10 rounded-md bg-sky-200 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 justify-left">
                    Cadastrar Usuário
                </button>

                <span className="self-center font-bold text-xl"><h2>
                    Parlamentares:
                </h2>
                </span>
            </div>

            <div className="overflow-auto max-h-[28rem] px-6 mx-5 mt-5 bg-white rounded-xl shadow-xl space-x-4 ">
                <ul role="list" className="divide-y divide-gray-200">
                    {usersGet && usersGet?.resParl.map((par: any) => (
                        <li key={par.id} className="flex justify-between py-5 hover:bg-gray-100 font-semibold">
                            <div className="flex flex-col gap-2">
                                {par.nome_completo}
                                <span className="text-sm font-normal text-indigo-800">
                                    {par.username} </span>
                            </div>
                            <div className="flex gap-10 font-semibold text-blue-600 self-center">
                                <Link className="hover:text-black" to={`/sessoes/cadastros/editar/${par.id}`}>
                                    Editar
                                </Link>
                                <button className="hover:text-black" onClick={() => handleDelete(par.id)}>
                                    Excluir
                                </button>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>

            <h2 className="text-center font-bold text-xl mt-7">
                Administradores:
            </h2>
            <div className="overflow-auto max-h-[28rem] px-6 mx-5 mt-5 bg-white rounded-xl shadow-xl space-x-4 mb-10">
                <ul role="list" className="divide-y divide-gray-200">
                    {usersGet && usersGet?.response.map((par: any) => (
                        <li key={par.id} className="flex justify-between py-5 hover:bg-gray-100">
                            {par.username}
                            <button onClick={() => handleDelete(par.id)} className="hover:text-black font-semibold text-blue-600">
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}