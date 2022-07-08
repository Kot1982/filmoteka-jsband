export function renderMovies(root) {
    const movies =JSON.parse( localStorage.getItem("watchedMovies"));
  //console.log(movies.release_date)
    if (movies === null || root === null) {
        return
    } else {
      const listMurkup = movies.map(movie => {
        //console.log(movie.release_date)
          getGenreNames(movie.genres)
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                   <h3 class="span-title">${(genreArray).join(',  ')} | ${movie.release_date.slice(
    0,
    4,
  )}<span class="span-rejt">${(movie.vote_average).toFixed(1)}</span></h3>
                     </div>
                 </div>` ;
        return liEl;
    }).join('');
    //console.log(root)
   root.innerHTML = listMurkup;  
    }
   
 
}


export function renderMoviesQueue(rootQueue) {
    const moviesQueue =JSON.parse( localStorage.getItem("queuedMovies"));
 // console.log(moviesQueue)
    if (moviesQueue === null || rootQueue === null) {
        return
    } else {
       const listMurkup = moviesQueue.map(movie => {
          // console.log(movie)
          // console.log(genreArray)
           getGenreNames(movie.genres)
           
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                    <h3 class="span-title">${(genreArray).join(',  ')} | ${movie.release_date.slice(
    0,
    4,
  )}<span class="span-rejt">${(movie.vote_average).toFixed(1)}</span></h3>
                     </div>
                 </div>` ;
        return liEl;
    }).join('');
    //console.log(root)
   rootQueue.innerHTML = listMurkup;
    }
}

let genreArray = [];
function getGenreNames(genres) {
    genres.map(el => {
        genreArray.push(el.name)
        if (genreArray.length === 2 || genreArray.length === 1) {
           genreArray
        } if (genreArray.length >= 3) {
             genreArray.splice(2, 3, 'Other')
        } if (genreArray.length === 0) {
             genreArray.push('No genres')
        }
    })
}

