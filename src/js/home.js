
import NewsApiServise from './api-service';
import handlerPagination from './pagination';
import debounce from 'lodash.debounce'
import themeChanger from './theme';


const newsApiServise = new NewsApiServise();
const pagination = document.querySelector('.pagination-thumb');
const movies = document.querySelector('.movies-home');
const spinner = document.querySelector('.sk-circle');
const swicher = document.querySelector(".theme-switch__toggle");
const mainInput = document.querySelector(".header-input");
const allertMovie = document.querySelector(".allert"); 
let genre;
let currentPage = 1;
swicher.addEventListener('change', themeChanger);
GenreWriteLocalStorage()
export default function renderTrendMovies(currentPage) {
  //  localStorage.setItem("moviess", JSON.stringify(moviesArray));
  //  writeLocalStor()
  spinner.classList.remove('visually-hidden');
  newsApiServise.getTrendMovies(currentPage).then(response => {
    console.log(111);
    console.log(response);
     newsApiServise.resetPage()
    //console.log(response.results);
const totalResult = response.total_results;
    currentPage = response.page;
    //console.log(response.page);

       const instance = handlerPagination();
          instance.setItemsPerPage(20);
      instance.setTotalItems(totalResult);

    instance.movePageTo(currentPage);

    instance.on('afterMove', event => {
     
            newsApiServise.page = event.page;
      currentPage = newsApiServise.page;
      renderTrendMovies(currentPage)
          });
    
   
    const markup = response.results
      .map(({ poster_path, original_title, release_date, genre_ids, vote_average, id }) => {
         getGenreName(genre_ids)
        return `<div class="movie-card" data-movieId=${id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${original_title}</h2>
                    <h3 class="span-title">${(genre).join(',  ')} | ${release_date.slice(
    0,
    4,
  )}</h3>
                     </div>
                 </div>`;
      })
      .join('');
    movies.innerHTML = markup;
  setTimeout(() => {
  spinner.classList.add('visually-hidden');
}, 500)
    
  });
}

     renderTrendMovies(currentPage);



function GenreWriteLocalStorage() {
   newsApiServise.getGenres().then(res => {
      //console.log(res)
      res.forEach(genre => {
        //console.log(genre)
        localStorage.setItem(genre.id, genre.name)
      })
     })
}



function getGenreName(genre_ids) {
  genre = [];
  genre_ids.forEach(id => {
    //console.log(id)
    genre.push(localStorage.getItem(id));
   
    
    //console.log(genre)
  })
   if (genre.length === 2) {
      genre.slice(0, 2)
    }   if(genre.length >= 3) {
      genre.splice(2, 3, 'Other')
    }
       
   }

// function newPage(currentPage) {
//   newsApiServise.getTrendMovies(currentPage).then(response => {
//   const markup = response.results
//     .map(({ poster_path, original_title, release_date, genre_ids, vote_average }) => {
//       return `<div class="movie-card">
//                  <img class="movie-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="card">
            
//                  <div class="movie-info">
//                      <h2 class="movie-title">${original_title}</h2>
//                     <h3 class="span-title">${genre_ids} <span class="span-bord">${release_date}</span><span class="span-rejt">${(vote_average).toFixed(1)}</span></h3>
//                      </div>
//                  </div>`;
//     })
//     .join('');
//   movies.innerHTML = markup;
//   spinner.classList.add('visually-hidden');
// })
//   }
function searchOurMovie(currentPage) {

  
 
  const ourMovie = mainInput.value
  if (ourMovie === "") {
    return renderTrendMovies(currentPage);
  }
 
  spinner.classList.remove('visually-hidden');
  newsApiServise.searchMovie(ourMovie)
    .then(resp => {
      newsApiServise.resetPage()
    renderSearchMovie(resp)
      setTimeout(() => {
  spinner.classList.add('visually-hidden');
}, 500)
       const totalResult = resp.total_results;
      currentPage = resp.page;
  


    
      const instance = handlerPagination();

          instance.setItemsPerPage(20);
      instance.setTotalItems(totalResult);
    instance.movePageTo(currentPage);
    instance.on('afterMove', event => {
            newsApiServise.page = event.page;
      currentPage = newsApiServise.page;
       console.log(event.page)
     searchOurMovie(currentPage)
          });
     
     })
    .catch(error => error)
    

}
 function renderSearchMovie(resp) {
     

    
  
  const newMarkup = resp.results

  .map(
    ({ poster_path, original_title, release_date, genre_ids, id, src = poster_path === null ?'https://d2j1wkp1bavyfs.cloudfront.net/legacy/assets/mf-no-poster-available-v2.png' : `https://image.tmdb.org/t/p/w500${poster_path}` }) => {
        getGenreName(genre_ids)
       
        return `<div class="movie-card" data-movieId=${id}>
                 <img class="movie-img" src="${src}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${original_title}</h2>
                    <h3 class="span-title">${(genre).join(',  ')} | ${release_date.slice(0,4,)}</h3>
                     </div>
                 </div>`;
      })
    .join('');

  movies.innerHTML = newMarkup;
  if (resp.results.length === 0) {
    allertMovie.classList.remove('visually-hidden')
    pagination.classList.add('visually-hidden')
  }
  else {
    allertMovie.classList.add('visually-hidden')
    pagination.classList.remove('visually-hidden')
  }

}


mainInput.addEventListener('input', debounce(searchOurMovie, 300))

