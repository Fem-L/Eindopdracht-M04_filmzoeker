console.log(movies); //movies is een array van alle films
//VARIABELEN

const filmIndex = document.getElementById('film-index'); //ul element is parent voor li elementen
console.log('1', filmIndex);
const movieTitle = movies.map((item) => item.Title); //array met filmtitels, klopt niet is opgeslagen als object moet array zijn
console.log('movieTitle', movieTitle);
const movieID = movies.map((item) => item.imdbID); //array met imdbID
const poster = movies.map((item) => item.Poster); //array met linken http:linken.
console.log('2', poster);

//Functie om alle films in de DOM te plaatsen

movies.forEach((movies) => {
  for (let i = 0; i < movies.length; i++) {
    let movies = movies[i];
    let filmIndexItem = document.createElement('li'); //li element maken
    filmIndex.appendChild(filmIndexItem); //li toevoegen aan ul element
    //filmIndexItem.setAttribute('label', ); //atr. toevoegen
    filmIndexItem.innerHTML = movies.Title;
    let imbdLink = document.createElement('a'); // a element maken
    filmIndexItem.appendChild(imbdLink); // imbdLink toevoegen aan li element
    //imbdLink.setAttribute('href', poster);
    //console.log('3', imbdLink);
    let poster = document.createElement('img'); // img element maken
    filmIndexItem.appendChild(poster); //img element toevoegen aan li element
    poster.setAttribute('src', poster);
    //console.log('4', poster);
  }
});
