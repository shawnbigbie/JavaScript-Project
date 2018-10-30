import { senatorData} from '../assets/senators.js'
//import { films } from '../assets/films.js'
//import { people } from '../assets/people.js'
//import { species } from '../assets/species.js'

//let openingCrawl = document.querySelector("#openingCrawl")
//let movieTitle = document.querySelector("#movieTitle")
//let personName = document.querySelector("#personName")

//let results = [
//{
//	"name": "R2-D2",
//	"height": "96",
//	"mass": "32",
//	"hair_color": "n/a",
//	"skin_color": "white, blue",
//	"eye_color": "red",
//	"birth_year": "33BBY",
//	"gender": "n/a",
//	"homeworld": "https://swapi.co/api/planets/8/",
//	"films": [
//		"https://swapi.co/api/films/2/",
//		"https://swapi.co/api/films/5/",
//		"https://swapi.co/api/films/4/",
//		"https://swapi.co/api/films/6/",
//		"https://swapi.co/api/films/3/",
//		"https://swapi.co/api/films/1/",
//		"https://swapi.co/api/films/7/"
//	],
//	"species": [
//		"https://swapi.co/api/species/2/"
//	],
//	"vehicles": [],
//	"starships": [],
//	"created": "2014-12-10T15:11:50.376000Z",
//	"edited": "2014-12-20T21:17:50.311000Z",
//	"url": "https://swapi.co/api/people/3/"
//}
//]

// fetch('https://swapi.co/api/people/3')
// fetch('https://swapi.co/api/films/7')
//    .then(function(response){
//        return response.json();
//})
//    .then(function(myJson){
//        openingCrawl.textContent = myJson.opening_crawl
//        movieTitle.textContent = myJson.title
//      name.textContent = myJson.name
//})

// results.forEach( (AnyName) => {
// console.log(AnyName)
// });

//results.forEach( (people) =>{
//    let listItem =document.createElement('p')
//    listItem.textContent = people.name
//    personName.appendChild(listItem)
//})

//  let listItem =document.createElement('p')
//  listItem.textContent = results[0].opening_crawl
//  personName.appendChild(listItem)


// Import and Export JS //
const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party === 'R')

const democrats = senators.filter(senator => senator.party === 'D')

const females = senators.filter(senator => senator.gender === 'F')
const males = senators.filter(senator => senator.gender === 'M')

const loyalRepublican = republicans.reduce((acc, senator) => (senator.votes_with_party_pct > 0) ? senator : acc, 0)

console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate.`)

console.log(`There are ${males.length} males in the Senate and ${females.length} females`)

console.log(`The most loyal republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.`)