import React from 'react'
import './About.css'
import scrap1 from '../utils/scrap-1.png'
export default function About() {
  return (
    <div className='about'>
        <h3>ABOUT US</h3>
        <p className='desc'>one line about the website</p>
        <div className="content">
          <img src={scrap1} alt="" />
          <div className="details">
            <h4>Description</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sint, nulla distinctio dolor obcaecati fugit, natus soluta esse, odit placeat harum id ex quaerat nemo expedita architecto sed! Reiciendis, neque.
            Totam amet tempore exercitationem cupiditate alias reprehenderit dignissimos, assumenda, voluptatem quidem minima, dolor corrupti impedit sapiente. Et saepe officia amet quibusdam dicta, qui vitae ut maiores, harum quidem unde beatae?</p>
            <button>Show More</button>
          </div>
        </div>
    </div>
  )
}
