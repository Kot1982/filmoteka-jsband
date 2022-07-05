
// import NewsApiServise from './api-service';
// export let moviesArray = [];
 const root = document.querySelector("#root");
console.log(root)

let watchedFilms = [];
//import root from './index'
 //const root = document.querySelector("#root");
console.log(root)
export default function addWatchedFilmToLocaleStorage(filmData) {

    const btnWatched = document.querySelector('.card-btn-watched');

    btnWatched.addEventListener('click', onBtnWatchedClick);

function onBtnWatchedClick(e) {
    try {
        watchedFilms = [...JSON.parse(localStorage.getItem('watched'))];
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
}
//console.log(localStorage.getItem('watched'))
console.log(JSON.parse(localStorage.getItem("watched")))

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

