//  GET request using fetch()
fetch("http://localhost:3000/user")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    // Create a variable to store HTML
    let li = `<tr><th>id</th><th>email</th><th>firstName</th><th>lastName</th><th>Phone</th></tr>`;
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

//  GET request using fetch()
const getButton = document.querySelector("#get");
const getText = document.getElementById("getText");

getButton.addEventListener("click", (e) => {
  console.log(e);
  console.log("working");
  const id = getText.textContent;
  console.log(id);
  getUser(id);
});
function getUser(id) {
  fetch(`http://localhost:3000/user/6460da1977865281b655456e`)
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      console.log(json);
      document.getElementById("userDetails").innerHTML = `<ul>
                        <li> user id - ${json.id}</li>
                        <li> email - ${json.email}</li>
                        <li> First Name - ${json.firstName}</li>
                        <li> Last Name - ${json.lastName}</li>
                        <li> Mobile Number - ${json.phone}</li>
                    </ul>`;
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
