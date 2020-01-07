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
          makeup: null,
          color: '#ffffff',
          error: null
      };
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        if (this.state.makeup === null){
            this.setState({error:'Error: Please select a category'});
        }
        else{
            this.setState({submit:true});
        }
        
    }

    updateColor = (color) => {
        //console.log(makeup);
        this.setState({color});
        this.setState({submit:false});
    }

    updateMakeup = (makeup) => {
        //console.log(makeup);
        this.setState({makeup});
        this.setState({submit:false});
        this.setState({error:null});
    }


    render(){
        const {submit, makeup, color, error} = this.state;
        const query = [makeup, color];
        return(
            <div class = "container">
                <div class = "box"> <Header/></div>
                <h1>Select Color</h1>
                <div class = "box"><ColorPicker updateColor={this.updateColor}/></div>
                <h1>Select Category</h1>
                <div class = "box"><MakeupPicker updateMakeup={this.updateMakeup}/></div>
                <div class = "box center"><button onClick = {this.handleSubmit}>Search</button></div>
                {submit ? <MakeupApi query = {[makeup, color]}/> : null}
                {error ? <div class = "error center">{error}</div> : null}
                <div class = "box"><Footer/></div>
            </div>
        )
    }
}

export default withRouter(Landing);
