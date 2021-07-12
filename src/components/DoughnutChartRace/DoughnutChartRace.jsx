import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChartRace({chartInfo}) {

    // const {aian, nhpi, asian, black, white, unknown, hispanic} = chartInfo
    // console.log(this.props)
    // console.log('testing')
    
    const x = 30360;

    const y = {
        aian: 0.002,
aian_2000: null,
aian_prior_2009: null,
api_2000: null,
asian: 0.0642,
asian_pacific_islander: null,
black: 0.0197,
black_2000: null,
black_non_hispanic: null,
hispanic: 0.0528,
hispanic_2000: null,
hispanic_prior_2009: null,
nhpi: 0.0009,
non_resident_alien: 0.1015,
two_or_more: 0.0342,
unknown: 0.0151,
unknown_2000: null,
white: 0.7096,
white_2000: null,
white_non_hispanic: null,
    }
    
    return <Doughnut data={{ 
        labels: ['Aian', 'NHPI', 'Asian', 'Black', 'White', 'Unknown' ,'Hispanic'],
        datasets: [{
                // data: [],
                data: [x*y.aian, ],
                backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', "blue", "maroon", "yellow" ],
                barThickness: 20
            }]
    }}/>
}

export default DoughnutChartRace;