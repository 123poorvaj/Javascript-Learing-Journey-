let url = "https://jsonplaceholder.typicode.com/users"

async function getdata(url) {
    let data = await fetch(url);
    return data;
}

getdata(url).then((responce) => {
    return responce.json();
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log("somtiong whent wrong");
});