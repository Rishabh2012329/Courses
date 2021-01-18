import {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Navbar from './Layout/Navbar'
import Home from './Components/Home'

import CourseDetailes from './Components/CourseDetailes'
import { BrowserRouter as Router,Switch,  Route, } from 'react-router-dom'

function App() {
  useEffect(()=>{
  })
  return (
    <Router>
      <div style={{padding:"0",margin:"0",boxSizing:"border-box"}}>
          <Navbar/>
       
          <Switch>
            <Route exact path="/Courses">
              <Home/>
            </Route>
            <Route exact path="/Courses/CourseDetailes/:name">
              <CourseDetailes/>
            </Route>       
          </Switch>
      </div>
    </Router>
  );
}

export default App;
