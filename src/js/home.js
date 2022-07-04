import NewsApiServise from './api-service';
import handlerPagination from './pagination';
import toggleModal from './modal-team';

const newsApiServise = new NewsApiServise();
const movies = document.querySelector('.movies-home');
const spinner = document.querySelector('.sk-circle');
let genre;
let currentPage = 1;
GenreWriteLocalStorage()
export default function renderTrendMovies(currentPage) {
  spinner.classList.remove('visually-hidden');
  newsApiServise.getTrendMovies(currentPage).then(response => {
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
    spinner.classList.add('visually-hidden');
    
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
const swicher = document.querySelector(".theme-switch__toggle");
const body = document.querySelector("body");
const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};


if (!localStorage.getItem("theme")) {
    body.classList.add('light-theme')
    swicher.classList.add('theme-switch__toggle')
    localStorage.setItem('theme', theme.light)
   
}

else {
    console.log(localStorage.getItem("theme"))

    body.classList.add(localStorage.getItem("theme"))
    
}

if (body.classList.contains("dark-theme")) {
    swicher.checked = true
}
swicher.addEventListener('change', themeChanger);


function themeChanger() {
  if (body.classList.contains("dark-theme")){
        body.classList.add("light-theme");
      body.classList.remove("dark-theme");
      localStorage.setItem('theme', theme.light)
     
    //   swicher.classList.add("false");
    //   swicher.classList.remove("true");
     
    }
  else {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
      localStorage.setItem('theme', theme.dark)
    //   swicher.classList.add("true");
    //   swicher.classList.remove("false");
     
    }
}




