import React from 'react'

class FetchApi extends React.Component {

    state = {
        // loading: true,
        school: null
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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         error: null,
    //         isLoaded: false,
    //         items: []
    //     };
    // }
    // componentDidMount() {
    //     fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     items: result[0]
    //                 });
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }

    render() {
        return (
            <ul>
                <li>{this.state.school.school.name}</li>
            </ul>
        )
    }

    // const apiGet =() => {
    //     fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`)
    //     .then((response) => response.json())
    //     .then((json => console.log(json)))
    // }


}

export default FetchApi;