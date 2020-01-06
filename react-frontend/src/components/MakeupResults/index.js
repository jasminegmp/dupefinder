import React from 'react';
import "./styles.scss";

class MakeupResults extends React.Component{
    constructor(props) {
      super(props);
      
      this.state = {
          result: this.props.response
      };
    }

    render(){
        return(
            <div>
                hi
            </div>
        )
    }
}

export default MakeupResults;
