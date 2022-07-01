import NewsApiServise from './api-service';



const newsApiServise = new NewsApiServise();
const refs = {
    watchedBtn: document.querySelector('.watched-btn'),
    queueBtn: document.querySelector('.queue-btn'),
    moviesGallery: document.querySelector('.movies '),
    libraryBtn: document.querySelector('.library-btn'),
}

refs.libraryBtn.addEventListener('focus', onClickWatched);
refs.watchedBtn.addEventListener('click', onClickWatched);
refs.queueBtn.addEventListener('click', onClickQueue);

function onClickWatched() {
    refs.watchedBtn.classList.add('active-btn');
    refs.queueBtn.classList.remove('active-btn');
    const watched = JSON.parse(localStorage.getItem('watched'));
  
    refs.moviesGallery.innerHTML = '';

    if (watched === null || watched.length === 0) {
        showWarning();
    } else {
      // зробити маркап на 9 карток
    }
  }

function onClickQueue() {
    refs.watchedBtn.classList.remove('active-btn');
    refs.queueBtn.classList.add('active-btn');
    const queue = JSON.parse(localStorage.getItem('queue'));
    
    refs.moviesGallery.innerHTML = '';
  
    if (queue === null || queue.length === 0) {
      showWarning();
    } else {
      // зробити маркап на 9 карток
    }
  }

  function showWarning() {
  refs.moviesGallery.insertAdjacentHTML('beforebegin', '<p class = "warning">This list is empty. Please, add some movies from HOME.</p>');
  }