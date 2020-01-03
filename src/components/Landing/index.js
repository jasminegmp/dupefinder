import React from 'react';
import {withRouter} from 'react-router-dom';
import "./styles.scss";
import Header from '../Header';
import ColorPicker from '../ColorPicker';
import MakeupPicker from '../MakeupPicker';
import "../Button/styles.scss";
import Footer from '../Footer';
import MakeupApi from '../MakeupApi';

class Landing extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {
          submit: false,
          makeup: null
      };
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        this.setState({submit:true});
    }

    updateMakeup = (makeup) => {
        //console.log(makeup);
        this.setState({makeup});
    }

    render(){
        const {submit, makeup} = this.state;
        return(
            <div class = "container">
                <div class = "box"> <Header/></div>
                <h1>Select Color</h1>
                <div class = "box"><ColorPicker/></div>
                <h1>Select Category</h1>
                <div class = "box"><MakeupPicker updateMakeup={this.updateMakeup}/></div>
                <div class = "box center"><button onClick = {this.handleSubmit}>Search</button></div>
                {submit ? <MakeupApi makeup = {makeup}/> : null}
                <div class = "box"><Footer/></div>
            </div>
        )
    }
}

export default withRouter(Landing);
