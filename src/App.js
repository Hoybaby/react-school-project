import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import FetchApi from './components/FetchApi/FetchApi';
import Jumbo from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import Slides from './components/Carousel/Carousel';
import Body from './components/Body/Body';
import DoughnutChart from './components/DoughnutChartProgram/DoughnutChart';


// API information possible
import API from './API';

import {useDataFetch} from './API'



const App = () => {
  
    const {state} = useDataFetch();
    console.log(state)

  console.log(state)
  return (
    <div className="App">
        <Jumbo />
        <Slides />
        <Body schoolInfo={state.school} />
        <Footer schoolInfo={state.school} />
      </div>
  )
}


export default App;
