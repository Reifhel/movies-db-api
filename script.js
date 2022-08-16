import { api_key } from './api_key.js';
const apiKey = api_key();

async function getPopularMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language-pt-BR`);
    const data = await response.json();
    return data.results;
}

function renderMovie(movie) {
    const movies = document.getElementById('filmes');
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <div class="movie-informations">

        <div class="movie-image">
            <img src=https://image.tmdb.org/t/p/w500${movie.poster_path} alt="${movie.title}"/>
        </div>

        <div class="movie-text">
            <h4>${movie.title} (${movie.release_date.substring(0,4)})</h4>
            <div class="rating-favorites">
                <div class="rating">
                    <img src="images/star.png" alt="Star Icon"/>
                    <span>${movie.vote_average}</span>
                </div>
                <div class="favorite">
                    <img src="images/heart.svg" alt="Star Icon"/>
                    <span>Favoritar</span>
                </div>
            </div>
        </div>

        <div class="movie-description">
            <span>${movie.overview}</span>
        </div>

    </div>
    `;
    movies.appendChild(movieEl);
    return movieEl;
}

async function init() {
    const movies = await getPopularMovies();
    movies.forEach(movie => {
        renderMovie(movie);
    });
    


}

init()