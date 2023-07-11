import React, { useContext, useMemo } from "react"
import { Header } from "../components/Header"
import { useState, useEffect } from "react"
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from "../contexts/AuthProvider"

export function NewUser() {
    const { SearchParliamen,searchParl, setSearchParl} = useContext(AuthContext)
    interface FormState {
        confirmPass: string
    }
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [pessoas, setPessoas] = useState([])
    const [confirmPass, setConfirmPass] = useState<FormState>({ confirmPass: '' })
    const newUsername = firstName + lastName
    const [user, setUser] = useState({
        username: newUsername,
        email: "",
        password: "",
        active: "2",
        nivel: "1",
        id: ""
    })
    const [formParl, setFormParl] = useState('')
    const [formIdParl,setFormIdParl] = useState()
    const [viewParOptions, setViewParOptions] = useState(false)
    useEffect(()=>{
        //Função de busca dos parlamentares na api
        SearchParliamen()
    },[])

    useEffect(() => {
        const newUsername = firstName + lastName
        setUser((prevUser) => ({ ...prevUser, username: newUsername.toLowerCase() }))
    }, [firstName, lastName])

    const enviaForm = (event) => {
        event.preventDefault()
        if (firstName === '') {
            alert('Preencha o campo "Nome"');
            return
        }
        if (lastName === '') {
            alert('Preencha o campo "Sobrenome"');
            return
        }
        // if (user.email === '') {
        //     alert('Preencha o campo "E-mail"')
        //     return;
        // }
        if (user.password === '') {
            alert('Preencha o campo "Senha"')
            return
        }
        if (user.password !== confirmPass.confirmPass) {
            alert('Senhas não conferem. Revise os campos')
            return
        }
        if (user.id === '') {
            alert('Preencha o campo "N° de Identificação"')
            return
        }
        setPessoas([...pessoas, user])

        // props da funcao
        console.log(user.username, user.password, confirmPass, user.active, user.nivel, formIdParl)

        // Limpar os <input> após realizar cadastro
        setFirstName('')
        setLastName('')
        setConfirmPass({ confirmPass: '' })
        setUser({
            username: '',
            email: '',
            password: '',
            active: '',
            nivel: '',
            id: ''
        })
    }

    const filterNameParlm = useMemo(()=>{
        const lowerCaseName = formParl.toLowerCase()
        return searchParl ? searchParl.filter(par => par.nome_completo.toLowerCase().includes(lowerCaseName)) : []
    }, [ formParl, searchParl])

    return (
        <div>
            <Header />
            <form
                action="#"
                method="post"
                onSubmit={enviaForm}>
                <div className="border-b border-gray-900/10 pb-12 w-[95%] mx-auto ">
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
                                    onChange={(event) => { const nivelValue = event.target.value; if (nivelValue === "1" || nivelValue === "2") { setUser({ ...user, nivel: nivelValue }) } }}
                                    className="flex w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4">
                                    <option value={1}> Parlamentar</option>
                                    <option value={2}> Sub-Administrador</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        {/* INPUT ID */}
                        <div className={`${user.nivel !== '1' ? 'hidden' : ''} sm:col-span-3 relative`}>
                            <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Parlamentar relacionado:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="id"
                                    name="id"
                                    value={formParl}
                                    onChange={e => {setFormParl(e.target.value); setViewParOptions(true);}}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                            </div>
                            {
                                viewParOptions && formParl.length > 0 &&
                                <div className="absolute border py-2 h-28 bg-white w-full">
                                    <ul className="flex flex-col overflow-auto h-24">
                                        {filterNameParlm && filterNameParlm.map(par => (
                                            <li onClick={()=>{setFormIdParl(par.id); setFormParl(par.nome_completo); setViewParOptions(false)}} className="flex hover:bg-slate-100 cursor-pointer px-4">
                                                {par.nome_completo}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                        {/* INPUT FIRST-NAME */}
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Username:
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    value={firstName}
                                    onChange={(event) => {
                                        // const firstNameValue = event.target.value;
                                        if (/^[a-zA-Z]*$/.test(event.target.value)) { setFirstName(event.target.value) }
                                    }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                            </div>
                        </div>

                        {/* INPUT LAST-NAME */}
                        {/* <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Sobrenome:
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    value={lastName}
                                    onChange={(event) => {
                                        const lastNameValue = event.target.value;
                                        if (/^[a-zA-Z]*$/.test(lastNameValue)) { setLastName(lastNameValue) }
                                    }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5"
                                />
                            </div>
                        </div> */}

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
                                    autoComplete="new-email"
                                    value={user.email}
                                    onChange={(event) => setUser({ ...user, email: event.target.value })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5" />
                            </div>
                        </div> */}

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
                                    onChange={(event) => { const activeValue = event.target.value; if (activeValue === "1" || activeValue === "2") { setUser({ ...user, active: event.target.value }) } }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2.5">
                                    <option value="0">Ativo</option>
                                    <option value="1">Inativo</option>
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
                            <li> Email - {pessoa.email} </li>
                            <li> Senha - {pessoa.password} </li>
                            <li> Ativo - {pessoa.active} </li>
                            <li> Nivel - {pessoa.nivel} </li>
                            <li> ID - {pessoa.id} </li>
                            <li>{firstName}</li>
                            <li>{lastName}</li>
                            <li>{newUsername}</li>
                            <hr />
                        </>
                    ))}
                </ul>
            </form>
        </div>
    )
}
