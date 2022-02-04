import React, {createContext, useState} from 'react'


export const AuthContext = createContext();

export function AuthProvider(props) {
    const [auth, setAuth] = useState(localStorage.getItem("userId") ? true : false);
    const [archon, setArchon] = useState(localStorage.getItem(""));
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    )
}