let displayFilms = document.querySelector("#displayFilms");
let displayTvShows = document.querySelector("#displayTvShows");
let logRegDisplay = document.querySelector("#logRegDisplay");

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJkYmQ1MmM2ZWNkNmJhNTZjY2Y4NTk2OTJkZDcwYSIsInN1YiI6IjY0NjFlNTQ0ZWY4YjMyMDBlM2FkZTc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwY4O7MURvIiWbGpBdgRdc8FL6dj-gEZvGJMHZi1umk",
  },
};

// ----------------------------Creation des fonctions--------------------------------

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
    if (count1 === 10) {
      break;
    }
    const div = document.createElement("div");
    // const title = document.createElement("h3");
    const divImg = document.createElement("img");
    div.classList.add("oneElement");
    div.classList.add("detailMovie");
    divImg.classList.add("detailMovie");
    div.setAttribute("data-idMoovie", movie.id);
    divImg.setAttribute("data-idMoovie", movie.id);

    // title.innerHTML = movie.title;
    // displayFilms.appendChild(title);

    divImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    divImg.alt = movie.name;

    // div.appendChild(title);
    div.appendChild(divImg);
    displayFilms.appendChild(div);

    count1++;
  }

  // -----------------Affichage des séries par 10------

  const promiseTvShow = await fetch(
    "https://api.themoviedb.org/3/discover/tv?page=" + rand,
    options
  );
  const tvShows = await promiseTvShow.json();
  let count = 0;

  for (const tvShow of tvShows.results) {
    if (count === 10) {
      break;
    }

    const divImg = document.createElement("img");
    const divTvShow = document.createElement("div");
    divTvShow.classList.add("oneElement");

    divTvShow.classList.add("oneElement");
    divImg.classList.add("detailTvShow");
    divTvShow.setAttribute("data-idTvShow", tvShow.id);
    divImg.setAttribute("data-idTvShow", tvShow.id);

    divImg.src = `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`;
    divImg.alt = tvShow.name;
    divTvShow.appendChild(divImg);
    displayTvShows.appendChild(divTvShow);

    count++;
  }
}

// async function displayLogin() {
  
//   let div = document.querySelector(".titre");

//   div.innerHTML = "";
//   let promise = await fetch("/cinetech/connexion");
//   let logForm = await promise.text();
//   div.innerHTML = logForm;
// }



  // console.log(formConnexion);

  // logForm.classList.add("fadeIn"); // Ajouter la classe fadeIn
  // registerForm.classList.remove("slideIn"); // Supprimer la classe slideIn


async function displayRegister() {
  let div = document.querySelector(".titre");
  div.innerHTML = "";
  let promise = await fetch("src/View/register.php");
  let regForm = await promise.text();
  console.log(regForm);

  div.innerHTML = regForm;

  // logForm.style.display = "none";
  // registerForm.style.display = "block";
  // logForm.classList.add("slideIn"); // Ajouter la classe fadeIn
  // registerForm.classList.remove("fadeIn"); // Supprimer la classe slideIn
}

// -------function creation end-------------------

// ----------- addEventListener start------------
displayFilms.addEventListener("click", function (e) {
  if (e.target.classList.contains("detailMovie")) {
    const idMovie = e.target.getAttribute("data-idMoovie");
    window.location.href = "/cinetech/movie/" + idMovie;
  }
});

displayTvShows.addEventListener("click", function (e) {
  if (e.target.classList.contains("detailTvShow")) {
    const idTvShow = e.target.getAttribute("data-idTvShow");
    window.location.href = "/cinetech/tvShow/" + idTvShow;
  }
});

logRegDisplay.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log('ici');

  if (e.target.classList.contains("displayFormLogin")) {
    window.location.replace("/cinetech/connexion")
  }
});

logRegDisplay.addEventListener("click", async function (e) {
  e.preventDefault();

  if (e.target.classList.contains("displayFormRegister")) {
    displayRegister();
  }
  // ---------addEventListener end--------
});
displayHome();



