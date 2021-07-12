import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChartRace({raceInfo}) {

    const {aian, nhpi, asian, black, white, unknown, hispanic} = raceInfo
    
    const x = 30360;
    return <Doughnut data={{ 
        labels: ['Aian', 'NHPI', 'Asian', 'Black', 'White', 'Unknown' ,'Hispanic'],
        datasets: [{
                data: [x*aian, x*nhpi,x*asian,x*black,x*white, x*unknown, x*hispanic],
                backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', "blue", "maroon", "yellow" ],
                barThickness: 20
            }]
    }}/>
}

export default DoughnutChartRace;