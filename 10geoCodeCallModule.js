const geocode = require("./geocode2")


geocode.geocodeData("Ahmedabad,gujarat").then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

const getLatlng = async () => {

    const result = await geocode.geocodeData("Ahemdabad,gujarat");
    console.log(result);
}

getLatlng();