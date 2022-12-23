

//const temp = document.getElementById('temp');

var url = "https://api.openweathermap.org/data/2.5/weather?lat=21.1702&lon=72.8311&appid=0c78a76af15cc5843caa7b5f44e1623e&units=metric";

fetch(url).then(data => {
    return data.json();
}).then(result => {
    // console.log(result.main.temp);
    temp.innerHTML = result.main.temp
}).catch(err => {
    console.log(err);
})