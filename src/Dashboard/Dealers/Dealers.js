import React from 'react'
import './Dealers.css'
import img from '../../utils/img.jpg'
import DashNav from '../Dashnav/Dashnav'
import Dashboard from '../Dashboard'
export default function Dealers() {
  return (
    <>
        <Dashboard/>
        <div className='Dealers'>
            <div className="dealer">
                
                <table className='form'>
                    <tr><td>Name</td></tr>
                    <tr><td>Phone no</td></tr>
                    <tr><td>Category</td></tr>
                    <tr><td>ID:</td></tr>
                    <tr><td>Pricing</td></tr>
                </table>
                <center><button className='btn'>More</button></center>
            </div>
            <div className="dealer">
                
                <table className='form'>
                    <tr><td>Name</td></tr>
                    <tr><td>Phone no</td></tr>
                    <tr><td>Category</td></tr>
                    <tr><td>ID:</td></tr>
                    <tr><td>Pricing</td></tr>
                </table>
                <center><button className='btn'>More</button></center>
            </div>
            <div className="dealer">
                <img src={img} alt="" />
                <table className='form'>
                    <tr><td>Name</td></tr>
                    <tr><td>Phone no</td></tr>
                    <tr><td>Category</td></tr>
                    <tr><td>ID:</td></tr>
                    <tr><td>Pricing</td></tr>
                </table>
                <center><button className='btn'>More</button></center>
            </div>
            <div className="dealer">
                <img src={img} alt="" />
                <table className='form'>
                    <tr><td>Name</td></tr>
                    <tr><td>Phone no</td></tr>
                    <tr><td>Category</td></tr>
                    <tr><td>ID:</td></tr>
                    <tr><td>Pricing</td></tr>
                </table>
                <center><button className='btn'>More</button></center>
            </div>
            <div className="dealer">
                <img src={img} alt="" />
                <table className='form'>
                    <tr><td>Name</td></tr>
                    <tr><td>Phone no</td></tr>
                    <tr><td>Category</td></tr>
                    <tr><td>ID:</td></tr>
                    <tr><td>Pricing</td></tr>
                </table>
                <center><button className='btn'>More</button></center>
            </div>
        </div>
    </>
    
  )
}
