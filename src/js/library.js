import themeChanger from './theme';
<<<<<<< HEAD

 const root = document.querySelector("#root");

=======
import { renderMovies, renderMoviesQueue } from './render-movies';

 const root = document.querySelector("#root");
>>>>>>> main
const rootQueue = document.querySelector("#root-queue"); 
const watched = document.querySelector('.lib-watched-btn');
watched.addEventListener('click', onBtnWatchedShow)
const queue = document.querySelector('.lib-queue-btn');
queue.addEventListener('click', onBtnShowQueue)
const swicher = document.querySelector(".theme-switch__toggle");

let watchedFilms = [];
let queFilms = [];
swicher.addEventListener('change', themeChanger);
<<<<<<< HEAD

=======
>>>>>>> main


function onBtnWatchedShow() {
    onWatchedBtnClick()
<<<<<<< HEAD
    
=======
>>>>>>> main
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


function onBtnWatchedClick(e) {
    try {
        watchedFilms = [...JSON.parse(localStorage.getItem('watchedMovies'))];
    } catch (error) {
        watchedFilms = [];
    }

    for (const film of watchedFilms) {
        
        if (filmData.id === film.id) {
            const filteredFilm = watchedFilms.filter(film => film.id !== filmData.id);
            watchedFilms = [...filteredFilm];
         
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





function renderMovies() {
    const movies =JSON.parse( localStorage.getItem("watchedMovies"));
  
    if (movies === null) {
        return
    } else {
      const listMurkup = movies.map(movie => {
          getGenreNames(movie.genres)
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                    <h3 class="span-title">${(genreArray).join(',  ')} | ${movie.release_date.slice(
    0,
    4,
  )}<span class="span-rejt">${(movie.vote_average).toFixed(1)}</span></h3>
                     </div>
                 </div>` ;
        return liEl;
    }).join('');
   

   root.insertAdjacentHTML('beforeend', listMurkup)   
    }
   
 
}
   let genreArray = [];
function getGenreNames(genres) {
 
    genres.map(el => {
       
        genreArray.push(el.name)
        
        if (genreArray.length === 2 || genreArray.length === 1) {
           genreArray 
        } if (genreArray.length >= 3) {
             genreArray.splice(2, 3, 'Other')
        } if (genreArray.length === 0) {
             genreArray.push('No genres')
        }
    })
   
}

renderMovies();
renderMoviesQueue()
function renderMoviesQueue() {
    const moviesQueue =JSON.parse( localStorage.getItem("queuedMovies"));
 
    if (moviesQueue === null) {
        return
    } else {
       const listMurkup = moviesQueue.map(movie => {
        
             getGenreNames(movie.genres)
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                     <h3 class="span-title">${(genreArray).join(',  ')} | ${movie.release_date.slice(
    0,
    4,
  )}<span class="span-rejt">${(movie.vote_average).toFixed(1)}</span></h3>
                     </div>
                 </div>` ;
        return liEl;
    }).join('');
    
   rootQueue.insertAdjacentHTML('beforeend', listMurkup)  
    }
   
 
}



renderMovies(root);
renderMoviesQueue(rootQueue);

