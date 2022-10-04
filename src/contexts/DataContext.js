import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null); 

const AuthContextProvider = (props) => {

    const [userToken, setToken] = useState("");
    const [userInfo, setUserInfo] = useState({});

    const setUserToken = async (token) => {
        setToken(token);
    }

    const setUser = async (userIn) => {
        setUserInfo(userIn);
    }

    useEffect(() =>{
        try {
        } catch(e){
            console.log(e);
        }
    },[userInfo]);


    return (
        <AuthContext.Provider value = {{
            userToken,
            setUserToken,
            userInfo,
            setUser
        }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;