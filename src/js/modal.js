import NewsApiServise from './/api-service';

const newsApiServise = new NewsApiServise();

const moviesContainer = document.querySelector('.movies-home');
const modalContainer = document.querySelector('.modal-conteiner');
console.log(moviesContainer);
export const backdrop = document.querySelector('.backdrop-movie');
const closeBtn = document.querySelector('.modal-close-btn.close');
console.log(closeBtn);


moviesContainer.addEventListener('click', onMovieClick);
closeBtn.addEventListener('click', onCloseModal);

async function onMovieClick(event) {
  // event.preventDefault()
  const movieCard = event.target.closest('.movie-card');
  const movieId = movieCard.dataset.movieid;
  console.log(movieId);
  const response = await newsApiServise.getMovieInfo(movieId);
  console.log(response);
  modalContainer.innerHTML = renderMovie(response);
  openModal();
  const watched = document.querySelector('.card-btn-watched');
watched.addEventListener('click', onLocalStorageWatched);
const que = document.querySelector('.card-btn-que');
que.addEventListener('click', onLocalStorageQue);
}

function renderMovie(response) {
  const markup = `
   <img class="modal-conteiner-img" src="https://image.tmdb.org/t/p/w500${
     response.poster_path
   }" alt="card">
  <div class='card-container'>
          <h2 class='card-title'>${response.original_title}</h2>
          <ul class='card-list'>
            <li class='card-item'>
              Vote / Votes
              <p class='card-item-vote'>
                <span class='card-item-average'>${response.vote_average}</span>/
                <span class='card-item-count'>${response.vote_count}</span>
              </p>
            </li>
            <li class='card-item'>
              Popularity
              <span class='card-item-popularity'>${response.popularity}</span>
            </li>
            <li class='card-item'>
              Original Title
              <span class='card-item-original-title'>${
                response.original_title
              }</span>
            </li>
            <li class='card-item'>
              Genre
              <p class='card-item-genres'>${response.genres
                .map(genre => genre.name).slice(0, 3).join(', ')}
                <span class='card-item-genre'></span>
              </p>
            </li>
          </ul>
          <p class='card-description'>About</p>
          <p class='card-text'>${response.overview}</p>
          <div class='card-list-btn'>
            <button type='button' class='card-btn-watched' data-movieId=${response.id}>add to <br /> Watched</button>
            <button type='button' class='card-btn-que' data-movieId=${response.id}>add to queue</button>
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


// добавляє фільми при кліку в LocalStrage


const buttonLabelWatchedAdd = 'add to Watched';
const buttonLabelWatchedRemove = 'remove from Watched';
const buttonLabelQueuedAdd = 'add to Queue';
const buttonLabelQueueRemove = 'remove from Queue';



function onLocalStorageWatched(event) {
  const watchedButton = event.target;
  const movieId = event.target.dataset.movieid;
  console.log(movieId);
  
  const watchedMovies = localStorage.getItem('watchedMovies');
  const watchedMoviesArray = JSON.parse(watchedMovies) || [];
  console.log(watchedMoviesArray);
  if (watchedMoviesArray.includes(movieId)) {
    watchedMoviesArray.splice(watchedMoviesArray.indexOf(movieId), 1);
    watchedButton.innerText = buttonLabelWatchedAdd;
    
  } else {
    watchedMoviesArray.push(movieId);
    watchedButton.innerText = buttonLabelWatchedRemove;
  }
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMoviesArray));
  console.log(watchedMoviesArray);
}


function onLocalStorageQue(event) {
  const queuedButton = event.target;
  const movieId = event.target.dataset.movieid;
  console.log(movieId);
  const queuedMovies = localStorage.getItem('queuedMovies');
  const queuedMoviesArray = JSON.parse(queuedMovies) || [];
  console.log(queuedMoviesArray);
  if (queuedMoviesArray.includes(movieId)) {
    queuedMoviesArray.splice(queuedMoviesArray.indexOf(movieId), 1);
    queuedButton.innerText = buttonLabelQueuedAdd;
  } else {
    queuedMoviesArray.push(movieId);
    queuedButton.innerText = buttonLabelQueueRemove;
  }
  localStorage.setItem('queuedMovies', JSON.stringify(queuedMoviesArray));
  console.log(queuedMoviesArray);
}






