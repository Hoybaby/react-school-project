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
  


  render() {
    // console.log('test')
    return (

      <div className="App">
        <Jumbo/>
        <Slides/>
        <DoughnutChart/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}




export default App;
