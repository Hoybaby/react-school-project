const apiKey = process.env.REACT_APP_CLIENT_APIKEY

// https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&amp;id=240444&amp;api_key={YOUR_API_KEY}

function searchSchool() {

    $.ajax({
        type: "GET",
        url: `api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}`,
        dataType: "json",
        // success: function
    }).then(function(data) {
        console.log(data);
        
        }
    )}; 

searchSchool();

export default searchSchool