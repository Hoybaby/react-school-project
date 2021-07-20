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

// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {

//   const [ school, setSchool] = useState('')

//   useEffect(() => {
//     let fetchSchool = () => {
//       fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data.results);
//           setSchool(data.results)
//         },[school]);
//     }
//     fetchSchool()
//   })
//   return (
//     <div className="App">
//       <Jumbo />
//       <Slides />
//       <Body schoolInfo={school} />
//       <Footer schoolInfo={school} />
//     </div>
//   );
// }

const App = () => {
  
  
  // const initialState = {
  //   results: []
  // }

  
  // const [state, setState] = useState(initialState);

  // const [loading, setLoading] = useState(false);


  // const useDataRender = () => {

  //     const fetchData = () => {
  //     const url = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`
  //     const response = fetch(url);

  //     const data = response.json()
  //     console.log(data)
  //     setState({school: data.results[0]})

  // }

    const {state} = useDataFetch();
    console.log(state)


  // useEffect( async()=> {
  //     const response = await fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`)
  //     const data = await response.json()
  //     setState({school: data.results[0]})
  // },[])

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




  // async componentDidMount() {

      
  //   const url = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`
  //   const response = await fetch(url);

  //   const data = await response.json();
  //   console.log(data)
  //   this.setState({ school: data.results[0] })
  // }


//   render() {
//     // console.log('test')
//     return (

//       <div className="App">
//         <Jumbo />
//         <Slides />
//         <Body schoolInfo={this.state.school} />
//         <Footer schoolInfo={this.state.school} />
//       </div>
//     );
//   }
// }




export default App;
