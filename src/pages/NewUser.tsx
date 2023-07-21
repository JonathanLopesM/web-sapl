import React, { useContext } from "react"
import { Header } from "../components/Header"
import { useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import ModalCadastro from "./ModalCadastro"
import { Link } from "react-router-dom"

export function NewUser() {
    const [openCadastro, setOpenCadastro] = useState(false)
    const { GetUsers, usersGet } = useContext(AuthContext)
    console.log(usersGet, "Teste")

    useEffect(() => {
        GetUsers()
    }, [])

    return (
        <div>
            <Header />
            <ModalCadastro open={openCadastro} setOpen={setOpenCadastro} />

            <button
                onClick={() => setOpenCadastro(!openCadastro)}
                className="flex mt-10 rounded-md bg-slate-300 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 mx-auto">
                Cadastrar Usuário
            </button>

            <h2 className="text-center font-bold text-xl mt-7">
                Parlamentares:
            </h2>
            <div className="overflow-auto max-h-[28rem] px-6 mx-5 mt-5 bg-white rounded-xl shadow-xl space-x-4">
                <ul role="list" className="divide-y divide-gray-200">
                    {
                        usersGet && usersGet?.resParl.map((par: any) => (
                            <li key={par.id} className="flex justify-between py-5 hover:bg-gray-100">
                                {par.nome_completo}
                                <div className="flex gap-5 font-semibold">
                                    <Link to={`/sessoes/cadastros/editar/${par.id}`}>
                                        Editar
                                    </Link>
                                    <button>Excluir</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <h2 className="text-center font-bold text-xl mt-7">
                Administradores:
            </h2>
            <div className="overflow-auto max-h-[28rem] px-6 mx-5 mt-5 bg-white rounded-xl shadow-xl space-x-4">
                <ul role="list" className="divide-y divide-gray-200">
                    {usersGet && usersGet?.response.map((par: any) => (
                        <li key={par.id} className="flex justify-between py-5 hover:bg-gray-100">
                            {par.username}
                            <button>
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}