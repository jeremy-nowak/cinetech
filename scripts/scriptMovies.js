let displayMovies = document.querySelector('#displayMovies');
let button = document.querySelector('#button')
const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJkYmQ1MmM2ZWNkNmJhNTZjY2Y4NTk2OTJkZDcwYSIsInN1YiI6IjY0NjFlNTQ0ZWY4YjMyMDBlM2FkZTc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwY4O7MURvIiWbGpBdgRdc8FL6dj-gEZvGJMHZi1umk",
    },
  };


async function theMovies(){
    displayMovies.innerHTML = "";
    const rand = Math.floor(Math.random() * 500 )+1;

    const promise = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&page=" + rand, options);
    const movies = await promise.json();

    const div = document.createElement("div");
    const title = document.createElement("h3");
    const divImg = document.createElement("img");

    console.log(movies.results);

    
}

theMovies();




