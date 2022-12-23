

function allTimeZone() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'world-time2.p.rapidapi.com',
            'X-RapidAPI-Key': '993d681e51mshf76c754719a6dacp1220f6jsn8a2d642d6aeb'
        }
    };

    fetch('https://world-time2.p.rapidapi.com/timezone', options)
        .then(response => response.json())
        .then(response => {
            var data;
            data += " <option>----Select TimeZome----</option>"
            for (var i = 0; i < response.length; i++) {
                data += " <option value=" + response[i] + ">" + response[i] + "</option>"
            }
            timeZone.innerHTML = data;
        })
        .catch(err => console.error(err));


}

function getTime(val) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'world-time2.p.rapidapi.com',
            'X-RapidAPI-Key': '993d681e51mshf76c754719a6dacp1220f6jsn8a2d642d6aeb'
        }
    };

    fetch(`https://world-time2.p.rapidapi.com/timezone/${val}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            UTC.innerHTML = response.abbreviation;

            var dateTime = response.datetime;
            var alldata = dateTime.split("T");
            var cdate = alldata[0];
            var ctime = alldata[1];
            date.innerHTML = cdate;
            time.innerHTML = ctime;
        })
        .catch(err => console.error(err));
}