import React from 'react';
import "./styles.scss";


const Header = () => {
    return(
        <div class = "header-container">
            <a className = "highlight-link" href = "_blank">
                <span class = "header">
                    <span class = "color">Color</span>
                    <span class = "color">Dupe</span>
                    <span class = "finder">Finder</span>
                </span>
            </a>
            <div class = "sub-header">
                Find that shade you've always been looking for
            </div>
        </div>
    )
}

export default Header;
