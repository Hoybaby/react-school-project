import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChartRace({chartInfo}) {


    // const {aian, nhpi, asian, black, white, unknown, hispanic} = chartInfo
    // console.log(this.props)
    // console.log('testing')
    
    const x = 30360;

    const y = {
        aian: 0.002,
        asian: 0.0642,
        black: 0.0197,
        hispanic: 0.0528,
        nhpi: 0.0009,
        unknown: 0.0151,
        white: 0.7096,
        
    }
    
    return <Doughnut data={{ 
        labels: ['Aian', 'NHPI', 'Asian', 'Black', 'White', 'Unknown' ,'Hispanic'],
        datasets: [{
                // data: [],
                data: [x*y.aian,x*y.nhpi, x*y.asian,x*y.black, x*y.white,x*y.unknown, x*y.hispanic ],
                backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', "blue", "maroon", "yellow" ],
                barThickness: 20
            }]
    }}/>
}

export default DoughnutChartRace;