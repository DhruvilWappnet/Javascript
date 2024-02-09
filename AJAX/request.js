// Read data from a web server - after the page has loaded
// Update a web page without reloading the page
// Send data to a web server - in the background
// request data from server and responce data to another location

// use it for efficiently makeing request on the background

let flag = false;
function loadtext() {
    if (!flag) {
        flag = true;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById("h2data").innerHTML = this.responseText;
            console.log(xhttp.statusText);
            console.log(xhttp.responseText);
            // console.log(this.getAllResponseHeaders());

        };
        xhttp.open("GET", "./demo.txt", true);
        xhttp.send();
    } else {
        flag = false;
        document.getElementById("h2data").innerHTML =
            "Let AJAX change this text";
    }
}

// The keystone of AJAX is the XMLHttpRequest object.
// Create an XMLHttpRequest object
// Define a callback function
// Open the XMLHttpRequest object
// Send a Request to a server


function loadcont() {
    loadDoc("demo.txt", myFunction1);
    loadDoc("demo2.txt", myFunction2);
}

function loadDoc(url, cFunction) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () { cFunction(this); }
    xhttp.open("GET", url);
    xhttp.send();
}

function myFunction1(xhttp) {
    const h3 = document.createElement('h3')
    h3.innerText = xhttp.responseText;
    document.getElementById("data").appendChild(h3);
    console.log("Response from URL-1:", xhttp.responseText);
}

function myFunction2(xhttp) {
    const h3 = document.createElement('h3')
    h3.innerText = xhttp.responseText;
    document.getElementById("data").appendChild(h3);
    console.log("Response from URL-2:", xhttp.responseText);
}





// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// console.log(xhr.readyState);
// xhr.open("GET", URL);
// console.log(xhr.readyState);

// xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         let data = JSON.parse(xhr.response);
//         console.log(data.slice(0, 5));
//     } else {
//         console.log("Somthing Went Wrong !!!");
//     }
// };

// xhr.onerror = () => {
//     console.log("Somthing Going Wrong !!");
// };
// xhr.send();



// let xhr = new XMLHttpRequest();

// const postData = {
//   title: "My New Post",
//   body: "This is the content of my new post.",
//   userId: 1,
// };

// xhr.open("POST", URL);

// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.onload = () => {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     let data = JSON.parse(xhr.response);
//     console.log(data);
//   } else {
//     console.log("Somthing Wronng");
//   }
// };

// xhr.onerror = () => {
//   console.log("Something Wernt Wrong !!");
// };

// xhr.send(JSON.stringify(postData)); // Convert object to string data

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise((resolve, resject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                resject(new Error("Somthing Went Wrong !!"));
            }
        };

        xhr.onerror = () => {
            resject(new Error("Somthing Going Wrong !!"));
        };

        xhr.send();
    });
}

// step:
// 1. create request , 2. open request and difine type and request data, 3. send request , 4. get data and get from callback frunction

sendRequest("GET", URL)
    .then((response) => {
        let data = JSON.parse(response);
        console.log(data);
        // return sendRequest("GET", URL);
        return data;
    })
    .then((data) => {
        let id = data[1].id;
        return id;
    })
    .then((id) => {
        const url = `${URL}/${id}`;
        // console.log(url);
        return sendRequest("GET", url);
    })
    .then((newresponse) => {
        const newdata = JSON.parse(newresponse);
        console.log(newdata);
    })
    .catch((error) => console.log(error));

