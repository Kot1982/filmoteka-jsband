export function renderMovies(root) {
    const movies =JSON.parse( localStorage.getItem("watchedMovies"));
  //console.log(movies)
    if (movies === null || root === null) {
        return
    } else {
      const listMurkup = movies.map(movie => {
        //console.log(movie)
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                    <h3 class="span-title">${movie.genres
                .map(genre => genre.name).slice(0, 3).join(', ')} | ${movie.release_date.slice(
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
        //console.log(movie)
        const liEl = `<div class="movie-card" data-movieId=${movie.id}>
                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="card">
            
                 <div class="movie-info">
                     <h2 class="movie-title">${movie.original_title}</h2>
                    <h3 class="span-title">${movie.genres
                .map(genre => genre.name).slice(0, 3).join(', ')} | ${movie.release_date.slice(
    0,
    4,
  )}</h3>
                     </div>
                 </div>` ;
        return liEl;
    }).join('');
    //console.log(root)
   rootQueue.innerHTML = listMurkup;
    }
}