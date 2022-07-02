import NewsApiServise from './api-service';
import handlerPagination from './pagination';
const newsApiServise = new NewsApiServise();
const movies = document.querySelector('.movies-home');
const spinner = document.querySelector('.sk-circle');
let genre;

function renderTrendMovies() {
  spinner.classList.remove('visually-hidden');
  newsApiServise.getTrendMovies().then(response => {
    console.log(response.results);
const totalResult = response.total_results;
    let currentPage = response.page;
    
    const instance = handlerPagination();
          instance.setItemsPerPage(20);
    instance.setTotalItems(totalResult);
    instance.movePageTo(currentPage);
    
    instance.on('afterMove', event => {
            newsApiServise.page = event.page;
      const currentPage = newsApiServise.page;
            newPage( currentPage);
          });
          this.page = this.page + 1;
    const markup = response.results
      .map(({ poster_path, original_title, release_date, genre_ids, vote_average, id }) => {
        // console.log(poster_path)
        //onSaveGenres(`${genre_ids}`)
        // genres(`${genre_ids}`)
        return `<div class="movie-card" data-movieId=${id}>
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
renderTrendMovies();

function getGenre() {
  newsApiServise.getAllGenres().then(response => {
    console.log(response.results);
  })
}

getGenre()


 const refs = {
    openModalBtn: document.querySelector('.footer-link'),
    closeModalBtn: document.querySelector('.close__modal'),
    modal: document.querySelector('[data-modal]'),
  };
 
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle('is-hidden');
}
  
function newPage(page) {
  newsApiServise.getTrendMovies( page).then(response => {
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
  spinner.classList.add('visually-hidden');
})
  }