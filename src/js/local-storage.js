let watchedFilms = [];

export default function addWatchedFilmToLocaleStorage(filmData) {

    const btnWatched = document.querySelector('.card-btn-watched');

    btnWatched.addEventListener('click', onBtnWatchedClick);

function onBtnWatchedClick(e) {
    try {
        watchedFilms = [...JSON.parse(localStorage.getItem('watched'))];
    } catch (error) {
        watchedFilms = [];
    }

    for (const film of watchedFilms) {
        if (filmData.id === film.id) {
            const filteredFilm = watchedFilms.filter(film => film.id !== filmData.id);
            watchedFilms = [...filteredFilm];
            localStorage.setItem('watched', JSON.stringify(watchedFilms));
            return;
        }
    }
    watchedFilms.push(filmData);
    localStorage.setItem('watched', JSON.stringify(watchedFilms));
}
}