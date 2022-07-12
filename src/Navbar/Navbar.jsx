// import { Button } from '@material-ui/core'
import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
                <div className='navbar-container'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
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