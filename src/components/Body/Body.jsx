import React from 'react'
import './Body.css'

class Body extends React.Component {

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

        <div className='formating'>
            
                <h4>When choosing the right school, knowing the numbers is very important!</h4>   
            
            {/* <div className="row"> */}
                
                    {this.state.school.school ? <p>{this.state.school.school.name}</p> : <p> No School yet</p>}
                    {this.state.school.school ? <p>{this.state.school.school.school_url}</p> : <p> No School Url</p>}
                    {this.state.school.school ? <p>{this.state.school.school.city}, {this.state.school.school.state}</p> : <p> No School City</p>}
                    {this.state.school.school ? <p>{this.state.school.school.zip}</p> : <p> No School Url</p>}
                    {this.state.school.school ? <p>{this.state.school.latest.student.size}</p> : <p>Student Size Loading</p>}
                
            {/* </div> */}

            

            
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
            
            {/* <Footer/> */}
        </div>
        );
    }
}




export default Body;
