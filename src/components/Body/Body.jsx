import React from 'react'
import DoughnutChartCompletion from '../DoughnutChartCompletion/DoughnutChartCompletion';
import DoughnutChartProgram from '../DoughnutChartProgram/DoughnutChart';
import DoughnutChartRace from '../DoughnutChartRace/DoughnutChartRace';


import './Body.css'


class Body extends React.Component {

    // constructor(props){
    //     super(props);
        
    // }

    render() {
        // console.log(this.props.raceInfo.student)
        // const {schoolInfo} = this.props
        // console.log(schoolInfo.latest)
        return (

        <div className='formatting'>
            <h4>The total student body size for these Doughnut graphs are 30,360 </h4>
            <div className="container">
                <div className="row">
                    <div className="column sm-4">
                        
                        <DoughnutChartProgram />
                        <p>
                            There happens to be 26 programs listed for the Univeristy of Wisconsin-Madison University. In the Pie Chart above, it demonstates what portion of the student body size are 
                            in each program. The program that is the most popular in this University.
                        </p>
                        {/* {this.props.schoolInfo ? <p>{this.props.schoolInfo.latest.student.demographics.race_ethnicity.aian}</p> : <p> No School yet</p>} */}


                    </div>
                    <div className="column sm-4">
                    <DoughnutChartRace 
                    // chartInfo={this.props.schoolInfo.latest.student.demographics.race_ethnicity}
                    />
                    <p>
                        Majority of the population according to the API provided by the goverment, is from a White ethnicity. The school is located in the middle of the state which helps attracts all kinds of people.
                        </p>


                    </div>
                    <div className="column sm-4">
                    <DoughnutChartCompletion/>
                    <p>
                            The above chart is only for 4,025 students in a cohort of a 4 year degree. This is the average split between males and females.
                        </p>
                    </div>
                </div>
            {/* prenotes to do
            in order for students and facutly to get the bulk of information
            3 charts, 3 columns. in these colurmns will also be

            */}

                {/* <h4>Know your numbers!!</h4>    */}
        
                
                    {/* {this.props.schoolInfo ? <p>{this.props.schoolInfo.school.zip}</p> : <p> No School Url</p>}
                    {this.props.schoolInfo ? <p>{this.props.schoolInfo.size}</p> : <p>Student Size Loading</p>}
                 */}
            </div>
            {/* </div> */}
        </div>
        );
    }
}




export default Body;
