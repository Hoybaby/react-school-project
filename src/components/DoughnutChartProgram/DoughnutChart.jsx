import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChartProgram() {

    const schoolPrograms = {
        legal: 0.005,
        health: 0.0783,
        english: 0.0103,
        history: 0.0097,
        library: 0,
        computer: 0.0383,
        language: 0.0382,
        military: 0,
        education: 0.028,
        resources: 0.042,
        biological: 0.1163,
        humanities: 0.001,
        psychology: 0.0295,
        agriculture: 0.0272,
        engineering: 0.1065,
        mathematics: 0.0266,
        architecture: 0.0016,
        construction: 0,
        communication: 0.059,
        social_science: 0.0944,
        transportation: 0,
        multidiscipline: 0.0232,
        physical_science: 0.0192,
        personal_culinary: 0,
        visual_performing: 0.0229,
        business_marketing: 0.1419,
        science_technology: 0,
        philosophy_religious: 0.007,
        precision_production: 0,
        engineering_technology: 0,
        ethnic_cultural_gender: 0.0379,
        family_consumer_science: 0.0204,
        parks_recreation_fitness: 0.0092,
        security_law_enforcement: 0,
        communications_technology: 0,
        mechanic_repair_technology: 0,
        theology_religious_vocation: 0,
        public_administration_social_service: 0.0064
    }

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

export default DoughnutChartProgram
