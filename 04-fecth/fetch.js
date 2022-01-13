const url = "https://jsonplaceholder.typicode.com/users";

fetch(url, {
    method: "POST", // 'get', 'post', 'put', 'delete'
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
    },
    body: JSON.stringify({
        name: 'chanchito feliz',
        website: 'google.com'
    })
})
.then((response)=> response.json())
.then((data)=> console.log(data))

const fn = async () => {

},