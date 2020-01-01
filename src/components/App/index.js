import React from 'react';
import './styles.scss';
import Loader from '../Loader';

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        loading: true
    };
  }

  componentDidMount() {
    setTimeout(() =>{ //Start the timer
      this.setState({loading: false}) //After 1 second, set render to true
    }, 3000);
  }

  render() {
      if (this.state.loading) return <Loader/>;
      return (
        <div>HELLO!</div>
      )
  }
}


export default App;
