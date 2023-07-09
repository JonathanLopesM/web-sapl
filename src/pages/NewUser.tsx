import React from "react"
import { Header } from "../components/Header"
import { useState } from "react"
import { UserCircleIcon } from '@heroicons/react/24/solid'

export function NewUser() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        active: "1",
        nivel: "1",
        id: ""
    })

    const [pessoas, setPessoas] = useState([]);

    const enviaForm = (event) => {
        event.preventDefault();
        if (user.username === '') {
            alert('Preencha o campo "Nome"');
            return;
        }
        if (user.email === '') {
            alert('Preencha o campo "E-mail"')
            return;
        }
        if (user.password === '') {
            alert('Preencha o campo "Senha"')
            return;
        }
        // if (user.password !== user.confirmpassword) {
        //     alert('Senhas não conferem. Revise os campos')
        //     return;
        // }
        setPessoas([...pessoas, user]);
    }

    return (
        <div>
            <Header />
            <form
                action="#"
                method="post"
                autoComplete="off"
                onSubmit={enviaForm}>
                <div className="border-b border-gray-900/10 pb-12 w-[95%] mx-auto">
                    <h2 className="text-center font-semibold leading-7 text-gray-900 text-3xl mt-5">Informações Pessoais</h2>

                    {/* UPLOAD FOTO */}
                    {/* <div className="mt-6 flex items-center gap-x-3">
                        <UserCircleIcon
                            className="h-12 w-12 text-gray-300" aria-hidden="true" />
                        <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Alterar
                        </button>
                    </div> */}

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        {/* INPUT FIRST-NAME */}
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    value={user.username}
                                    onChange={(event) => setUser({ ...user, username: event.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                            </div>
                        </div>

                        {/* INPUT LAST-NAME */}
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Sobrenome
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    value={user.username}
                                    onChange={(event) => setUser({ ...user, username: event.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5"
                                />
                            </div>
                        </div>

                        {/* INPUT EMAIL */}
                        {/* <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                E-mail
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={user.email}
                                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                            </div>
                        </div> */}

                        {/* INPUT PASSWORD */}
                        <div className="sm:col-span-3">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Criar Senha de Acesso
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="none"
                                    value={user.password}
                                    onChange={(event) => setUser({ ...user, password: event.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5"
                                />
                            </div>
                        </div>

                        {/* INPUT CONFIRMPASSWORD */}
                        <div className="sm:col-span-3">
                            <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirme a Senha
                            </label>
                            <div className="mt-2">
                                <input
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    type="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                            </div>
                        </div>

                        {/* SELECT ACTIVE */}
                        <div className="sm:col-span-3">
                            <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Ativo / Inativo
                            </label>
                            <div className="mt-2">
                                <select
                                    id="active"
                                    name="active"
                                    value={user.active}
                                    onChange={(event) => setUser({ ...user, active: event.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5">
                                    <option>1 - Ativo</option>
                                    <option>2 - Inativo</option>
                                </select>
                            </div>
                        </div>

                        {/* SELECT NIVEL */}
                        <div className="sm:col-span-3">
                            <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Nível de Acesso
                            </label>
                            <div className="mt-2">
                                <select
                                    id="nivel"
                                    name="nivel"
                                    value={user.nivel}
                                    onChange={(event) => setUser({ ...user, nivel: event.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5">
                                    <option>1 - Parlamentar</option>
                                    <option>2 - Administrador</option>
                                </select>
                            </div>
                        </div>

                        {/* INPUT ID */}
                        <div className="sm:col-span-3">
                            <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                N° de Identificação
                            </label>
                            <div className="mt-2">
                                <input
                                    id="id"
                                    name="id"
                                    type="number"
                                    min={0}
                                    value={user.id}
                                    onChange={(event) => setUser({ ...user, id: event.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="mt-10 rounded-md bg-slate-300 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-50">
                        Cadastrar
                    </button>
                </div>
                <ul>
                    {pessoas.map((pessoa) => (
                        <li>
                            {pessoa.username} - {' '}
                            {pessoa.email} - {' '}
                            {pessoa.password} - {' '}
                            {pessoa.active} - {' '}
                            {pessoa.nivel}
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}
