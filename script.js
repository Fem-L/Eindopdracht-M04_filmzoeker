//console.log(movies); //movies is een array van alle films
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
      `https://www.imdb.com/title/${movies.imdbID}`
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

//Functie om films te selecteren op titel(bonus)
//hoe zorg ik ervoor dat de radiotbutton uit gaat wanneer het inputfield wordt gebruikt?

const getInputValue = () => {
  let searchValue = zoek.value.toLowerCase();
  let searchMovie = movies.filter(
    (movie) => movie.Title.toLowerCase() == searchValue
  );
  removeMovies();
  addMoviesToDom(searchMovie);
  return searchMovie;
};

zoek.addEventListener('search', getInputValue); //activeert zoekfunctie met enter

//FILTERFUNCTIE TOEVOEGEN AAN RADIOBUTTONS

const radioBtn = document.getElementsByName('film-filter'); //nodelist van radiobuttons

//Functie die de filter uitvoert met daarin verschilende functies

const handleChangeMovieFilter = (event) => {
  const filterName = event.target.value; //slaat naam op van de filter die wordt gekozen, type is undefinded

  //Functie om films te filteren op woord in de titel
  const filterMovies = movies.filter((movie) => {
    let moviesIncludesFilterName = movie.Title.includes(filterName);
    if (moviesIncludesFilterName == true) {
      return moviesIncludesFilterName;
    }
  });

  // Functie om de nieuwste films te selecteren
  const filterLatestMovies = movies.filter((movie) => movie.Year > 2013);

  //switch functie
  const expr = filterName;
  switch (expr) {
    case 'nieuwste-films':
      removeMovies();
      addMoviesToDom(filterLatestMovies);
      //console.log('Dit zijn de nieuwste-films');
      break;
    case 'Avengers':
      removeMovies();
      addMoviesToDom(filterMovies);
      //console.log('Dit zijn de Avengers films');
      break;
    case 'X-Men':
      removeMovies();
      addMoviesToDom(filterMovies);
      //console.log('Dit zijn de x-men films');
      break;
    case 'Princess':
      removeMovies();
      addMoviesToDom(filterMovies);
      //console.log('Dit zijn de princess films');
      break;
    case 'Batman':
      removeMovies();
      addMoviesToDom(filterMovies);
      //console.log('Dit zijn de batman films');
      break;
    default:
      removeMovies();
      addMoviesToDom(movies);
    //console.log('default');
  }
};

//eventListener aan alle selectiebuttons
radioBtn.forEach((btn) => {
  btn.addEventListener('change', handleChangeMovieFilter);
});
