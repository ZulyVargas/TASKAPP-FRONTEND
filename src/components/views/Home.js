import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../NavBar';
import UseFetchGET from '../../utils/useFetchGET';
import { AuthContext } from '../../contexts/DataContext';


function Home() {

    const {userToken,setUserToken,userInfo,setUser }= useContext(AuthContext);
    const [inHome, setInHome] = useState({inHome:true});

    return (
        <div>
            <NavBar />
            <h1>Hello, Welcome + {userToken}</h1>
            <h2>{userInfo.name}</h2>   
        </div>
    )
}


export default Home;