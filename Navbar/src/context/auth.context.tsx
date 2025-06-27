import { createContext, useCallback, useContext, useEffect, useState } from "react"
import type { IUser } from "../interfaces/userInterface"
import $axios from "../http"
import type { IAuthContext } from "../interfaces/authContext"

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({children} : {children:React.ReactNode})=>{
    const [user, setUser] =useState<IUser>({} as IUser)
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        $axios.get('/refresh')
        .then((res)=>{
            setUser(res.data.user)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }, [])

    const logout = useCallback(()=>{
        $axios.post('/post')
        .then((res)=>setUser({}as IUser))
        .catch(err=>console.log(err))
    },[])

    return (
        <AuthContext.Provider value={{user, loading, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = ()=> useContext(AuthContext)