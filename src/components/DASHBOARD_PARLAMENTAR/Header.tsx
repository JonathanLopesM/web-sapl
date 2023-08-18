import React, { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserCircleIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from "react-router-dom"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header({openSidebar, setOpenSidebar, page}) {

  const { Cadastros } = useContext(AuthContext)
  const { MenuInicial } = useContext(AuthContext)
  const navigate = useNavigate()
  function handleLogout () {
      localStorage.removeItem('sessionid')
      navigate('/parlamentar')
  }
  function handleHome(){
    navigate('/parlamentar')
  }
  return (
    <div>
      <Disclosure as="nav" className=" py-5 border">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-[900px] px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {page == "vote" && <Link to='/parlamentar'><ChevronLeftIcon className="flex w-8 text-gray-400" /></Link>}
                <div className={`flex flex-1 items-center justify-center ${page != "vote" && "sm:items-stretch sm:justify-start"}`}>
                  <div className="flex flex-shrink-0 items-center">
                    <Link to='/parlamentar'>
                    <img className="block h-14 w-auto lg:h-16"
                      src="/novace_logo.png"
                      alt="Logo Novace" />
                      </Link>
                  </div>
                </div>

                <div className=" inset-y-0 left-0 flex items-center ">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span  className="sr-only">Open main menu</span>
                    {openSidebar ? (
                      <XMarkIcon onClick={()=>setOpenSidebar(!openSidebar)} className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon onClick={()=>setOpenSidebar(!openSidebar)} className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* <div className="hidden inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Abrir Menu</span>
                        <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none self-center">
                        <Menu.Item>
                          {({ active }) => (
                            <button className={classNames(active ? 'bg-gray-100' : '', 'block w-full px-4 py-2 text-sm text-gray-700')} onClick={MenuInicial}> Menu Principal </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button className={classNames(active ? 'bg-gray-100' : '', 'block w-full px-4 py-2 text-sm text-gray-700')} onClick={Cadastros}> Cadastros </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button className={classNames(active ? 'bg-gray-100' : '', 'block w-full px-4 py-2 text-sm text-gray-700')} 
                            onClick={handleLogout}>
                               Sair 
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div> */}
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  )
}