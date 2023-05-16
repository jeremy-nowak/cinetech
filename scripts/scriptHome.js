let displayFilms = document.querySelector("#displayFilms");
let displayTvShows = document.querySelector("#displayTvShows");
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJkYmQ1MmM2ZWNkNmJhNTZjY2Y4NTk2OTJkZDcwYSIsInN1YiI6IjY0NjFlNTQ0ZWY4YjMyMDBlM2FkZTc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwY4O7MURvIiWbGpBdgRdc8FL6dj-gEZvGJMHZi1umk",
  },
};

async function displayHome() {
  displayFilms.innerHTML = "";
  const rand = Math.floor(Math.random() * 500) + 1;

  const promise = await fetch(
    "https://api.themoviedb.org/3/discover/movie?page=" + rand,
    options
  );
  const movies = await promise.json();

  let count1 = 0;

  for (const movie of movies.results) {
    if (count1 === 5) {
      break;
    }
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const divImg = document.createElement("img");
    div.classList.add("oneElement");

    title.innerHTML = movie.title;
    // displayFilms.appendChild(title);

    divImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    divImg.alt = movie.name;

    div.appendChild(title);
    div.appendChild(divImg);
    displayFilms.appendChild(div);

    count1++;
  }

  // -----------------Affichage des séries par 5------

  const promiseTvShow = await fetch(
    "https://api.themoviedb.org/3/discover/tv?page=" + rand,
    options
  );
  const tvShows = await promiseTvShow.json();
  let count = 0;

  for (const tvShow of tvShows.results) {
    if (count === 5) {
      break;
    }

    const title = document.createElement("h3");
    const divImg = document.createElement("img");
    const divTvShow = document.createElement("div");
    divTvShow.classList.add("oneElement");



    title.innerHTML = tvShow.name;
    divImg.src = `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`;
    divImg.alt = tvShow.name;
    divTvShow.appendChild(title);
    divTvShow.appendChild(divImg);
    displayTvShows.appendChild(divTvShow);

    count++;
  }
}

displayHome();
