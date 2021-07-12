import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChartRace() {

    
    const x = 30360;
    return <Doughnut data={{ 
        labels: ["legal",
        "health",
        "english",
        "history",
        "computer",
        "language",
        "education",
        "resources",
        "biological",
        "humanities",
        "psychology",
        "agriculture",
        "engineering",
        "mathematics",
        "architecture",
        "communication",
        "social_science",
        "multidiscipline",
        "physical_science",
        "visual_performing",
        "business_marketing",
        "philosophy_religious",
        "ethnic_cultural_gender",
        "family_consumer_science",
        "parks_recreation_fitness",
        "public_administration_social_service" ],
        datasets: [{
                data: [x*schoolPrograms.legal,x*schoolPrograms.health, x*schoolPrograms.english, x*schoolPrograms.history, x*schoolPrograms.computer,x*schoolPrograms.language, x*schoolPrograms.education,
                    x*schoolPrograms.resources, x*schoolPrograms.biological, x*schoolPrograms.humanities, x*schoolPrograms.psychology, x*schoolPrograms.agriculture, x*schoolPrograms.engineering,
                    x*schoolPrograms.engineering, x*schoolPrograms.mathematics, x*schoolPrograms.architecture, x*schoolPrograms.communication, x*schoolPrograms.social_science, x*schoolPrograms.multidiscipline,
                    x*schoolPrograms.physical_science, x*schoolPrograms.visual_performing, x*schoolPrograms.business_marketing, x*schoolPrograms.philosophy_religious, x*schoolPrograms.ethnic_cultural_gender, x*schoolPrograms.family_consumer_science,
                    x*schoolPrograms.parks_recreation_fitness, x*schoolPrograms.public_administration_social_service
                ],
                backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', "blue", "maroon", "yellow" ],
                barThickness: 20
            }]
    }}/>
}