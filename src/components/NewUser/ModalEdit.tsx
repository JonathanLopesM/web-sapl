import { useState } from 'react'
import React, { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'

export default function ModalEdit() {
    const { usersGet, Cadastros } = useContext(AuthContext)
    console.log(usersGet.resParl, "usersGet.resParl")
    const { id } = useParams()

    const filterUserRes = usersGet.resParl.filter((fil) => {
        if (fil.id == id) {
            return fil
        }
        return
    })
    console.log(filterUserRes, 'filterUserRes')

    const [user, setUser] = useState({
        id: filterUserRes[0]._id,
        username: filterUserRes[0].username,
        password: '',
        confirmPass: '',
        active: filterUserRes[0].active,
    })

    const enviaForm = (event) => {
        event.preventDefault()
        if (user.username === '') {
            alert('Preencha o campo "Username"')
            return
        }
        if (user.password !== '') {
            if (user.password === '') {
            alert('Preencha o campo "Senha de Acesso"')
            return
            }
        }
        if (user.password !== user.confirmPass) {
            alert('Senhas não conferem. Revise os campos')
            return
        }
        console.log(user, 'useState: user')
        alert('Edição salva com sucesso!')
        Cadastros()
    }

    return (
        <div>
            <Header />
            <div className=" bg-white px-4 pt-5 sm:p-6 sm:pb-4 mx-auto flex flex-col sm:items-start border-b border-gray-900/10 pb-12 w-[95%]">
                <h2 className="self-center font-semibold leading-7 text-gray-900 text-3xl mt-5 underline tracking-wider">
                    Editar Usuário
                </h2>

                <div className='w-full'>
                    <form
                        action="#"
                        method="post"
                        onSubmit={enviaForm}>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-w-[900px] mx-auto">

                            {/* INPUT USERNAME */}
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        value={user.username}
                                        onChange={(event) => setUser({ ...user, username: event.target.value.toLocaleLowerCase() })}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                                </div>
                            </div>

                            {/* INPUT PASSWORD */}
                            <div className="sm:col-span-3">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Senha de Acesso:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="text"
                                        autoComplete="new-password"
                                        placeholder='* Opcional'
                                        value={user.password}
                                        onChange={(event) => setUser({ ...user, password: event.target.value })}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5"
                                    />
                                </div>
                            </div>

                            {/* INPUT CONFIRMPASS */}
                            <div className="sm:col-span-3">
                                <label htmlFor="confirmpass" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirme a Senha:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="confirmpass"
                                        name="confirmpass"
                                        type="text"
                                        value={user.confirmPass}
                                        onChange={(event) => setUser({ ...user, confirmPass: event.target.value})}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                                </div>
                            </div>

                            {/* SELECT ACTIVE */}
                            <div className="sm:col-span-3">
                                <label htmlFor="active" className="block text-sm font-medium leading-6 text-gray-900">
                                    Acesso:
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="active"
                                        name="active"
                                        value={user.active}
                                        onChange={(event) => setUser({ ...user, active: event.target.value })}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5">
                                        <option value={0}>Inativo</option>
                                        <option value={1}>Ativo</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row justify-center gap-7'>
                            <button
                                type="submit"
                                className="flex mt-10 rounded-md bg-sky-200 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 ">
                                Salvar
                            </button>
                            <button className="flex mt-10 rounded-md bg-sky-200 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 "
                                onClick={Cadastros}>
                                Voltar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
