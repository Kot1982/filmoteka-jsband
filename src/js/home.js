import NewsApiServise from './api-service';

const newsApiServise = new NewsApiServise();
const movies = document.querySelector('.movies-home');
let genre;

function renderTrendMovies() {
  newsApiServise.getTrendMovies().then(response => {
    console.log(response.results);

    const markup = response.results
      .map(({ poster_path, original_title, release_date, genre_ids, vote_average }) => {
        return `<div class="movie-card">
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${original_title}</h2>
                    <h3 class="span-title">${genre_ids} <span class="span-bord">${release_date}</span><span class="span-rejt">${(vote_average).toFixed(1)}</span></h3>
                     </div>
                 </div>`;
      })
      .join('');
    movies.innerHTML = markup;
  });
}
renderTrendMovies();

function getGenre() {
  newsApiServise.getAllGenres().then(response => {
    console.log(response.results);
  })
}

 getGenre()