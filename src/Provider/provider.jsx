import React from 'react'
import {db, auth, firebase} from '../Firebase/firebase'
import { BrowserRouter as router, Switch, Route, Link, useHistory } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext({
    user: null,
    userReady: false,
    email:null,
})
export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        userReady: false,
        email:null
    })

    useEffect(() => {
        if (!auth) {
            return
        }
        const subscribe = auth.onAuthStateChanged((user) => {
            user ? setState({user:user,email:user.email , userReady: true }) : setState({ userReady: false,user: null,email:null})
        });
        return () => subscribe()
    }, [auth])
    return (
        <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
    )
}
