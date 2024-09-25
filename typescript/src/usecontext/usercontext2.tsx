
import React, { useState, createContext } from "react";

export type Authuser = {
    name: string
    email: string
}

type UserContextprops = {
    children: React.ReactNode
}

type usertype = {
    user: Authuser | null
    setuser: React.Dispatch<React.SetStateAction<Authuser | null>>
}

export const UserContext = createContext<usertype | null>(null)
export const UserContextProvider = ({ children }: UserContextprops) => {

    const [user, setuser] = useState<Authuser | null>(null)
    return (
        <UserContext.Provider value={{ user, setuser }}>{children}</UserContext.Provider>
    )
}