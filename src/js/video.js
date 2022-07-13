// import NewsApiServise from './api-service';
// const newsApiServise = new NewsApiServise();
// import selectedMovieResponse from './modal'
// let keyYouTube;
// import  movieLibrarys from './modal'
// import movieId from './modal'

//  const movieLibrarys = document.querySelector('.card-btn-youtub');
//   console.log(movieLibrarys)
  // if (movieLibrarys === null) {
  //   return;
  // } else {
  //     movieLibrarys.addEventListener('click',  renderTrendMovies(movieId));
  // }

//renderTrendMovies(movieId)
// async function onMovieClick(event) {
//   const movieCard = event.target.closest('.movie-card');
//   console.log(movieCard)
//    movieId = movieCard.dataset.movieid;
//   console.log(movieId)
//   renderTrendMovies(movieId)
//  selectedMovieResponse = await newsApiServise.getMovieInfo(movieId);
 
// }
// console.log(movieId)
 export default function renderTrendMovies(movieId) {
  const results = newsApiServise.getVideoTreiler(movieId).then(res => {

    console.log(res.results)
    //return res.results;
    res.results.find(el => {
      console.log(el)
      console.log(el.name.includes('Official'))
      if (el.name.includes('Official')) {
        keyYouTube = el.key;
        console.log(keyYouTube)
      }
    })

  })
   trailer(keyYouTube)
   
 
}
function trailer(keyYouTube) {
  window.open(`https://www.youtube.com/watch?v=${keyYouTube}`);
}

// function  templateTrailer(keyYouTube) {
//   return  `
//     <iframe
//     class="youtube-video"
//     src="https://www.youtube.com/embed/${youtubeKey}"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen
//   ></iframe>
// `
// }
// export const renderTrailer = (youtubeKey) => {
//   const markup = templateTrailer(youtubeKey);
//   const trailerPlayerRef = document.querySelector('.modal-trailer');
//   trailerPlayerRef.insertAdjacentHTML('afterbegin', markup);
// };
// renderTrailer(keyYouTube)
//renderTrendMovies(movieId)
// function getMovieId() {
//   newsApiServise.getMovieInfo(movieId).then(res => {
//     console.log(res)
//   })
// }
// getMovieId()
// selectedMovieResponse =  newsApiServise.getMovieInfo(movieId);
// renderTrendMovies(selectedMovieResponse)
 //console.log("id", selectedMovieResponse)
// 62cb096b46aed4087cb7f976

// https://www.youtube.com/watch?v=uVrlq2tT90U

//  const templateTrailer = (youtubeKey) => `
//     <iframe
//     class="youtube-video"
//     src="https://www.youtube.com/embed/${youtubeKey}"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen
//   ></iframe>
// `;

// const renderTrailer = (youtubeKey) => {
//   const markup = templateTrailer(youtubeKey);
//   const trailerPlayerRef = document.querySelector('.modal-trailer');
//   trailerPlayerRef.insertAdjacentHTML('afterbegin', markup);
// };

// import { store } from '../store';
// import { fetchMovieTrailer } from '../services/serviceMoviesAPI';
// import { renderTrailer } from '../render/renderTrailer';

//  import Axios from 'axios';
// // const key = '125725f49ad2ae69609a1a5a9c4211d9';
// // const url = `https://api.themoviedb.org/3/`;
// const fetchMovieTrailer = async (movieId, category) => {
//   try {
//       const res = await Axios.get(`/${category}/${movieId}/videos`);
//       console.log(res)
//     return res.data.results;
//   } catch (e) {
//     return console.error(e);
//   }
// };

// console.log( fetchMovieTrailer())


// const getTrailers = async (movieId, category) => {
//   const results = await fetchMovieTrailer(movieId, category);
//   const officialTrailer = results.find((trailer) =>
//     trailer.name.includes('Official')
//   );

//   return officialTrailer;
// };

// export const renderTrailerBtn = async (movieId, category) => {
//   const officialTrailer = await getTrailers(movieId, category);

//   if (!officialTrailer) {
//     return;
//   }
//   showTrailerBtn();
//   openTrailerOnclick();
// };

// const showTrailerBtn = () => {
//   const watchTrailerBtnRef = document.querySelector('.watch-trailer-btn');
//   watchTrailerBtnRef.classList.remove('is-hidden');
// };

// const openTrailerOnclick = () => {
//   const watchTrailerBtnRef = document.querySelector('.watch-trailer-btn');
//   watchTrailerBtnRef.addEventListener('click', async (e) => {
//     const movieId = e.target.getAttribute('data-id');
//     const category = e.target.getAttribute('data-category');
//     const officialTrailer = await getTrailers(movieId, category);

//     const { key: youtubeKey } = officialTrailer;
//     showTrailerWindow();
//     renderTrailer(youtubeKey);
//   });
// };

// const backdropTrailer = document.querySelector('.backdrop-trailer');
// const trailerPlayerRef = document.querySelector('.modal-trailer');

// const showTrailerWindow = () => {
//   backdropTrailer.classList.remove('is-hidden');
//   document.addEventListener('keydown', closeOnEscClick);
// };

// const closeTrailer = () => {
//   trailerPlayerRef.innerHTML = '';
//   backdropTrailer.classList.add('is-hidden');
//   document.removeEventListener('keydown', closeOnEscClick);
// };

// const closeOnBackdropClick = (e) => {
//   if (!e.target === e.currentTarget) return;
//   closeTrailer();
// };
// backdropTrailer.addEventListener('click', closeOnBackdropClick);

// const closeOnEscClick = (e) => {
//   if (e.code === 'Escape') {
//     closeTrailer();
//   }
// };

// import { templateTrailer } from '../templates/templateTrailer';

// export const renderTrailer = (youtubeKey) => {
//   const markup = templateTrailer(youtubeKey);
//   const trailerPlayerRef = document.querySelector('.modal-trailer');
//   trailerPlayerRef.insertAdjacentHTML('afterbegin', markup);
// };



// export const templateTrailer = (youtubeKey) => `
//     <iframe
//     class="youtube-video"
//     src="https://www.youtube.com/embed/${youtubeKey}"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen
//   ></iframe>
// `;