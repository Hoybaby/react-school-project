import React from 'react'
import DoughnutChartProgram from '../DoughnutChartProgram/DoughnutChart';
import DoughnutChartRace from '../DoughnutChartRace/DoughnutChartRace';


import './Body.css'


class Body extends React.Component {

    constructor(props){
        super(props);
        
    }

    // async componentDidMount() {
    //     const url = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=${process.env.REACT_APP_CLIENT_APIKEY}`
    //     const response = await fetch(url);

    //     const data = await response.json();
    //     console.log(data)
    //     this.setState({ school: data.results[0] })
    // }


    render() {
        // console.log('test')
        return (

        <div className='formatting'>
            <div className="container">
                <div className="row">
                    <div className="column sm-4">
                        <DoughnutChartProgram />
                        <p>
                            There happens to be 26 programs listed for the Univeristy of Wisconsin-Madison University. In the Pie Chart above, it demonstates what portion of the student body size are 
                            in each program. The program that is the most popular in this University.
                        </p>
                        {this.props.schoolInfo ? <p>{this.props.schoolInfo.latest.student.demographics.race_ethnicity.aian}</p> : <p> No School yet</p>}


                    </div>
                    <div className="column sm-4">
                    <DoughnutChartRace raceInfo={this.props.raceInfo.student.demographics.race_ethnicity}/>
                    <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Why do we use it? a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content 
                    here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                    accident, sometimes on purpose (injected humour and the like).
                        </p>


                    </div>
                    <div className="column sm-4">
                    {/* <DoughnutChart/> */}
                    <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Why do we use it? a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content 
                    here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                    accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </div>
            {/* prenotes to do
            in order for students and facutly to get the bulk of information
            3 charts, 3 columns. in these colurmns will also be

            */}

                    {/* <h4>Know your numbers!!</h4>   
        
                    {this.props.schoolInfo ? <p>{this.props.schoolInfo.name}</p> : <p> No School yet</p>}
                    {this.props.schoolInfo ? <p>{this.props.schoolInfo.school_url}</p> : <p> No School Url</p>}
                    {this.props.schoolInfo ? <p>{this.props.schoolInfo.city}, {this.props.schoolInfo.props}</p> : <p> No School City</p>}
                    {this.props.schoolInfo ? <p>{this.props.schoolInfo.zip}</p> : <p> No School Url</p>}
                    {this.props.schoolInfo ? <p>{this.props.schoolInfo.size}</p> : <p>Student Size Loading</p>} */}
                
            </div>
            {/* </div> */}
        </div>
        );
    }
}




export default Body;
