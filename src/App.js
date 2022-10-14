import "./App.css";
import { React, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import LoginView from "./components/views/LoginView";
import Home from "./components/views/Home";
import AuthContextProvider from "./contexts/DataContext";
import {themeReducer, initialState} from './utils/utils'
import {ThemeContext} from "./contexts/ThemeContext";

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <AuthContextProvider>
      <ThemeContext.Provider  value={{ state, dispatch }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </AuthContextProvider>
  );
}

export default App;
