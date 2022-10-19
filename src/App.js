import Navbar from './NavBar/Navbar';
import './App.css';
import Homepage from './HomePage/Homepage';
import Login from './Login/Login';
import { useEffect } from 'react';
import Register from './Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

function App() {

  useEffect(() => {
    document.title='SCRAPIFY';
  }, [])
  
  return(
  <Router>
      
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
  </Router>
    
  )
}

export default App;
