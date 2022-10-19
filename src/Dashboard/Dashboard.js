import React from 'react'
import { useState } from 'react';
import CustInfo from './CustInfo/CustInfo';
import './Dashboard.css'
import DashNav from './Dashnav/Dashnav';
export default function Dashboard() {
    const[content,setContent]=useState(2);
    function ChangeButton(id)
    {   
        setContent(id);
        for(let i=1;i<=5;i++)
        {
            let button=document.getElementById(i);
            button.style.background='rgba(255, 255, 255, 0.1)'
        }
        let button=document.getElementById(id);
        button.style.background='linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)'
    }
  return (<>
            <DashNav/>
            <div className='dashboard'>
                <h3>DASHBOARD</h3>
                    <div className="dash_nav">
                        <button id='1' onClick={(e)=>ChangeButton(e.target.id)}>Scrap Dealers</button>
                        <button id='2' onClick={(e)=>ChangeButton(e.target.id)} style={{backgroundImage: `linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)`}}>Customer Info</button>
                        <button id='3' onClick={(e)=>ChangeButton(e.target.id)}>Feedback</button>
                        <button id='4' onClick={(e)=>ChangeButton(e.target.id)}>Invoice</button>
                        <button id='5' onClick={(e)=>ChangeButton(e.target.id)}>Items</button>
                    </div>

                <div  className='dash_content'>
                    {content==2 && <CustInfo/>}
                </div>
            </div>
        </>
    
  )
}
