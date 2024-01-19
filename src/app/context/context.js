'use client'

import { createContext, useContext, useState } from "react"
export const User = createContext()

export const UserProvider = ({ children }) => {
    const [isloggedIn,setIsLoggedIn]=useState(false)
    return (
        <User.Provider value={{isloggedIn ,setIsLoggedIn}}>
            {children}
        </User.Provider>
    )
}

export const UserContext =()=>{
    return useContext(User)
}
