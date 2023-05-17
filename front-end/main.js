//  GET request using fetch()
getAll();
function getAll(){
  fetch("http://localhost:3000/user")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      let li = `<tr><th>User ID</th><th>Email</th><th>First Name</th><th>Last Name</th><th>Phone Number</th></tr>`;
      console.log(json);
      // Loop through each data and add a table row
      json.forEach((user) => {
        li += `<tr>
                  <td>${user._id} </td>
                  <td>${user.email}</td>        
                  <td>${user.firstName}</td>        
                  <td>${user.lastName}</td>        
                  <td>${user.phone}</td>   
              </tr>`;
      });

      // Display result
      document.getElementById("users").innerHTML = li;
  });
}


// post user
let postbutton = document.getElementById("post-button");
postbutton.addEventListener('click',()=>{
    console.log("button clicked");
    getAll();
});




//  GET request using fetch()
const inputText = document.getElementById("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  console.log(input.value)
  getUser(input.value);
});


function getUser(inputValue) {
  fetch(`http://localhost:3000/user/${inputValue}`)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      console.log(json);
      document.getElementById("userDetails").innerHTML = `<ul>
                        <li> user id - ${json._id}</li>
                        <li> email - ${json.email}</li>
                        <li> First Name - ${json.firstName}</li>
                        <li> Last Name - ${json.lastName}</li>
                        <li> Mobile Number - ${json.phone}</li>
                    </ul>`;
    });
}




//  Delete request using fetch()
let formDelete = document.getElementById("formDelete");
const inputTextDelete = document.getElementById("inputDelete");
const deletedMessage = document.getElementById("deletedMessage")
formDelete.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  console.log(inputDelete.value)
  deleteUser(inputDelete.value);
  getAll();
});

function deleteUser(inputValue) {
  fetch(`http://localhost:3000/user/${inputValue}`, { method: 'DELETE' })
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      console.log(json.message);
      deletedMessage.innerHTML = `<p>${json.message}<p>`;
    });
}

// POST request using fetch()
// fetch("https://jsonplaceholder.typicode.com/posts", {

//     // Adding method type
//     method: "POST",

//     // Adding body or contents to send
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1
//     }),

//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })

// // Converting to JSON
// .then(response => response.json())

// // Displaying results to console
// .then(json => console.log(json));
