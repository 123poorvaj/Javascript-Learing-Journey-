console.log("Api fetching learing");
const payload = {
    title: "My New Post",
    body: "This is the content of the post.",
    userId: 1,
};

let url = "https://jsonplaceholder.typicode.com/users"
async function getdata(url, payload) {
    let data = await fetch(url);
    return data;
}
getdata(url, payload).then((p) => {
    return p.json();
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e)
});