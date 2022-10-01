import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.scss'

function NavBar(props){
    const logo = 'https://cdn-icons-png.flaticon.com/512/1428/1428724.png';
    const navigate = useNavigate();
    return(
        <header>
            <div className="container">
                <h1 className="logo"></h1>
                
                <img src={logo} alt="Logo Task App" className="logo" width="60" height="70"/>
                <nav>
                    <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#"  >Log Out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;