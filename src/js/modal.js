import NewsApiServise from './/api-service';

const newsApiServise = new NewsApiServise();



const moviesContainer = document.querySelector('.movies-home');
const modalContainer = document.querySelector( '.modal-conteiner');
console.log(moviesContainer);
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
console.log(closeBtn)

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
openModal()
}



function renderMovie (response){

  const markup = `<div class="modal-conteiner" data-movieId="${response.id}">
  <div class='modal-conteiner-content'> <img class="modal-conteiner-img" src="https://image.tmdb.org/t/p/w500${response.poster_path}" alt="card">
  </div>
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
              <span class='card-item-original-title'>${response.original_title}</span>
            </li>
            <li class='card-item'>
              Genre
              <p class='card-item-genres'>${response.genres.map(genre => genre.name).join(',')}
                  <span class='card-item-genre'></span>
              </p>
            </li>
          </ul>
          <p class='card-description'>About</p>
          <p class='card-text'>${response.overview}</p>
          <div class='card-list-btn'>
            <button type='button' class='card-btn-watched'>add to <br /> Watched</button>
            <button type='button' class='card-btn-que'>add to queue</button>
          </div>
        </div>
      </div>
  </div>
  `
  return markup;
}

function openModal() {
   modalContainer.classList.add('is-open');
  backdrop.classList.add('is-open');
  backdrop.classList.remove('is-hidden')
  // document.overflow = 'hidden';

}


// function onCloseModal(){
//   modalContainer.classList.remove('is-open');
//   backdrop.classList.remove('is-open');
//   backdrop.classList.add('is-hidden')
// //   document.overflow = undefined;
//  }

function onCloseModal(){
  modalContainer.classList.remove('is-open');
 backdrop.classList.remove('is-open');
  backdrop.classList.add('is-hidden');
}

