import Nav from './Nav';
import React from 'react';
import Logo from '../images/Logo.png';


const Header = () => {

return ( 

    <>           
        <header> 
            <img src={Logo} alt="logo"/>  
            <Nav/>
        </header>
    </>
)

}

export default Header;