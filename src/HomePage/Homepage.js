import React from "react";
import './Homepage.css'
import scrap1 from '../utils/scrap-3.png'
import scrap2 from '../utils/scrap-4.png'
import scrap3 from '../utils/scrap-2.png'
import About from "../About/About";
import Navbar from "../NavBar/Navbar";
function Homepage(){
    return(<>
        <Navbar/>
        <div className="homepage">
            <div className="tiles">
                <div className="tile1">
                <h2>SCRAPIFY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
                <button>Explore Now</button>
                <div className="achievements">
                    <div className="achievement">
                        <p className="Number">37k+</p>
                        <p className="detail">Scrap Dealers</p>
                    </div>
                    <div className="achievement">
                        <p className="Number">20k+</p>
                        <p className="detail">Customers</p>
                    </div>
                    <div className="achievement">
                        <p className="Number">99k+</p>
                        <p className="detail">Outreach</p>
                    </div>
                    
                </div>
            </div>
            <div className="tile2">
                <div className="tile2_flex">
                    <img src={scrap2} alt="" />
                    <img src={scrap1} alt="" />
                </div>
                
                <img  style={{height:'45%'}} src={scrap3} alt="" />
            </div>
            </div>
            
        </div>

        <About/>
    </>
    )
}

export default Homepage;