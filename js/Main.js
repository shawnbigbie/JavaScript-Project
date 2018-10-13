let openingCrawl = document.querySelector("#openingCrawl")
let movieTitle = document.querySelector("#movieTitle")

fetch('https://swapi.co/api/films/1')
    .then(function(response){
        return response.json();
})
    .then(function(myJson){
        openingCrawl.textContent = myJson.opening_crawl
        movieTitle.textContent = myJson.title
        console.log(myJson.opening_crawl);
})
