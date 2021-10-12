import React from 'react';
import { Link } from 'react-router-dom';
import { IoBarbell } from 'react-icons/io5'

const Header = () => {
    return (
        <header>
            <h1><IoBarbell/> Lanni Fitness <IoBarbell/></h1>
            <nav>
                <Link to='/'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/cart'>Cart</Link>
            </nav>
        </header>
    )
};

export default Header;