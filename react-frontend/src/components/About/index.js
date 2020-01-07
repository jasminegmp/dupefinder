import React from 'react';
import './styles.scss';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

// a page
// returns a signup header and form
const AboutPage =() => {
    return(
        <About />  
    )

}

class AboutBase extends React.Component{

  render() {

      return (
        <div class = "container">
          <div class = "box"> <Header/></div>
          <h1>About</h1>
          <div class = "box"><Footer/></div>
        </div>
      )
  }
}


const About = withRouter(AboutBase);

export default AboutPage;
export { About };
