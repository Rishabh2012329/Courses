import {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Navbar from './Layout/Navbar'
import Home from './Components/Home'

function App() {
  useEffect(()=>{
  })
  return (
    <div style={{padding:"0",margin:"0",boxSizing:"border-box",overflow:"hidden"}}>
        <Navbar/>
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
