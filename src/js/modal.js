import NewsApiServise from './/api-service';
//import addWatchedFilmToLocaleStorage from './local-storage';
// import addWatchedFilmToLocaleStorage from './index';
const newsApiServise = new NewsApiServise();

let selectedMovieResponse = null;

const moviesContainer = document.querySelector('.movies-home');
const modalContainer = document.querySelector('.modal-conteiner');
export const backdrop = document.querySelector('.backdrop-movie');
const closeBtn = document.querySelector('.modal-close-btn.close');

const movieLibrary = document.querySelector('.movies');
//console.log(movieLibrary);
movieLibrary.addEventListener('click', onMovieClick);

// moviesContainer.addEventListener('click', onMovieClick);
if (moviesContainer) {
  moviesContainer.addEventListener('click', onMovieClick);
}
closeBtn.addEventListener('click', onCloseModal);

async function onMovieClick(event) {
  // event.preventDefault()
  const movieCard = event.target.closest('.movie-card');
  const movieId = movieCard.dataset.movieid;
  console.log(movieId);
  selectedMovieResponse = await newsApiServise.getMovieInfo(movieId);

  modalContainer.innerHTML = renderMovie();

  openModal();
  const watched = document.querySelector('.card-btn-watched');
  watched.addEventListener('click', onLocalStorageWatched);
  const que = document.querySelector('.card-btn-que');
  que.addEventListener('click', onLocalStorageQue);
  // addWatchedFilmToLocaleStorage(response);
}

function renderMovie() {
  const queuedMovies = localStorage.getItem('queuedMovies');
  const queuedMoviesArray = JSON.parse(queuedMovies) || [];
  const isMovieQueued = queuedMoviesArray.some(movie => movie.id === selectedMovieResponse.id
  );

  const watchedMovies = localStorage.getItem('watchedMovies');
  const watchedMoviesArray = JSON.parse(watchedMovies) || [];
  const isMovieWatched = watchedMoviesArray.some(movie => movie.id === selectedMovieResponse.id);

  const markup = `
   <img class="modal-conteiner-img" src="https://image.tmdb.org/t/p/w500${
     selectedMovieResponse.poster_path
   }" alt="card">
  <div class='card-container'>
          <h2 class='card-title'>${selectedMovieResponse.original_title}</h2>
          <ul class='card-list'>
            <li class='card-item'>
              Vote / Votes
              <p class='card-item-vote'>
                <span class='card-item-average'>${
                  selectedMovieResponse.vote_average
                }</span>/
                <span class='card-item-count'>${
                  selectedMovieResponse.vote_count
                }</span>
              </p>
            </li>
            <li class='card-item'>
              Popularity
              <span class='card-item-popularity'>${
                selectedMovieResponse.popularity
              }</span>
            </li>
            <li class='card-item'>
              Original Title
              <span class='card-item-original-title'>${
                selectedMovieResponse.original_title
              }</span>
            </li>
            <li class='card-item'>
              Genre
              <p class='card-item-genres'>${selectedMovieResponse.genres
                .map(genre => genre.name)
                .slice(0, 3)
                .join(', ')}
                <span class='card-item-genre'></span>
              </p>
            </li>
          </ul>
          <p class='card-description'>About</p>
          <p class='card-text'>${selectedMovieResponse.overview}</p>
          <div class='card-list-btn'>
            <button type='button' class='card-btn-watched' data-movieId=${
              selectedMovieResponse.id
            }>${
    isMovieWatched ? 'remove from watched' : 'add to Watched'
  }</button>
            <button type='button' class='card-btn-que' data-movieId=${
              selectedMovieResponse.id
            }>${isMovieQueued ? 'remove from queue' : 'add to queue'}</button>
          </div>
        </div>
      </div>
  `;
  return markup;
}

function openModal() {
  //  modalContainer.classList.add('is-open');
  backdrop.classList.add('is-open');
  backdrop.classList.remove('is-hidden');
  // document.overflow = 'hidden';
}

export function onCloseModal() {
  // modalContainer.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  backdrop.classList.add('is-hidden');
}

// добавляє фільм при кліку в LocalStrage

const buttonLabelWatchedAdd = 'add to Watched';
const buttonLabelWatchedRemove = 'remove from Watched';
const buttonLabelQueuedAdd = 'add to Queue';
const buttonLabelQueueRemove = 'remove from Queue';

function onLocalStorageWatched(event) {
  const watchedButton = event.target;

  const watchedMovies = localStorage.getItem('watchedMovies');
  const watchedMoviesArray = JSON.parse(watchedMovies) || [];
  console.log(watchedMoviesArray);
  if (watchedMoviesArray.some(movie => movie.id === selectedMovieResponse.id)) {
    const movieIndex = watchedMoviesArray.findIndex(
      movie => movie.id === selectedMovieResponse.id
    );

    watchedMoviesArray.splice(movieIndex, 1);
    watchedButton.innerText = buttonLabelWatchedAdd;
  } else {
    watchedMoviesArray.push(selectedMovieResponse);
    watchedButton.innerText = buttonLabelWatchedRemove;
    // watchedButton.classList.replace(
    //   'card-btn-watched',
    //   'card-btn-remove-watched'
    // );
  }
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMoviesArray));
  console.log(watchedMoviesArray);
}

function onLocalStorageQue(event) {
  const queuedButton = event.target;
  const queuedMovies = localStorage.getItem('queuedMovies');
  const queuedMoviesArray = JSON.parse(queuedMovies) || [];
  // console.log(queuedMoviesArray);
  if (queuedMoviesArray.some(movie => movie.id === selectedMovieResponse.id)) {
    const movieIndex = queuedMoviesArray.findIndex(
      movie => movie.id === selectedMovieResponse.id
    );

    queuedMoviesArray.splice(movieIndex, 1);
    queuedButton.innerText = buttonLabelQueuedAdd;
  } else {
    queuedMoviesArray.push(selectedMovieResponse);
    queuedButton.innerText = buttonLabelQueueRemove;
    
  }
  localStorage.setItem('queuedMovies', JSON.stringify(queuedMoviesArray));
  console.log(queuedMoviesArray);
}

// async function onMovieLibraryClick(event) {
//   const movieLibraryCard = event.target.closest('.movie-library-card');
//   const movieLibraryId = movieLibraryCard.dataset.movieid;
//   console.log(movieLibraryId);
//   const response = await newsApiServise.getMovieInfo(movieLibraryId);
//   console.log(response);
// }
