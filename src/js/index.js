
// import NewsApiServise from './api-service';
// export let moviesArray = [];
 const root = document.querySelector("#root");
console.log(root);
const rootQueue = document.querySelector("#root-queue"); 
const watched = document.querySelector('.lib-watched-btn');
watched.addEventListener('click', onBtnWatchedShow)
const queue = document.querySelector('.lib-queue-btn');
queue.addEventListener('click', onBtnShowQueue)

let watchedFilms = [];
let queFilms = [];

console.log(rootQueue)


function onBtnWatchedShow() {
    //onWatchedBtnClick()
    if (root.classList.contains('root-height') && rootQueue.classList.contains('root-show')) {
        root.classList.remove('root-height');
        root.classList.add('root-show');
        rootQueue.classList.remove('root-show');
        rootQueue.classList.add('root-height')
        
    }
    // root.classList.add('root-show');

    // rootQueue.classList.remove('root-height')
}

function onBtnShowQueue() {
    //onQueueBtnClick()
    if (root.classList.contains('root-show') &&rootQueue.classList.contains('root-height')) {
        root.classList.remove('root-show');
        root.classList.add('root-height');
        rootQueue.classList.remove('root-height');
        rootQueue.classList.add('root-show')
        
    }
    // rootQueue.classList.toggle('root-show');
    // root.classList.toggle('root-height')
}

// function onWatchedBtnClick() {
//   queue.classList.remove('active');
//   watched.classList.add('active');
// }

// function onQueueBtnClick() {
//   watched.classList.remove('active');
//   queue.classList.add('active');
// }


export default function addWatchedFilmToLocaleStorage(filmData) {

    const btnWatched = document.querySelector('.card-btn-watched');
    const btnQueue = document.querySelector('.card-btn-que');
    btnQueue.addEventListener('click', onBtnQue);
    //const btnRemoweWatch = document.querySelector('.')
    btnWatched.addEventListener('click', onBtnWatchedClick);


function onBtnWatchedClick(e) {
    try {
        watchedFilms = [...JSON.parse(localStorage.getItem('watched'))];
    } catch (error) {
        watchedFilms = [];
    }

    for (const film of watchedFilms) {
        console.log(filmData.id);
        console.log(film.id)
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
        queFilms = [...JSON.parse(localStorage.getItem('queue'))];
    } catch (error) {
        queFilms = [];
        }
        for (const film of queFilms) {
        console.log(filmData.id);
        console.log(film.id)
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

// function onBtnRemoveWatch(e) {
//        try {
//         watchedFilms = [...JSON.parse(localStorage.getItem('watched'))];
//     } catch (error) {
//         watchedFilms = [];
//     }
// }

//console.log(localStorage.getItem('watched'))
console.log(JSON.parse(localStorage.getItem("watched")))
console.log(JSON.parse(localStorage.getItem("queue")))

function renderMovies() {
    const movies =JSON.parse( localStorage.getItem("watched"));
  console.log(movies)
    const listMurkup = movies.map(movie => {
        console.log(movie)
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
    console.log(root)
   root.insertAdjacentHTML('beforeend', listMurkup)
 
}
renderMovies();
renderMoviesQueue()
function renderMoviesQueue() {
    const moviesQueue =JSON.parse( localStorage.getItem("queue"));
  console.log(moviesQueue)
    const listMurkup = moviesQueue.map(movie => {
        console.log(movie)
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
    console.log(root)
   rootQueue.insertAdjacentHTML('beforeend', listMurkup)
 
}

// export default function writeLocalStor() {
//     const newsApiServise = new NewsApiServise();
//     const response = newsApiServise.getTrendMovies().then(response => {
//         console.log(response.results)
//         response.results.forEach(el => {
//             //console.log(el);
//             moviesArray.push({
//                 id: `${el.id}`,
//                 poster_path: `${el.poster_path}`,
//                 original_title: `${el.original_title}`,
//                 vote_average: `${el.vote_average}`,
//                 vote_count: `${el.vote_count}`,
//                 popularity: `${el.popularity}`,
//                 genre_ids: `${el.genre_ids}`,
//                 overview: `${el.overview}`,
//                 release_date: `${el.release_date}`
//             })
// //console.log(response)
//         })
//         localStorage.setItem("moviess", JSON.stringify(moviesArray));
   
//     });
//     //console.log(response.results)
//     //console.log(moviesArray)
// }
// writeLocalStor()



// localStorage.setItem("moviess", JSON.stringify(moviesArray));

//console.log(JSON.parse( localStorage.getItem("moviess")))
//==============================================
// const root = document.querySelector("#root");


// function renderMovies() {
//     const movies =JSON.parse( localStorage.getItem("moviess"));
//   //console.log(movies)
//     const listMurkup = movies.map(movie => {
//         //console.log(movie)
//         const liEl = `<div class="movie-card" data-movieId=${movie.id}>
//                  <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
//                  <div class="movie-info">
//                      <h2 class="movie-title">${movie.original_title}</h2>
//                     <h3 class="span-title">${movie.genre_ids} | ${movie.release_date}</h3>
//                      </div>
//                  </div>` ;
//         return liEl;
//     }).join('');
//    //root.insertAdjacentHTML('beforeend', listMurkup)
 
// }
// renderMovies();
// //renderMovie();
// const watchBtn = document.querySelector('.card-btn-watched');
// console.log(watchBtn)
//=================================================
// async function onMovieClick(event) {
//   // event.preventDefault()
//   const movieCard = event.target.closest('.movie-card');
//   const movieId = movieCard.dataset.movieid;
//   console.log(movieId);
//   const response = await newsApiServise.getMovieInfo(movieId);
//   console.log(response);
//   modalContainer.innerHTML = renderMovie(response);
//   openModal();
//   addWatchedFilmToLocaleStorage(response);
// }

