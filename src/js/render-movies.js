import jakeGif from '../images/error.jpg';
export function renderMovies(root) {
  const movies = JSON.parse(localStorage.getItem('watchedMovies'));

  if (movies === null || root === null) {
    return;
  } else {
    const listMurkup = movies
      .map(movie => {
        getGenreNames(movie.genres);
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${
                   movie.poster_path
                 }" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                    <h3 class="span-title">${genreArray.join(
                      ',  '
                    )} | ${movie.release_date.slice(
          0,
          4
        )}<span class="span-rejt">${movie.vote_average.toFixed(1)}</span></h3>
                     </div>
                 </div>`;
        return liEl;
      })
      .join('');

    root.innerHTML = listMurkup;

    if (listMurkup.length === 0) {
      root.innerHTML = '';
      renderFillerWatch();
      root.insertAdjacentHTML('afterbegin', fillerMarkup);
    }
  }
}
let fillerMarkup = '';
function renderFillerWatch() {
  fillerMarkup = `
  <img class="filler__img" src="${jakeGif}" alt="jake-the-doge">
    
  `;
}

export function renderMoviesQueue(rootQueue) {
  const moviesQueue = JSON.parse(localStorage.getItem('queuedMovies'));

  if (moviesQueue === null || rootQueue === null) {
    return;
  } else {
    const listMurkup = moviesQueue
      .map(movie => {
        getGenreNames(movie.genres);
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${
                   movie.poster_path
                 }" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                    <h3 class="span-title">${genreArray.join(
                      ',  '
                    )} | ${movie.release_date.slice(
          0,
          4
        )}<span class="span-rejt">${movie.vote_average.toFixed(1)}</span></h3>
                     </div>
                 </div>`;
        return liEl;
      })
      .join('');

    rootQueue.innerHTML = listMurkup;
    if (listMurkup.length === 0) {
      rootQueue.innerHTML = '';
      renderFillerWatch();
      rootQueue.insertAdjacentHTML('afterbegin', fillerMarkup);
    }
  }
}

let genreArray = [];
function getGenreNames(genres) {
  genres.map(el => {
    genreArray.push(el.name);
    if (genreArray.length === 2 || genreArray.length === 1) {
      genreArray;
    }
    if (genreArray.length >= 3) {
      genreArray.splice(2, 3, 'Other');
    }
    if (genreArray.length === 0) {
      genreArray.push('No genres');
    }
  });
}
