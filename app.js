/*
Public API Repo
https://github.com/public-apis/public-apis
*/

// Grab all the elements we need and store them in variables
let cat = document.querySelector(".cat")
let fox = document.querySelector(".fox")
let dog = document.querySelector(".dog")

const catButton = document.querySelector(".get-cat")
const foxButton = document.querySelector(".get-fox")
const dogButton = document.querySelector(".get-dog")

// Add eventListeners on BTNs
catButton.addEventListener("click", getCat)
foxButton.addEventListener("click", getCat)
dogButton.addEventListener("click", getCat)

//
function getCat() {
	// the fetch(API) is going to return a PROMISE
	fetch("https://aws.random.cat/meow")
		// the .json() method is going to do 3 things: READ, Convert to JSON file, PARSE that JSON file
		.then(response => response.json())
		.then(responseData => {
			cat.innerHTML = `<img src="${responseData.file}" />`
		})
}
