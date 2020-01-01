import React from 'react';
import {withRouter} from 'react-router-dom';
import "./styles.scss";
import Header from '../Header';

const Landing = () => {
    return(
        <div class = "landing">
            <Header/>
        </div>
    )
}

export default withRouter(Landing);
