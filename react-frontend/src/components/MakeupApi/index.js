import React from 'react';
import './styles.scss';
import axios from 'axios';

function MakeupApi(query){

    var myParams = {
        data: query
    }

    if (query != "") {
        axios.post('http://127.0.0.1:5000/api/query', myParams)
            .then(function(response){
                console.log(response);
                //this.props.response(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
    } else {
        alert("The search query cannot be empty")
    }
    return (<div>test</div>)
}

export default MakeupApi;
