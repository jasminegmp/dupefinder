import React from 'react';
import {withRouter} from 'react-router-dom';
import "./styles.scss";
import Header from '../Header';
import Footer from '../Footer';

const Landing = () => {
    return(
        <div class = "landing">
            <Header/>
            <Footer/>
        </div>
    )
}

export default withRouter(Landing);
