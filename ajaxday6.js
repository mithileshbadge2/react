function getUser(id) {
    fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
        })
}
getUser(2)

function createUser(){
    fetch(`https://reqres.in/api/users`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name: 'John Doe',
            job:'Software Developer'
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.error(error)
    })
}
createUser()

function updateUser(id){
    fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name: "morpheus",
            job: "zion resident"
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.error(error)
    })
}
updateUser(1)

function deleteUser(id){
    fetch(`https://reqres.in/api/users/${id}`,{
        method: 'DELETE'
    })
    .then(function(response){
        if(response.status == 204){
            console.log("user deleted successfully")
        }
    })
}
deleteUser(2)