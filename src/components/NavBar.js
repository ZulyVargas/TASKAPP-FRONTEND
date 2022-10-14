import {React, useContext} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.scss";
import { ThemeContext } from "../contexts/ThemeContext";



function NavBar(props) {
  const logo = "https://cdn-icons-png.flaticon.com/512/1428/1428724.png";
  const navigate = useNavigate();
  const change = () => {
    navigate("/login");
  };
  const { state, dispatch } = useContext(ThemeContext);
  //Theme:
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = state;
  if (currentTheme) {
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        dispatch("SET_DARK_MODE");
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        dispatch("SET_LIGHT_MODE");
    }    
  }

   

  return (
    <header>
      <div className="container">
        <img
          src={logo}
          alt="Logo Task App"
          className="logo"
          width="60"
          height="70"
        />

        <nav>
          <ul>
            <li>
              {" "}
              <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                  <input onChange={switchTheme} type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
                <em>Change to light</em>
              </div>
            </li>
            <li>
              <a href="/login" alt="Profile">
                Profile
              </a>
            </li>
            <li>
              <a href="/login" alt="Log Out" onClick={change}>
                Log Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
