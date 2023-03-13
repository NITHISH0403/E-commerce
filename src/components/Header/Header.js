import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './Header.css';

const Header = ({count}) => {
    return (
        <>
            <div className="header">
                <div className="head">
                    <header>
                        <h1 id="logo">Quick Learn</h1>
                        <nav>
                            <ul id="nav">
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/tutorials">TUTORIALS</Link></li>
                                <li><Link to="/references">REFERENCES</Link></li>
                                <li><Link to="/exercises">EXERCISES</Link></li>
                                <li><Link to="/register" id="register">REGISTER</Link></li>
                                <li><Link to="/login" id="login">LOG IN</Link></li>
                                <li><Link to="/cart" id='cart'><i className='fa fa-shopping-cart'></i><h3 id='count'>{count}</h3></Link></li>
                            </ul>
                        </nav>
                        <Outlet />
                    </header>
                </div> 
                <div id="info">
                    <span>Learn to Code &</span><br></br><span id="highlight">Development</span><br></br><span>Course</span>
                    <p id="content">Quick Learn is optimized for learning, testing, and training.  Examples might be simplified to improve reading and basic understanding.  Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.</p>
                </div>  
            </div>        
        </>
    );
}

export default Header;