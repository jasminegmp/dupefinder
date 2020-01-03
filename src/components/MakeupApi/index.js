import React from 'react';
import './styles.scss';
import axios from 'axios';

class MakeupApi extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            color: this.props.color,
            makeup: this.props.makeup,
        };
    }

	async componentDidMount(){
        const {makeup} = this.state;
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${makeup}`)
        .then(res => {
          const data = res.data;
          this.setState({ data });
        }) 
	}
      

    render() {
        return (
            <div>{this.props.makeup}</div>
        );
    }
}


export default MakeupApi;
