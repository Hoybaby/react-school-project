import React from 'react'

function FetchApi() {

    const apiGet =() => {
        fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`)
        .then((response) => response.json())
        .then((json => console.log(json)))
    }
    return (
        <div>
            <h1>Api Info</h1>
            
            <button onClick={apiGet}>Fetch Api</button>
        </div>
    )
}

export default FetchApi;
