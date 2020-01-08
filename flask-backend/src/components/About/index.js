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
        <div>
          <div class = "container">
            <div class = "box"> <Header/></div>
          </div>
          <div class = "text-container"> 
            <h1>About</h1>
            <h2>What is ColorDupeFinder?</h2>
            <p>I've always wanted to find cheaper versions of colors of makeup I liked, so I developed this during my week off.
              Use ColorDupeFinder to find different options of makeup for a specific color you like. 
              Maybe it's that shade of lipstick you've been searching for a cheaper option. Or even that specific shade of nail polish you've always been looking for.
            </p>

            <h2>How does it work?</h2>
            <p>
              ColorDupeFinder takes in a color and makeup category that the user wants to find products of similar colors.
              It then queries the Makeup API database for available data on the matching makeup category and all of its colors.
              Using the colors, ColorDupeFinder will measure the similarity between the user targeted color and all the colors available in the database of the makeup category.
            </p>

            <h2>Where did you get the data?</h2>
            <p>I query the <a href = "https://makeup-api.herokuapp.com/">Makeup API</a>.</p>

            <h2>What technologies did you use?</h2>
            <ul>
              <li><a href = "https://reactjs.org/">React</a> for frontend</li>
              <li><a href = "http://flask.palletsprojects.com/en/1.1.x/">Flask</a> for backend</li>
              <li><a href ="https://pandas.pydata.org/">Pandas</a> for data mining</li>
              <li><a href = "https://iro.js.org/">Iro.js</a> for color selector UI</li>
              <li>Icons by <a href = "https://icons8.com/">Icons8</a></li>
            </ul>

            <h2>How did you measure similarity?</h2>
            <p>I measured the Euclidean distance between two colors based on its RGB values. Similarity is then measured as the inverse of the Euclidean distance.</p>

            <h2>Will you implement different measures of similarity?</h2>
            <p> Yes, I am aware there are other (probably better) measures of color similarity based on human perception, for example <a href = "http://scarlet.stanford.edu/~brian/scielab/introduction.html">here</a>.
              Maybe in a future model of the tool, I'll implement a different measure to model similarity between two colors.</p>
          </div>
          <div class = "box"><Footer/></div>
        </div>
      )
  }
}


const About = withRouter(AboutBase);

export default AboutPage;
export { About };
