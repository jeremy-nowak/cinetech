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

const idDetail = window.location.pathname.split("/").pop();
console.log(idDetail)


// ----------------------------function creation start--------------------------------

async function displayComment(idDetail){
const promise = await fetch("https://api.themoviedb.org/3/movie/"+ idDetail+"/reviews?language=fr-FR&page=1', options")


}

async function displayOne(idDetail) {
  const promise = await fetch("https://api.themoviedb.org/3/movie/" + idDetail + "?language=fr-FR&append_to_response=credits",options);
  const detail = await promise.json();

 
  // Boucle pour parcourir le tableau production_companies 
  // et transformation en string pour l'afficher

  let prod = detail.production_companies;
  let prodArray = [];
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
let directorArray = [];
let directorString = "";

let countries = "Pays de production: "
  for (const country of detail.production_countries) {
    countries += country.name + ", "
  }


  for (const producteur of detail.credits.crew) {

    if(producteur.job === "Director"){
      console.log(producteur.name)
       directorArray.push(producteur.name)
    }
     directorString = directorArray.toString()
  }


let actorArray = [];
let actorString = ""

for (const actor of detail.credits.cast) {
  console.log(actor)
  if(actor.known_for_department === "Acting"){
    console.log(actor.name)
     actorArray.push(actor.name)
  }
  actorString = actorArray.toString()
  console.log(actorString)
}

  

  displayDetail.innerHTML += 
  `<div class="oneElement">
  <div class="titreAndImg">
  <h1 class="title">${detail.title}</h1>
  <img src="https://image.tmdb.org/t/p/w500${detail.poster_path}" alt="">
  </div>
  <h2 class="overview">Résumé: ${detail.overview}</h2>
  <div class="content" id="content">
  <p class="release"><h4>Date de sortie: ${detail.release_date}</p></h4>
  <p class="score"><h4>Note sur 10:${detail.vote_average}</p></h4>
  <p class="voteCount"><h4>nombre de votes: ${detail.vote_count}</p></h4>
  <p class="acteurs"><h4>Productions: ${prodString}</p></h4>
  <p class="actor"><h4>Acteurs: ${actorString}</p></h4>
  <p class="genre"><h4>Genre: ${genreString}</p></h4>
  <p class="director"><h4>Réalisateur: ${directorString}</p</h4>
  <p class="countries"><h4>${countries}</p</h4>
  </div>
</div>`


}
// ----------------------------Function creation end--------------------------------


displayOne(idDetail)






// CA MARCHE PAS