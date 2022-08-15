const movies = [
    {
      image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      title: 'Batman',
      rating: 9.2,
      year: 2022,
      description: "Descrição do filme…",
      isFavorited: true,
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      title: 'Avengers',
      rating: 9.1,
      year: 2019,
      description: "Descrição do filme…",
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      title: 'Doctor Strange',
      rating: 9.2,
      year: 2022,
      description: "Descrição do filme",
      isFavorited: false
    },
  ];

function renderMovie(movie) {
    const movies = document.getElementById('filmes');
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <div class="movie-informations">

        <div class="movie-image">
            <img src="${movie.image}" alt="Batman (2022)"/>
        </div>

        <div class="movie-text">
            <h4>${movie.title} (${movie.year})</h4>
            <div class="rating-favorites">
                <div class="rating">
                    <img src="images/star.png" alt="Star Icon"/>
                    <span>${movie.rating}</span>
                </div>
                <div class="favorite">
                    <img src="images/heart.svg" alt="Star Icon"/>
                    <span>Favoritar</span>
                </div>
            </div>
        </div>

        <div class="movie-description">
            <span>${movie.description}</span>
        </div>

    </div>
    `;
    movies.appendChild(movieEl);
    return movieEl;
}

movies.forEach(movie => renderMovie(movie))