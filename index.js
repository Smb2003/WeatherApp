let temp = document.querySelector('.temp');
let city = document.querySelector('.city');
let windSpeed = document.querySelector('.windSpeed');
let humidity = document.querySelector('.humidity');
let btn = document.querySelector('.btn');
let inputField = document.querySelector("#inputField");
let weatherImage = document.querySelector(".weatherImage");
console.log(windSpeed.innerHTML);
btn.addEventListener('click',Response)

async function Response(){
    console.log(inputField.value);
   let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=182db7a9267746cf73244d205f27dd33&units=metric`);
   let Data = await response.json();
   console.log(Data);

   windSpeed.innerHTML = `${Data.wind.speed} km/h`;
   humidity.innerHTML = `${Data.main.humidity} %`;
   temp.innerHTML =`${Math.floor(Data.main.temp)}°C`
   city.innerHTML = `${Data.name}`
   
    if(Data.weather[0].main == "Clear"){
       weatherImage.src = 'images/clear.png';
    }
    else if(Data.weather[0].main == "Clouds"){
        weatherImage.src = 'images/clouds.png';
    }
    else if(Data.weather[0].main == "Drizzle"){
        weatherImage.src = 'images/drizzle.png';
    }
    else if(Data.weather[0].main == "Rain"){
        weatherImage.src = 'images/rain.png';
    }
    else if(Data.weather[0].main == "Mist"){
        weatherImage.src = 'images/mist.png';
    }
    else if(Data.weather[0].main == "Snow"){
        weatherImage.src = 'images/snow.png';
    }
    else if(Data.weather[0].main == "Wind"){
        weatherImage.src = 'images/wind.png';
    }
    else if(Data.weather[0].main == "Haze"){
        weatherImage.src = 'images/haze.jpg ';
    }

   
} 
