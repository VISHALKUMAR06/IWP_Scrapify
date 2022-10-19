import React from 'react'
import Navbar from '../NavBar/Navbar'
import './Register.css'
export default function Register() {
  return (
    <>
      <Navbar/>
      <div className="loginbg">
        <center><h3>REGISTER</h3></center>
        <div className="login">
            <div className='form'>
              <center>
                <table>
                <tr>
                  <td>Name</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><input type="text" /></td>
                </tr> 
                <tr>
                  <td>Password</td>
                  <td><input type="password" /></td>
                </tr>
                <tr>
                  <td>Repeat Password</td>
                  <td><input type="password" /></td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td>Pincode</td>
                  <td><input type="number" /></td>
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
