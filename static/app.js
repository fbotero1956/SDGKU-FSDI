

function get_location() {
    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(locationObtained);
    }
    else {
        console.log("Browser does not support the geo location feature")
    }
}

function locationObtained(position){
    console.log("Current position:  ", position);
    
    let data = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };

    $.ajax({
        url: "/api/weather",
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(res){
            console.log("Server says:  ", res);
            console.log('the current temp is:', res.current.temp);
            console.log(res.current.weather[0].icon);
            $("#loc").html(res.timezone);
            $("#temp").html(res.current.temp);
            var cTemp = res.current.temp;
            var cToFahr = cTemp * 9 / 5 + 32;
            $("#ftemp").html(cToFahr.toPrecision(2));
            var sky = "";
            switch (res.current.weather[0].icon) {
                case "01d":
                case "01n":
                    sky = " Clear Skies";
                    break;
                case "02d":
                case "02n":
                    sky = " with a few clouds";
                    break;
                case "03d":
                case "03n":
                    sky = " scattered clouds"
                    break;
                case "04d":
                case "04n":
                    sky = " broken clouds"
                    break;
                case "09d":
                case "09n":
                    sky = " showers";
                    break;
                case "10d":
                case "10n":
                    sky = " rain";
                    break;
                case "11d":
                case "11n":
                    sky = " thunderstorms";
                    break;
                case "13d":
                case "13n":
                    sky = " snow"
                    break;
                case "50d":
                case "50n":
                    sky = " mist"
                    break; 
            }
            $("#overcast").attr("src", "http://openweathermap.org/img/wn/" + res.current.weather[0].icon + ".png");
            $("#sky").html(sky);
            var fvis = res.current.visibility /1609.34;
            $("#vis").html(res.current.visibility + " meters or " + fvis.toFixed(2) + " miles!");
            // wind speed 
            console.log(res.current.wind_speed);
            var wind = (res.current.wind_speed) * 3600 /1609.34;
            console.log(wind);

            $("#wind").html(wind.toPrecision(2));
            // wind direction 
            var windd = "";
            if (res.current.wind_deg <= 90) {
                windd = "North East";
            }else if (res.current.wind_deg <= 180) {
                windd= "South East";
            }else if (res.current.wind_deg <= 270) {
                windd= "South West";
            }else {
                windd= "North West";
            };
            $("#windd").html(windd);

           // $("#vis").html(res.current.visibility + " meters");
        },
        error: function(details) {
            console.log("Error sending data from server")
        }

    })
    // http://openweathermap.org/img/wn/04d.png


}

function init() {
    console.log("Felipe's first flask application");
    get_location();

}

window.onload = init;