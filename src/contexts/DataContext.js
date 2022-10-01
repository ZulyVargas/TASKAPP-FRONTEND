import React, { createContext, useState } from "react";

export const AuthContext = createContext(null); 

const AuthContextProvider = (props) => {

    const [tokenUser, setToken ] = useState({tokenUser:''});
    
    const setUserToken = (token) => {
        setToken({tokenUser: token});
    }

    return (
        <AuthContext.Provider value = {{
            tokenUser,
            setUserToken
        }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;