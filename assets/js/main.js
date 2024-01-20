// program to get the URL

// Get button element and add click event listener on it and assign to element variable.
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", getUrl);



function getUrl(e) {
    e.preventDefault();

    // Show the result on this #h5 id.
    let result = document.querySelector('#h5');

    // window.location.href: HTML DOM Window.location property returns a Location object that contains information about the current location of the document.
    const url1 = window.location.href;

    // Document.URL: The DOM URL property in HTML is used to return a string that contains the complete URL of the current document. The string also includes the HTTP protocol such as ( http://).
    const url2 = document.URL;


    result.innerHTML = `<span style="color:#031058">Current URL :</span> ${url2}`
};
