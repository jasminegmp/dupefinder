import React from 'react';
import "./styles.scss";
import {withRouter, Link} from 'react-router-dom';

const Header = () => {
    return(
        <div class = "header-container">
            <Link className = 'highlight-link' to='/'>
                <span class = "header">
                    <span class = "color">Color</span>
                    <span class = "color">Dupe</span>
                    <span class = "finder">Finder</span>
                </span>
            </Link>
            <div class = "sub-header">
                Find that shade you have always been looking for
            </div>
        </div>
    )
}

export default withRouter(Header);
