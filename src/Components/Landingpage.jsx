import React from 'react'
import logo from "../pen&paper.png";
import "../App.css"
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
          <div className="container d-flex justify-content-center my-5 align-items-center">          
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h1>Create a CV that stands out</h1>
              <p >Create a CV that perfectally describes your skils and match job profile.</p>
              <br></br>
               <div>
                 <img src={logo}   className=" img-fluid custom-logo2" alt="logo" />
              </div> 
                 <Link type="button" to="/Getstarted" class="btn btn-primary my-5 landingbtn">Get Started</Link>
             </div>    
          </div>
    </>
  )
}

export default Landingpage
