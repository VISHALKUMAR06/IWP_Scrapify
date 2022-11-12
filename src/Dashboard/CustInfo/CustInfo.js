import React from 'react'
import {CgProfile} from 'react-icons/cg'
import Dashboard from '../Dashboard'
import './CustInfo.css'
export default function CustInfo() {
  return (
    <>
      <Dashboard/>
      <div className="dash_content">
        <div className='custInfo'>
                <center><CgProfile size={'30%'}/></center>
                <center><button className='btn'>Sidharth Sudheer</button></center>
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
