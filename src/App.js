import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import FetchApi from './components/FetchApi/FetchApi';
import Jumbo from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import Slides from './components/Carousel/Carousel';

// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    // loading: true,
    school: ''
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isLoaded: false,
  //   }
  // }

  async componentDidMount() {
    const url = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`
    const response = await fetch(url);

    const data = await response.json();
    console.log(data)
    this.setState({ school: data.results[0] })


  }


  render() {
    // console.log('test')
    return (

      <div className="App">
        <Jumbo/>
        
        {this.state.school.school ? <p>{this.state.school.school.name}</p> : <p> No School yet</p>}
        {this.state.school.school ? <p>{this.state.school.school.school_url}</p> : <p> No School Url</p>}
        {this.state.school.school ? <p>{this.state.school.school.city}, {this.state.school.school.state}</p> : <p> No School City</p>}
        {this.state.school.school ? <p>{this.state.school.school.zip}</p> : <p> No School Url</p>}
        {this.state.school.school ? <p>{this.state.school.latest.student.size}</p> : <p>Student Size Loading</p>}
        <Slides/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        
        <Footer/>
      </div>
    );
  }
}




export default App;
