import React from 'react';
import './styles.scss';
import axios from 'axios';
/*
class MakeupAnalysis extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            color: this.props.color,
            makeup: this.props.makeup,
            color: [],
            results: null
        };
    }

    async componentDidMount(){
 
    }



    render() {
        return (
            <div>
                {this.props.data.map((item, index) => (
                    <div key={index}>
                    <h1>{item.name}</h1>
                    {item.product_colors.map((c, i) => (
                        <div key={i}>
                        <h3>{c.colour_name}</h3>
                        <h3>{c.hex_value}</h3>
                        <img src = {c.image_link}/>
                        <hr />
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        );
    }
}
*/

function MakeupAnalysis(query){

    var myParams = {
        data: query
    }

    if (query != "") {
        axios.post('http://127.0.0.1:5000/api/query', myParams)
            .then(function(response){
                console.log(response);
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

export default MakeupAnalysis;

