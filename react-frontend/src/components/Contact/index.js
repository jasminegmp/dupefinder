import React from 'react';
import './styles.scss';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

// a page
// returns a signup header and form
const ContactPage =() => {
    return(
        <Contact />  
    )

}

class ContactBase extends React.Component{

  render() {

      return (
        <div>
          <div class = "container">
            <div class = "box"> <Header/></div>
          </div>
          <div class = "text-container"> 
            <h1>Contact</h1>
            <p>Developed by Jasmine Gump, 2020</p>
            <p>Check out my website for other work at <a href="jasminegump.com" target = "_blank" rel="noopener noreferrer">jasminegump.com</a></p>
            <p>Email me at <a href="mailto:jasminegmp@gmail.com" target = "_blank" rel="noopener noreferrer">jasminegmp@gmail.com</a></p>
          </div>
          <div class = "box"><Footer/></div>
        </div>
      )
  }
}


const Contact = withRouter(ContactBase);

export default ContactPage;
export { Contact };
