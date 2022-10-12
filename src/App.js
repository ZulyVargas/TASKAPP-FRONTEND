import "./App.css";
import { React } from "react";
import { Routes, Route } from "react-router-dom";
import LoginView from "./components/views/LoginView";
import Home from "./components/views/Home";
import AuthContextProvider from "./contexts/DataContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
