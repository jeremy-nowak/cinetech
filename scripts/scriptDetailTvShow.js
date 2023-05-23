let displayDetail;

window.addEventListener('DOMContentLoaded', () => {
  displayDetail = document.querySelector("#displayDetail");
});

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJkYmQ1MmM2ZWNkNmJhNTZjY2Y4NTk2OTJkZDcwYSIsInN1YiI6IjY0NjFlNTQ0ZWY4YjMyMDBlM2FkZTc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwY4O7MURvIiWbGpBdgRdc8FL6dj-gEZvGJMHZi1umk",
  },
};

idDetail = window.location.search;
console.log(idDetail)
async function displayOne(idDetail) {
  // idDetail = 502356;
  const promise = await fetch("https://api.themoviedb.org/3/tv/" + idDetail + "?append_to_response=credits&language=fr-FR",options);
  const detail = await promise.json();

  console.log(detail);

  // const div = document.createElement("div");
  // const title = document.createElement("h3");
  // const divImg = document.createElement("img");

  // const overview = document.createElement("h2")
  // const ahref = document.createElement("a")
  // const link = document.createElement("p")
  // const release = document.createElement("p")
  // const score = document.createElement("p")
  // const voteCount = document.createElement("p")
  // const budget = document.createElement("p")
  // const revenue = document.createElement("p")

  // div.classList.add("oneElement");

  // title.innerHTML = detail.title;

  // divImg.src = `https://image.tmdb.org/t/p/w500${detail.poster_path}`;
  // divImg.alt = detail.name;
  // overview.innerHTML = detail.overview
  // release.innerHTML = detail.release_date
  // score.innerHTML = detail.vote_average
  // voteCount.innerHTML = detail.vote_count
  // budget.innerHTML = detail.budget
  // revenue.innerHTML = detail.revenue
  // ahref.innerHTML = detail.homepage

  // div.appendChild(title);
  // div.appendChild(divImg);
  // div.appendChild(overview);
  // div.appendChild(ahref)
  // div.appendChild(ahref)
  // div.appendChild(link);
  // div.appendChild(release);
  // div.appendChild(score);
  // div.appendChild(voteCount);
  // div.appendChild(budget);
  // div.appendChild(revenue);
  // (réalisateur, types, pays d’origine, résumé, acteurs,


  // Boucle pour parcourir le tableau production_companies 
  // et transformation en string pour l'afficher

  let prod = detail.production_companies
  let prodArray = []
  for (const production of prod) {  
    prodArray.push(production.name)
  }

  let prodString = prodArray.toString()

    // Boucle pour parcourir le tableau genres 
  // et transformation en string pour l'afficher

  let genres = detail.genres

  let genreArray = []
  for (const genre  of genres) {  
    genreArray.push(genre.name)
  }
  let genreString = genreArray.toString()

// Recuperation du nom du producteur
  let director = detail.credits.crew[0].name

let countries = "Pays de production: "
  for (const country of detail.production_countries) {
    countries += country.name + ", "
    
  }
  

  displayDetail.innerHTML += 
  `<div class="oneElement">
  <div class="titreAndImg">
  <h1 class="title">Titre: ${detail.title}</h1>
  <img src="https://image.tmdb.org/t/p/w500${detail.poster_path}" alt="">
  </div>
  <h2 class="overview">Résumé: ${detail.overview}</h2>
  <div class="content" id="content">
  <p class="release">Date de sortie: ${detail.release_date}</p>
  <p class="score">Note sur 10: ${detail.vote_average}</p>
  <p class="voteCount">nombre de votes: ${detail.vote_count}</p>
  <p class="acteurs">Productions: ${prodString}</p>
  <p class="genre">Genre: ${genreString}</p>
  <p class="director">Réalisateur: ${director}</p
  <p class="countries">${countries}</p
  </div>
</div>`
  
}


displayOne()