import React, { useContext } from "react"
import { Header } from "../components/Header"
import { AuthContext } from "../contexts/AuthProvider"
import { Outlet } from "react-router-dom"

export function DefaultLayout () {

  return (
    <div className="flex flex-col mx-10">
      
      <Outlet />
    </div>
  )
}