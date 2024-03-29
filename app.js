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
foxButton.addEventListener("click", getFox)
dogButton.addEventListener("click", getDog)

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

function getFox() {
	// return a PROMISE
	fetch("https://randomfox.ca/floof")
		// then we take the PROMISE (response) and we convert it into sth that can be parsed by JS
		.then(response => response.json())
		.then(responseData => {
			fox.innerHTML = `<img src="${responseData.image}" />`
		})
}

function getDog() {
	// return a PROMISE
	fetch("https://random.dog/woof.json")
		// then we take the PROMISE (response) and we convert it into sth that can be parsed by JS
		.then(response => response.json())
		.then(responseData => {
			dog.innerHTML = `<img src="${responseData.url}" />`
		})
}
