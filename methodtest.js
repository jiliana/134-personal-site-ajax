const form = document.querySelector("form");
const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");
var output = document.getElementById("response");

getBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();
    xhr.open("GET", 'https://httpbin.org/get?' + queryString, true);

    xhr.onreadystatechange = () => { // Call a function when the state changes.
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var strResponse = (JSON.stringify(response, null, 2));
            strResponse = strResponse.replace(/(?:\\[rn]|[\r\n]+)+/g, '</br>');
            output.innerHTML = `<pre> ${strResponse} </pre>`;
        }
    }
    xhr.send();
    form.reset();
});

postBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    const formData = new FormData(form);

    xhr.open("POST", 'https://httpbin.org/post', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { // Call a function when the state changes.
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var strResponse = (JSON.stringify(response, null, 2));
            strResponse = strResponse.replace(/(?:\\[rn]|[\r\n]+)+/g, '</br>');
            output.innerHTML = `${strResponse}`;

        }
    }
    xhr.send(new URLSearchParams(formData));
    form.reset();
});

putBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", 'https://httpbin.org/put', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { // Call a function when the state changes.
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var strResponse = (JSON.stringify(response, null, 2));
            strResponse = strResponse.replace(/(?:\\[rn]|[\r\n]+)+/g, '</br>');
            output.innerHTML = `<pre> ${strResponse} </pre>`;

        }
    }
    xhr.send(new FormData(form));
    form.reset();
});

deleteBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", 'https://httpbin.org/delete', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { // Call a function when the state changes.
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var strResponse = (JSON.stringify(response, null, 2));
            strResponse = strResponse.replace(/(?:\\[rn]|[\r\n]+)+/g, '</br>');
            output.innerHTML = `<pre> ${strResponse} </pre>`;

        }
        else {
            console.log("Error");
        }
    }
    xhr.send(new FormData(form));
    form.reset();
});
