import './App.css';
import {React} from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginView from './components/views/LoginView';
import Home from './components/views/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<LoginView/>} />
        <Route path = '/login' element = {<LoginView/>} />
        <Route path = '/home' element = {<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
