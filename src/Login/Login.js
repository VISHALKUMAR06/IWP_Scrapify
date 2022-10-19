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
                  <td>Phone Number</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><input type="text" /></td>
                </tr> 
                <tr>
                  <td>City</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>Pincode</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td colSpan={2}><center><button className='btn'>Confirm and Save</button></center></td>
                </tr>
                </table>
              </center>
            </div>
            
        </div>
      </div>
    </>
  )
}
