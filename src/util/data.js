const apiKey = process.env.REACT_APP_CLIENT_APIKEY

// https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&amp;id=240444&amp;api_key={YOUR_API_KEY}

function searchWeather(searchValue) {

    $.ajax({
        type: "GET",
        url: `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&amp;id=240444&amp;api_key=${apiKey}`,
        // my key "e8bb5a6ba8f08e6e176eb848cae16ef7"
        dataType: "json",
        // success: function
    }).then(function(data) {
        console.log(data);
        //create a history link for the search(Look up.push())
        
        }
    // searchUV()
    )}; ;