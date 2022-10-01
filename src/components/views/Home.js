import React, { useEffect, useState, useContext } from 'react';
import NavBar from '../NavBar';
import UseFetchGET from '../../utils/useFetchGET';
import { AuthContext } from '../../contexts/DataContext';


function Home() {

    const {tokenUser, setUserToken} = useContext(AuthContext);
    const [inHome, setInHome] = useState({inHome:true});
    const url = 'http://localhost:8080/v1/auth';

    return (
        <div>
            <NavBar />
            <h1>Home...in process</h1>   
        </div>
    )
}


export default Home;