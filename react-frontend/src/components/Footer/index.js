import React from 'react';
import "./styles.scss";
import {withRouter, Link} from 'react-router-dom';


const Footer = () => {
    return(
        <div class = "footer-container">
            Icons by <a className = "footer-link" href="https://icons8.com">Icons8</a>
            <Link className = 'footer-link' to='/about'>About</Link>
            <Link className = 'footer-link' to='/contact'>Contact</Link>
        </div>
    )
}

export default withRouter(Footer);
