import React, { useContext, useMemo } from "react"
import { Header } from "../components/Header"
import { useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import ModalCadastro from "./ModalCadastro"
import ModalEdit from "./ModalEdit"

export function NewUser() {
    const [openCadastro, setOpenCadastro] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState()
    const { SearchParliamen, searchParl, setSearchParl } = useContext(AuthContext)
    const [selectUser, setSelectUser] = useState({})

    const handleEdit = (userId) => {
        const user2 = searchParl.find((par) => par.id === userId);
        setSelectUser(user2)
        setOpenEdit(true)
        console.log(userId, user2, 'CLICOU')
    }

    // const handleSave = (updatedData) => {
    //     // Lógica para salvar os dados atualizados do usuário
    //     console.log("Dados atualizados do usuário:", updatedData);
    //     // Atualizar os dados na lista de usuários
    //     const updatedUsers = searchParl.map((par) => {
    //         if (par.id === updatedData.id) {
    //             return { ...par, ...updatedData };
    //         }
    //         return par;
    //     });
    //     setSearchParl(updatedUsers);
    //     setOpenCadastro(false);
    // }

    return (
        <div>
            <Header />
            <ModalCadastro open={openCadastro} setOpen={setOpenCadastro} />
            <ModalEdit open={openEdit} setOpen={setOpenEdit} selectUser={selectUser} />

            <button
                onClick={() => setOpenCadastro(!openCadastro)}
                className="flex mt-10 rounded-md bg-slate-300 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 mx-auto">Cadastrar Usuário</button>



            <div className="overflow-auto max-h-[28rem] px-6 mx-5 mt-5 bg-white rounded-xl shadow-xl space-x-4">
                <ul role="list" className="divide-y divide-gray-200">
                    {searchParl && searchParl.map((par: any) => (
                        <li key={par.id} className="flex justify-between py-5">
                            {par.nome_completo}
                            <div className="sm:flex sm:flex-col sm:items-end">
                                <div className="grid grid-cols-3 divide-x">
                                    <button onClick={() => handleEdit(par.id)}>Editar</button>
                                    <button>Excluir</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}