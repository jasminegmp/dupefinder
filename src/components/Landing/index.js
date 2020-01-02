import React from 'react';
import {withRouter} from 'react-router-dom';
import "./styles.scss";
import Header from '../Header';
import ColorPicker from '../ColorPicker';
import MakeupPicker from '../MakeupPicker';
import Footer from '../Footer';

const Landing = () => {
    return(
        <div class = "container">
            <div class = "box"> <Header/></div>
            <h1>Select Color</h1>
            <div class = "box"><ColorPicker/></div>
            <h1>Select Category</h1>
            <div class = "box"><MakeupPicker/></div>
            <div class = "box"><Footer/></div>
        </div>
    )
}

export default withRouter(Landing);
