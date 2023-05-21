document.getElementById("submit").addEventListener("click", async function(e){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    e.preventDefault();

    var obj={
    "email":email,
    "password":password
    }

    let error_box = document.getElementById("error-box");

    function displayError(){
        let error = document.createElement("p");
        let error_node = document.createTextNode("Data cant be received");
        error.appendChild(error_node);
        error_box.appendChild(error);
    }

    fetch('https://reqres.in/api/login', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => displayError());


    const response = await fetch('https://reqres.in/api/login');
    
    const jsonData = await response.json();
    const userData =  jsonData.data;
    console.log(userData);  

    
})

