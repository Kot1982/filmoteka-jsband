import themeChanger from './theme';
// import NewsApiServise from './api-service';
// export let moviesArray = [];
 const root = document.querySelector("#root");
//console.log(root);
const rootQueue = document.querySelector("#root-queue"); 
const watched = document.querySelector('.lib-watched-btn');
watched.addEventListener('click', onBtnWatchedShow)
const queue = document.querySelector('.lib-queue-btn');
queue.addEventListener('click', onBtnShowQueue)
const swicher = document.querySelector(".theme-switch__toggle");

let watchedFilms = [];
let queFilms = [];
swicher.addEventListener('change', themeChanger);
//console.log(watchedFilms);
//console.log(queFilms)


function onBtnWatchedShow() {
    onWatchedBtnClick()
    //onWatchedBtnClick()
    if (root.classList.contains('root-height') && rootQueue.classList.contains('root-show')) {
        root.classList.remove('root-height');
        root.classList.add('root-show');
        rootQueue.classList.remove('root-show');
        rootQueue.classList.add('root-height')
        
    }
   
}

function onBtnShowQueue() {
    onQueueBtnClick()
    
    if (root.classList.contains('root-show') &&rootQueue.classList.contains('root-height')) {
        root.classList.remove('root-show');
        root.classList.add('root-height');
        rootQueue.classList.remove('root-height');
        rootQueue.classList.add('root-show')
        
    }
    
}


function onWatchedBtnClick() {
  queue.classList.remove('active');
  watched.classList.add('active');
}

function onQueueBtnClick() {
  watched.classList.remove('active');
  queue.classList.add('active');
}



export default function addWatchedFilmToLocaleStorage(filmData) {

    const btnWatched = document.querySelector('.card-btn-watched');
   
    const btnQueue = document.querySelector('.card-btn-que');
    btnQueue.addEventListener('click', onBtnQue);
    
    btnWatched.addEventListener('click', onBtnWatchedClick);
 //console.log(btnQueue)

function onBtnWatchedClick(e) {
    try {
        watchedFilms = [...JSON.parse(localStorage.getItem('watchedMovies'))];
    } catch (error) {
        watchedFilms = [];
    }

    for (const film of watchedFilms) {
        //console.log(filmData.id);
        //console.log(film.id)
        if (filmData.id === film.id) {
            const filteredFilm = watchedFilms.filter(film => film.id !== filmData.id);
            watchedFilms = [...filteredFilm];
            //console.log(watchedFilms)
            localStorage.setItem('watched', JSON.stringify(watchedFilms));
            return;
        }
    }
    watchedFilms.push(filmData);
    localStorage.setItem('watched', JSON.stringify(watchedFilms));
    }
    
    function onBtnQue(e) {
       try {
        queFilms = [...JSON.parse(localStorage.getItem('queuedMovies'))];
    } catch (error) {
        queFilms = [];
        }
        for (const film of queFilms) {
        //console.log(filmData.id);
        //console.log(film.id)
        if (filmData.id === film.id) {
            const filteredFilm = queFilms.filter(film => film.id !== filmData.id);
            queFilms = [...filteredFilm];
            localStorage.setItem('queue', JSON.stringify(queFilms));
            return;
        }
        }
         queFilms.push(filmData);
    localStorage.setItem('queue', JSON.stringify( queFilms));
}



}


//console.log(JSON.parse(localStorage.getItem("watchedMovies")))
//console.log(JSON.parse(localStorage.getItem("queuedMovies")))

function renderMovies() {
    const movies =JSON.parse( localStorage.getItem("watchedMovies"));
  //console.log(movies)
    const listMurkup = movies.map(movie => {
       // console.log(movie)
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                    <h3 class="span-title">${movie.genres
                .map(genre => genre.name).slice(0, 3).join(', ')} | ${movie.release_date.slice(
    0,
    4,
  )}</h3>
                     </div>
                 </div>` ;
        return liEl;
    }).join('');
    //console.log(root)

   root.insertAdjacentHTML('beforeend', listMurkup)
 
}
renderMovies();
renderMoviesQueue()
function renderMoviesQueue() {
    const moviesQueue =JSON.parse( localStorage.getItem("queuedMovies"));
 // console.log(moviesQueue)
    const listMurkup = moviesQueue.map(movie => {
        //console.log(movie)
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                    <h3 class="span-title">${movie.genres
                .map(genre => genre.name).slice(0, 3).join(', ')} | ${movie.release_date.slice(
    0,
    4,
  )}</h3>
                     </div>
                 </div>` ;
        return liEl;
    }).join('');
    //console.log(root)
   rootQueue.insertAdjacentHTML('beforeend', listMurkup)
 
}



