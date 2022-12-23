
const url = "https://restcountries.com/v3.1/all";


fetch(url).then(r => {
    // console.log(r);
    return r;
}).then(d => {
    console.log(d);

    // for (var i = 0; i < d.length; i++) {
    //     console.log(d[i].name.common);
    // }
}).catch(err => {
    console.log(err);
})