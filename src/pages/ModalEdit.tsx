<<<<<<< Updated upstream
import React from "react"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from "react"
import { useState } from "react"

export default function ModalEdit({ open, setOpen, selectUser }) {
    const cancelButtonRef = useRef(null)
    console.log(selectUser, 'usuário dentro do modal')

    const [user2, setUser2] = useState()

    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[95%] sm:w-[80%] max-w-[1200px] ">
                                    <div>
                                        <input
                                        type="text"
                                        value={selectUser.nome_completo} />
                                    </div>
=======
import { useRef, useState } from 'react'
import React, { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { Link, Navigate, useParams } from 'react-router-dom'
import { Header } from '../components/Header'

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
        username: filterUserRes[0].username,
        password: filterUserRes[0].password,
        active: filterUserRes[0].active,
    })
    const [pessoas, setPessoas] = useState([])
    const [confirmPass, setConfirmPass] = useState({ confirmPass: filterUserRes[0].password })

    const enviaForm = (event) => {
        event.preventDefault()
        if (user.username === '') {
            alert('Preencha o campo "Username"')
            return
        }
        if (user.password === '') {
            alert('Preencha o campo "Senha de Acesso"')
            return
        }
        if (user.password !== confirmPass.confirmPass) {
            alert('Senhas não conferem. Revise os campos')
            return
        }
        setPessoas([...pessoas, user])
        console.log(pessoas, 'pessoas')
        alert('Edição salva com sucesso!')
        Cadastros()
    }

    return (
        <div>
            <Header />
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto">
                <div className="flex flex-col  sm:items-start ">
                    <div className="border-b border-gray-900/10 pb-12 w-[95%] mx-auto ">
                        <h2 className="text-center font-semibold leading-7 text-gray-900 text-3xl mt-5">
                            Editar Usuário
                        </h2>

                        <div className='w-full'>
                            <form
                                action="#"
                                method="post"
                                onSubmit={enviaForm}>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-w-[900px] mx-auto">

                                    {/* INPUT USERNAME */}
>>>>>>> Stashed changes
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Username:
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
<<<<<<< Updated upstream
                                                value={selectUser.nome_complete}
                                                // onChange={(event) => {
                                                //     if (/^[a-zA-Z]*$/.test(event.target.value)) { setUser({ ...user, username: event.target.value.toLocaleLowerCase() }) }
                                                // }}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
=======
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
                                                value={confirmPass.confirmPass}
                                                onChange={(event) => setConfirmPass((prevState) => ({ ...prevState, confirmPass: event.target.value }))}
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

                                <button
                                    type="submit"
                                    className="flex mt-10 rounded-lg bg-slate-300 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 mx-auto">
                                    Salvar
                                </button>
                            </form>
>>>>>>> Stashed changes
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}