import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import FetchApi from './components/FetchApi/FetchApi';
import Jumbo from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import Slides from './components/Carousel/Carousel';
import Body from './components/Body/Body';
import DoughnutChart from './components/DoughnutChart/DoughnutChart';

// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  state = {
    // loading: true,
        school: ''
    }
  
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
        <Slides/>
        <Body schoolInfo={this.state.school.school}/>
        <Footer/>
      </div>
    );
  }
}




export default App;
