import { useState, useEffect } from "react";

const initialState = {
        results: []
    }


export const useDataFetch = () => {
    

    
    const [state, setState] = useState('');

    // const [loading, setLoading] = useState(false);


    // const useDataRender = () => {

    //     const fetchData = () => {
    //     const url = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`
    //     const response = fetch(url);

    //     const data = response.json()
    //     console.log(data)
    //     setState({school: data.results[0]})

    // }


    useEffect( async()=> {
        const response = await fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`)
        const data = await response.json()
        setState({school: data.results[0]})
    },[])


    return {state}
}

    
    
