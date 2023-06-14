const apiUrl = "https://jsonplaceholder.typicode.com/users"

function getapidata(url)
{
    fetch(url)
    .then((res)=>{return res.json()})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
}

getapidata (apiUrl)