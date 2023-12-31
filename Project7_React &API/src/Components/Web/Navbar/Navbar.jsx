import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar({user,setUser}) {
  console.log(user,'navbar');
  const logout=()=>{
    localStorage.removeItem('userToken');
    setUser(null); 
  }
  return (

   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">T-shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="products">Products</Link>
        </li>

        {
          user&&
          <>
          <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>
        </>
    
        }

        

      </ul>
<ul className="navbar-nav">
<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>

          <ul className="dropdown-menu">
            {/* <li><a className="dropdown-item" href="#">Register</a></li> */}

            {
              !user?
            <>
            <li><Link to='/register' className="dropdown-item"> Register</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to='/login' className="dropdown-item"> Login</Link></li>
            
            </>
            :
            <>
            <li><Link to='/register' className="dropdown-item"> Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to='/home' onClick={logout}> Logout</Link></li>
            
            </>
            }      

          </ul>
        </li>

</ul>
    </div>
  </div>
</nav>

    
  )
}
