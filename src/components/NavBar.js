import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.scss";

function NavBar(props) {
  const logo = "https://cdn-icons-png.flaticon.com/512/1428/1428724.png";
  const navigate = useNavigate();
  const change = () => {
    navigate("/login");
  };
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
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round"></div>
                </label>
                <em>Change theme</em>
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
