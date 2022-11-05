import React from 'react'
import Navbar from '../NavBar/Navbar'
import './Login.css'
export default function Login() {
  return (
    <>
      <Navbar/>
      <div className="loginbg">
        <center><h3>LOGIN</h3></center>
        <div className="login">
            <div className='form'>
              <center>
                <table>
                
                <tr>
                  <td>Email</td>
                  <td><input type="text" /></td>
                </tr> 
               
                <tr>
                  <td>Password</td>
                  <td><input type="password" /></td>
                </tr>
                <tr>
                  <td colSpan={2}><center><button className='btn'>Login</button></center></td>
                </tr>
                </table>
              </center>
            </div>
            
        </div>
      </div>
    </>
  )
}
