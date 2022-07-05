// let watchedFilms = [];
// import root from './index'
// const root = document.querySelector("#root");
//  console.log(root)
// export default function addWatchedFilmToLocaleStorage(filmData) {

//     const btnWatched = document.querySelector('.card-btn-watched');

//     btnWatched.addEventListener('click', onBtnWatchedClick);

// function onBtnWatchedClick(e) {
//     try {
//         watchedFilms = [...JSON.parse(localStorage.getItem('watched'))];
//     } catch (error) {
//         watchedFilms = [];
//     }

//     for (const film of watchedFilms) {
//         if (filmData.id === film.id) {
//             const filteredFilm = watchedFilms.filter(film => film.id !== filmData.id);
//             watchedFilms = [...filteredFilm];
//             localStorage.setItem('watched', JSON.stringify(watchedFilms));
//             return;
//         }
//     }
//     watchedFilms.push(filmData);
//     localStorage.setItem('watched', JSON.stringify(watchedFilms));
// }
// }
// //console.log(localStorage.getItem('watched'))
// console.log(JSON.parse(localStorage.getItem("watched")))

// function renderMovies() {
//     const movies =JSON.parse( localStorage.getItem("watched"));
//   console.log(movies)
//     const listMurkup = movies.map(movie => {
//         //console.log(movie)
//         const liEl = `<div class="movie-card" data-movieId=${movie.id}>
//                  <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
//                  <div class="movie-info">
//                      <h2 class="movie-title">${movie.original_title}</h2>
//                     <h3 class="span-title">${movie.genres} | ${movie.release_date}</h3>
//                      </div>
//                  </div>` ;
//         return liEl;
//     }).join('');
//     console.log(root)
//    //root.insertAdjacentHTML('beforeend', listMurkup)
 
// }
// renderMovies();