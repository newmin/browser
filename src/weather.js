const MYAPI_KEY = "e42e94009a48254cd4ed31f9a2f9a7c9";

function onGeoGet(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MYAPI_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data=>{
            const weather = document.querySelector('.weather span:first-child')
            const city = document.querySelector('.weather span:last-child')
            city.innerText= data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}
function onGeoError(){
    alert("위치정보를 읽는데 실패하였습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoGet,onGeoError)


