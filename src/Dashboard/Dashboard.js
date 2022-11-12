import React from 'react'
import './Dashboard.css'
import DashNav from './Dashnav/Dashnav';
import { Link } from 'react-router-dom';
export default function Dashboard(id=2) {

    
        
        // for(let i=1;i<=2;i++)
        // {
        //     let button=document.getElementById(i);
        //     button.style.background='rgba(255, 255, 255, 0.1)'
        // }
        // let button=document.getElementById(id);
        // button.style.background='linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)'
    
  return (<>
            <DashNav/>
            <div className='dashboard'>
                <h3>DASHBOARD</h3>
                    <div className="dash_nav">
                    <Link to='/Dashboard/Dealers'><button id="1">Scrap Dealers</button></Link>
                    <Link to='/Dashboard/Customer'><button id="2">Customer Info</button></Link>
                        
                    </div>
            </div>
        </>
    
  )
}
