import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import NewsApiServise from './api-service';

const newsApiServise = new NewsApiServise();

const DEBOUNCE_DELAY = 300;

const movies = document.querySelector('.movies-home');

const searchForm = document.querySelector('.header-form');
const searchInput = document.querySelector('.header-input');
let currentPage = 1;

searchInput.addEventListener(
  'input',
  debounce(searchMovieByKeyword, DEBOUNCE_DELAY)
);

function searchMovieByKeyword(currentPage) {
  const movieByKeyword = searchInput.value;
  // movies.innerHTML = '';

  if (movieByKeyword) {
    searchMovieByKeyword(movieByKeyword)
      .then(dataProcessing)
      .catch(error => {
        Notify.failure(
          'Sorry, there are no results matching your search query. Please try again. 🧐'
        );
        console.log(error);
      });
  }

  function dataProcessing(data) {
    if (searchMovieByKeyword === '') {
      Notify.info(`Hooray! We found movies. 🤩`);
      return renderTrendMovies(currentPage);
    }
  }

  function showMovie(resp) {
    const newMarkup = resp.results

      .map(
        ({
          poster_path,
          original_title,
          release_date,
          genre_ids,
          id,
          src = poster_path === null
            ? 'https://d2j1wkp1bavyfs.cloudfront.net/legacy/assets/mf-no-poster-available-v2.png'
            : `https://image.tmdb.org/t/p/w500${poster_path}`,
        }) => {
          getGenreName(genre_ids);

          return `<div class="movie-card" data-movieId=${id}>
                 <img class="movie-img" src="${src}" alt="card">

                 <div class="movie-info">
                     <h2 class="movie-title">${original_title}</h2>
                    <h3 class="span-title">${genre.join(
                      ',  '
                    )} | ${release_date.slice(0, 4)}</h3>
                     </div>
                 </div>`;
        }
      )
      .join('');
  }

  movies.innerHTML = newMarkup;
}

// const form = document.querySelector('.js-search-form');
// const input = document.querySelector('.js-form-input');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const apiSearclUrl = `${API_URL_SEARCH}${input.value}`;
//   if (input.value) {
//     renderTrendMovies(apiSearclUrl);
//     Notify.info(`Hooray! We found movies. 🤩`);

//     input.value = '';
//   } else {
//     Notify.failure(
//       'Sorry, there are no results matching your search query. Please try again. 🧐'
//     );
//   }
// });
