import React from 'react'
import "../App.css"
import  logo from "../pen&paper.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
  <Link to="/Landingpage" className="holder-logo">
        <img className='logo img-fluid custom-logo' src={logo}></img>
      </Link>
      <Link class="navbar-brand" to="/Landingpage">ResumeCrafter</Link>
    <div className="d-flex justify-content-end .align-items-center mx-2 collapse navbar-collapse" id="navbarNav">
      <ul className="nav">
        <li className="nav-item mx-4">
          <Link className="nav-link active fs-5" aria-current="page" to="/Getstarted">Resume Templates</Link>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link fs-5" to="/Previewresume">PreviewResume</Link>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link fs-5" to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
