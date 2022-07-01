import NewsApiServise from './api-service';
const newsApiServise = new NewsApiServise();
// const key = '125725f49ad2ae69609a1a5a9c4211d9';
// const url = `https://api.themoviedb.org/3/`;
const movies = document.querySelector('.movies-home');
const spinner  = document.querySelector(".sk-circle");
let genre;

// function fetchPosts() {
//   return fetch(`${url}trending/movie/day?api_key=${key}&query=movie
//     &page=1`).then(response => {
//     return response.json();
//   });
// }
// fetchPosts();

function fgfh() {
  spinner.classList.remove('visually-hidden');
  newsApiServise.getTrendMovies().then(response => {
    console.log(response.results);

    const markup = response.results
      .map(({ poster_path, original_title, release_date, genre_ids, vote_average }) => {
        // console.log(poster_path)
        //onSaveGenres(`${genre_ids}`)
        // genres(`${genre_ids}`)
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
    spinner.classList.add('visually-hidden');
  });
}
fgfh();

function getGenre() {
  newsApiServise.getAllGenres().then(response => {
    console.log(response.results);
  })
}

getGenre()


  
