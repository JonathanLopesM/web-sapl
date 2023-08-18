import React, { useContext, useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from './contexts/AuthProvider'
import { Dashboard } from './pages/Dashboard'
import { Session } from './pages/session/[slug]'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Painel } from './pages/PanelPage'
import { NewUser } from './pages/NewUser'
import ModalEdit from './components/NewUser/ModalEdit'
import LoginParl from './pages/LoginParl'
import { ParlDashboard } from './pages/ParlDashboard'
import { DefaultLayoutParl } from './layouts/DefaultLayoutParl'

function App() {
  const Private = ({ children }) => {
    const { authenticated, userParl } = useContext(AuthContext)
    if (!authenticated) {
      if(!userParl){
      return <Navigate to='/' />
      }
    }
    return children
  }
  const ParlPrivate = ({ children }) => {
    const { authenticated, userAdm } = useContext(AuthContext)
    if (!authenticated) {
      if(!userAdm){
        return <Navigate to='/parlamentar' />
      }
    }
    return children
  }

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sessoes' element={<Private><DefaultLayout /></Private>}>
          <Route path='/sessoes' element={<Private> <Dashboard /> </Private>} />
          <Route path='/sessoes/cadastros' element={<NewUser />} />
          <Route path='/sessoes/cadastros/editar/:id' element={<ModalEdit />} />
          <Route path='/sessoes/sessao/:id' element={<Session />} />  
        </Route>
        <Route path='/sessoes/painel' element={<Painel /> } />
        {/* <Route path='/dashboard' element={<Private> <Dashboard  /></Private>} /> */}
        <Route path='/parlamentar' element={<LoginParl />} />
        <Route path='/parlamentar/acesso' element={<ParlPrivate><DefaultLayoutParl /> </ParlPrivate>} >
          <Route path='/parlamentar/acesso/votacao' element={ <ParlDashboard /> } />
        </Route>

      </Routes>
    </AuthProvider>
  )
}

export default App
