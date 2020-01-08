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
    // makeup[21] should have similarity rating

    renderItem = (makeup, index) =>{
            if (makeup[21] >= 0.5){
                return(
                    <div class = "makeup-box">
                        <h1>{makeup[3]}</h1>
                        <h2>{makeup[10]}</h2>
                        <div class = "makeup-box-row">
                            <div class = "makeup-box-column">
                                <img src = {makeup[2]} alt = {index}/>
                            </div>
                            <div class = "makeup-box-column">
                                <div class="color-circle" style={{ background: `${makeup[1]}`}}></div>
                            </div>
                            <div class = "makeup-box-column">
                                <h3><em>Color</em> {makeup[0]}</h3>
                                <h3><em>Similarity Score</em> {makeup[21].toFixed(2)}</h3>
                                {makeup[17] === null ? null:
                                    makeup[17].map((tag, i)=>(
                                        <span>{tag}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }  
    }

    render(){
        return(
            <div>
                {this.state.results.map((makeup, index) => this.renderItem(makeup, index))}
            </div>
        )

    }
}

export default MakeupResults;
