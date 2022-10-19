import React from 'react';
import './Dashnav.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import img from '../../utils/recycle.png'
import {CgProfile} from 'react-icons/cg'


function DashNav(){
    return(
        <div className='DashNav'>
            <div className='logo'><img src={img} alt="" /></div>
            <div className='searchField'>
                <FaSearch className='searchicon'/>
                <input type="text" name="" id="" placeholder='Search items and collections'/>
            </div>
            <div className="options">
                <CgProfile  className='ProfilePic'/>
                <button>UserName</button>
                
            </div>
            
        </div>
    )
}

export default DashNav;
