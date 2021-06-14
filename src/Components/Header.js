import React from 'react';
import {Link }from 'react-router-dom';

function Header(){
    return(
        <nav>
           <Link to ="/"> Orders </Link>  |
           <Link to ="/Products"> Products </Link>  |
           <Link to ="/AddProduct"> AddProduct</Link>  |
           <Link to ="/AddOrder"> AddOrder</Link>  |
           <Link to ="/PutProduct">PutProduct</Link>  |
           <Link to ="/PutOrder">PutOrder</Link>   |
           <Link to ="/GetOrderById">GetOrderById</Link>  |
           <Link to ="/Put">Put</Link> 

        </nav>
    );
}

export default Header;