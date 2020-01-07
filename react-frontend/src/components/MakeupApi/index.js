import React from 'react';
import './styles.scss';
import axios from 'axios';
import MakeupResults from '../MakeupResults';
import Loader from '../Loader';

class MakeupApi extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            result: null,
            loading: true,
            query: this.props.query
        };
      }

    componentDidMount(){
        const { query} = this.state
        var myParams = {
            data: query
        }
        var self = this;
        if (query !== "") {
            axios.post('http://127.0.0.1:5000/api/query', myParams)
                .then(function(response){
                    //console.log(response);
                    self.setState({result: response});
                    self.setState({loading: false});
           //Perform action based on response
            })
            .catch(function(error){
                console.log(error);
           //Perform action based on error
            });
        } else {
            alert("The search query cannot be empty")
        }
    }

    render(){
        if(this.state.loading) {
            return <Loader/>;
        } 
        return (
            <div class = "results">
                <h1>Closest Matches</h1>
                <h3>Showing only results of similarity score 0.5 or greater</h3>
                <MakeupResults response = {this.state.result}/>
            </div>
        )
    }
    
}

export default MakeupApi;
