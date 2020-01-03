import React from 'react';
import "./styles.scss";


const Header = () => {
    return(
        <div class = "header-container">
            <a className = "highlight-link" href = "_blank">
                <span class = "header">
                    <span class = "dupe">Dupe</span>
                    <span class = "finder">Finder</span>
                </span>
            </a>
            <div class = "sub-header">
                Find your ideal makeup
            </div>
        </div>
    )
}

export default Header;
