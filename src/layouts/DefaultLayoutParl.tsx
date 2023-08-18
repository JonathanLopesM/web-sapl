import React, { useContext, useEffect } from "react"
import { Header } from "../components/Header"
import { AuthContext } from "../contexts/AuthProvider"
import { Outlet, useNavigate } from "react-router-dom"

export function DefaultLayoutParl () {
  const { userParl, setUserParl } = useContext(AuthContext)
  const navigate= useNavigate()
  useEffect(()=>{
    if(!userParl){
      const user = localStorage.getItem("novace@userParl")
      setUserParl(JSON.parse(user))
      if(!user){
        navigate("/")
      }
    }
  },[])
console.log()
  return (
    <div className="flex flex-col">
      
      <Outlet />
    </div>
  )
}