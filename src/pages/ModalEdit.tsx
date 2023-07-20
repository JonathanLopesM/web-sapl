import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import React, { useContext, useMemo } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ModalEdit() {
    const cancelButtonRef = useRef(null)
    const [openEditSearch, setOpenEditSearch] = useState(false)
    interface FormState {
        confirmPass: string
    }

    const { id } = useParams()
    const [user, setUser] = useState({
        username: "",
        password: "",
        active: "",
        nivel: "",
        id: id
    })
    useEffect(() => {
        axios.get('https://api-sapl.onrender.com' + id)
            .then(res => {
                setUser({ ...user, username: res.data.username })
            })
            .catch(err => console.log(err))
    }, [])

    const [formParl, setFormParl] = useState('')
    const [formIdParl, setFormIdParl] = useState()
    const [viewParOptions, setViewParOptions] = useState(false)
    const [pessoas, setPessoas] = useState([])
    const [confirmPass, setConfirmPass] = useState<FormState>({ confirmPass: '' })

    const enviaForm = (event) => {
        event.preventDefault()
        if (formParl === '') {
            alert('Preencha o campo "Parlamentar relacionado"')
            return
        }
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

        // props da funcao
        console.log(user.username, user.password, confirmPass, user.active, user.nivel, formIdParl)
    }



    return (
        <div>
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto">
                <div className="flex flex-col  sm:items-start ">
                    <div className='w-full'>
                        <form
                            action="#"
                            method="post"
                            onSubmit={enviaForm}>
                            <div className="border-b border-gray-900/10 pb-12 w-[95%] mx-auto ">
                                <h2 className="text-center font-semibold leading-7 text-gray-900 text-3xl mt-5">
                                    Editar Usuário
                                </h2>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-w-[900px] mx-auto">

                                    {/* INPUT PARLAMENTAR - ID */}
                                    <div className={`${user.nivel !== '1' ? 'hidden' : ''} sm:col-span-3 relative`}>
                                        <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                            Parlamentar relacionado:
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="id"
                                                name="id"
                                                value={formParl}
                                                onChange={e => { setFormParl(e.target.value); setViewParOptions(true); }}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                                        </div>
                                    </div>

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
                                                onChange={(event) => {
                                                    if (/^[a-zA-Z]*$/.test(event.target.value)) { setUser({ ...user, username: event.target.value.toLocaleLowerCase() }) }
                                                }}
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
                                                type="password"
                                                autoComplete="new-password"
                                                value={user.password}
                                                onChange={(event) => setUser({ ...user, password: event.target.value })}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5"
                                            />
                                        </div>
                                    </div>

                                    {/* INPUT CONFIRMPASS */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                            Confirme a Senha:
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="confirmpass"
                                                name="confirmpass"
                                                type="password"
                                                value={confirmPass.confirmPass}
                                                onChange={(event) => setConfirmPass((prevState) => ({ ...prevState, confirmPass: event.target.value }))}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                                        </div>
                                    </div>

                                    {/* SELECT ACTIVE */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                            Acesso:
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="active"
                                                name="active"
                                                value={user.active}
                                                onChange={(event) => setUser({ ...user, active: event.target.value })}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5">
                                                <option value={0}>Ativo</option>
                                                <option value={1}>Inativo</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="flex mt-10 rounded-md bg-slate-300 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50 mx-auto">
                                    Cadastrar
                                </button>
                            </div>
                            <ul>
                                {pessoas.map((pessoa) => (
                                    <>
                                        <li> Nome - {pessoa.username} </li>
                                        <li> Senha - {pessoa.password} </li>
                                        <li> Ativo - {pessoa.active} </li>
                                        <li> Nivel - {pessoa.nivel} </li>
                                        {/* <li> ID - {pessoa.id} </li> */}
                                        <li>ID - {formIdParl}</li>
                                        <li>Parlamentar - {formParl} </li>
                                        <hr />
                                    </>
                                ))}
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
