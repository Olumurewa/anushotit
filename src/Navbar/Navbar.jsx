// import { Button } from '@material-ui/core'
import React  from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
                <div className='navbar-container'>
                    <ul className= 'nav-menu'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links'>
                                    About
                                </Link>
                            </li>
                    </ul>

                </div>
            </nav>
    </>
  )
}

export default Navbar;