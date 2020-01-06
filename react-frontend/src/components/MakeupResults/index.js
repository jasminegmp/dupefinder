import React from 'react';
import "./styles.scss";

class MakeupResults extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {
          results: this.props.response.data.data,
          columns: this.props.response.data.columns
      };
    }

    render(){
        return(
            <div>
                <h1>Closest Matches</h1>
                {this.state.results.map((makeup, index) => (
                    <div class = "makeup-box">
                        <h1>Brand: {makeup[3]}</h1>
                        <h2>Name: {makeup[10]}</h2>
                        <img src = {makeup[2]} alt = {index}/>
                        <div class="color-circle" style={{ background: `${makeup[1]}`}}></div>
                        <h2>Color Name: {makeup[0]}</h2>
                        <h5>Price {makeup[11]}</h5>
                        {makeup[17] === null ? null:
                            makeup[17].map((tag, i)=>(
                                <h6>{tag}</h6>
                            ))
                        }
                    </div>
                ))}
                
            </div>
        )
    }
}

export default MakeupResults;
