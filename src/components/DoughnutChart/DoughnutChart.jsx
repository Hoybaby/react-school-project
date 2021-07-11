import React from 'react'
import { Pie } from 'react-chartjs-2'

function DoughnutChart() {
   
    return <Pie data={{ 
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' ],
        datasets: [{
                data: [100,200,300,400,500,600],
                backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan'],
                barThickness: 12
            }]
    }}/>
}

export default DoughnutChart
