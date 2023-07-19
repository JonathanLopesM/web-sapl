import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import React, { useContext, useMemo } from "react"
import { AuthContext } from "../../contexts/AuthProvider/index"

export default function ModalCadastro({ open, setOpen }) {

    const cancelButtonRef = useRef(null)
    const [openSearch, setOpenSearch] = useState(false)

    const { SearchParliamen, searchParl, setSearchParl } = useContext(AuthContext)
    interface FormState {
        confirmPass: string
    }

    const [formParl, setFormParl] = useState('')
    const [formIdParl, setFormIdParl] = useState()
    const [viewParOptions, setViewParOptions] = useState(false)
    const [pessoas, setPessoas] = useState([])
    const [confirmPass, setConfirmPass] = useState<FormState>({ confirmPass: '' })
    const [user, setUser] = useState({
        username: "",
        password: "",
        active: "0",
        nivel: "1",
        id: {formIdParl}
    })
    useEffect(() => {
        //Função de busca dos parlamentares na api
        SearchParliamen()
    }, [])

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

        // Limpar os <input> após realizar cadastro
        setConfirmPass({ confirmPass: '' })
        setUser({
            username: '',
            password: '',
            active: '0',
            nivel: '1',
            id: {formIdParl}
        })
    }

    const filterNameParlm = useMemo(() => {
        const lowerCaseName = formParl.toLowerCase()
        return searchParl ? searchParl.filter(par => par.nome_completo.toLowerCase().includes(lowerCaseName)) : []
    }, [formParl, searchParl])

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
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[95%] sm:w-[80%] max-w-[1200px] ">
                                    <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mx-auto">
                                        <div className="flex flex-col  sm:items-start ">
                                            <div>
                                                <form
                                                    action="#"
                                                    method="post"
                                                    onSubmit={enviaForm}>
                                                    <div className="border-b border-gray-900/10 pb-12 w-[95%] mx-auto ">
                                                        <h2 className="text-center font-semibold leading-7 text-gray-900 text-3xl mt-5">Informações Pessoais</h2>

                                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-w-[900px] mx-auto">

                                                            {/* SELECT NIVEL */}
                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Tipo de Usuário:
                                                                </label>
                                                                <div className="mt-2">
                                                                    <select
                                                                        id="nivel"
                                                                        name="nivel"
                                                                        value={user.nivel}
                                                                        onChange={(event) => setUser({ ...user, nivel: event.target.value })}
                                                                        className="flex w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4">
                                                                        <option value={1}> Parlamentar</option>
                                                                        <option value={2}> Sub-Administrador</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <br />

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
                                                                {
                                                                    viewParOptions && formParl.length > 0 &&
                                                                    <div className="absolute border py-2 h-28 bg-white w-full">
                                                                        <ul className="flex flex-col overflow-auto h-24">
                                                                            {filterNameParlm && filterNameParlm.map(par => (
                                                                                <li onClick={() => { setFormIdParl(par.id); setFormParl(par.nome_completo); setViewParOptions(false) }} className="flex hover:bg-slate-100 cursor-pointer px-4">
                                                                                    {par.nome_completo}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                }
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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}