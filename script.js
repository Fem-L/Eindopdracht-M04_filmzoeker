console.log(movies); //movies is een array van alle films
//VARIABELEN

const filmIndex = document.getElementById('film-index'); //ul element is parent voor li elementen
const zoek = document.getElementById('zoek'); //inputfield zoekfunctie

//Functie om alle films in de DOM te plaatsen

const addMoviesToDom = (array) => {
  array.forEach((movies) => {
    let filmIndexItem = document.createElement('li'); //li element maken
    let imbdLink = document.createElement('a'); // a element maken
    let posterImg = document.createElement('img'); // img element maken
    filmIndex.appendChild(filmIndexItem); //li toevoegen aan ul element
    filmIndexItem.setAttribute('class', 'film-container__item'); //toevoegen van classname in li element
    filmIndexItem.appendChild(imbdLink); // imbdLink toevoegen aan li element
    imbdLink.setAttribute(
      'href',
      'https://www.imdb.com/title/' + movies.imdbID
    ); //link toevoegen aan a element
    imbdLink.setAttribute('target', 'blank');
    imbdLink.appendChild(posterImg); //img element toevoegen aan li element
    posterImg.setAttribute('src', movies.Poster);
    posterImg.setAttribute('class', 'film-container__img');
  });
};

addMoviesToDom(movies);

//Functie om films te verwijderen
const removeMovies = () => {
  while (filmIndex.firstChild) {
    filmIndex.removeChild(filmIndex.firstChild);
  }
};

//Functie om films te selecteren op titel(bonus) werkt  niet!!
//Het is me niet gelukt de zoekfunctie werkend te krijgen.

let searchValue;
let searchMovie;

const getInputValue = () => {
  let searchValue = zoek.value;
  console.log('searchValue =', searchValue);
  let searchMovie = movies.find((movie) => movie.Title == searchValue); //vind alleen iets als je precies dezelfde schijfwijze hanteert als de database
  console.log('dit vind hij', searchMovie); //Dit is de waarde die ik zoek, ik weet niet hoe ik deze buiten de fucntie kan aanroepen
};

zoek.addEventListener('search', getInputValue); //activeert zoekfunctie met enter

// onderstaande code wordt alleen aangeroepen voor de input, niet meer na het uitvoeren van de functie
searchMovie = getInputValue();
console.log('searchMovie = ', searchMovie);

//FILTERFUNCTIE TOEVOEGEN AAN RADIOBUTTONS

const radioBtn = document.getElementsByName('film-filter'); //nodelist van radiobuttons
console.log('3', radioBtn);

//Functie die de filter uitvoert
const handleChangeMovieFilter = (event) => {
  const filterName = event.target.value; //slaat naam op van de filter die wordt gekozen, type is undefinded
  console.log('Filternaam =', filterName);

  //Functie om films te filteren op woord in de titel
  const filterMovies = movies.filter((movie) => {
    let filterFilm = movie.Title.includes(filterName);
    if (filterFilm == true) {
      console.log('de titel van de film is: ', movie.Title);
      console.log('5', filterFilm, filterName);
      return filterFilm;
    }
  });
  console.log('filterMovies = ', filterMovies);

  // Functie om de nieuwste films te selecteren
  const filterLatestMovies = movies.filter((movie) => movie.Year > 2013);
  console.log('filterLatestMovies', filterLatestMovies);

  //switch functie
  const expr = filterName;
  console.log('expr =', filterName);
  switch (expr) {
    case 'nieuwste-films':
      removeMovies();
      addMoviesToDom(filterLatestMovies);
      console.log('Dit zijn de nieuwste-films');
      break;
    case 'Avengers':
      removeMovies();
      addMoviesToDom(filterMovies);
      console.log('Dit zijn de Avengers films');
      break;
    case 'X-Men':
      removeMovies();
      addMoviesToDom(filterMovies);
      console.log('Dit zijn de x-men films');
      break;
    case 'Princess':
      removeMovies();
      addMoviesToDom(filterMovies);
      console.log('Dit zijn de princess films');
      break;
    case 'Batman':
      removeMovies();
      addMoviesToDom(filterMovies);
      console.log('Dit zijn de batman films');
      break;
    default:
      removeMovies();
      addMoviesToDom(movies);
      console.log('Wat ik wil werkt niet :)');
  }
};

//eventListener aan alle selectiebuttons
radioBtn.forEach((btn) => {
  btn.addEventListener('change', handleChangeMovieFilter);
  console.log('change is geactiveerd');
});
