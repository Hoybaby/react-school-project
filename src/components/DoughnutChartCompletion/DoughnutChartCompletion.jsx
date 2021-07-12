import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChartCompletion() {

    // const {aian, nhpi, asian, black, white, unknown, hispanic} = raceInfo
    
    const x = 30360;
    return <Doughnut data={{ 
        labels: ['Male', 'Female'],
        datasets: [{
                data: [1923, 2102],
                backgroundColor: ['red', 'Blue'],
                barThickness: 20
            }]
    }}/>
}

export default DoughnutChartCompletion;