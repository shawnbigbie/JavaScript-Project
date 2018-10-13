let openingCrawl = document.querySelector("#openingCrawl")
let movieTitle = document.querySelector("#movieTitle")
// let name = document.querySelector("#name")

// fetch('https://swapi.co/api/people/3')
fetch('https://swapi.co/api/films/7')
    .then(function(response){
        return response.json();
})
    .then(function(myJson){
        openingCrawl.textContent = myJson.opening_crawl
        movieTitle.textContent = myJson.title
//      name.textContent = myJson.name
})
