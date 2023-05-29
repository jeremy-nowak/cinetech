let displayDetail = document.querySelector("#displayDetail");

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJkYmQ1MmM2ZWNkNmJhNTZjY2Y4NTk2OTJkZDcwYSIsInN1YiI6IjY0NjFlNTQ0ZWY4YjMyMDBlM2FkZTc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwY4O7MURvIiWbGpBdgRdc8FL6dj-gEZvGJMHZi1umk",
  },
};

// --------------Taking id in the url--------------------
const idDetail = window.location.pathname.split("/").pop();


// ----------------------------function creation start--------------------------------

async function displayOne() {

  const promise = await fetch("https://api.themoviedb.org/3/tv/" + idDetail + "?language=fr-FR&append_to_response=credits",options);
  const detail = await promise.json();



  // console.log(detail);

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

// Here i search for the name of the directors
let directorArray = [];
let directorString = "";

for (const producteur of detail.credits.crew) {
  
  if(producteur.job === "Director"){
     directorArray.push(producteur.name)
  }
   directorString = directorArray.toString()
}

let actorArray = [];
let actorString = ""

for (const actor of detail.credits.cast) {
  if(actor.known_for_department === "Acting"){
     actorArray.push(actor.name)
  }
  actorString = actorArray.toString()
}


let countries = "Pays de production: "
  for (const country of detail.production_countries) {
    countries += country.name + ", "
  }
  
  const baseUrl = 'https://image.tmdb.org/t/p/w200';
  let actorContent = "";
  
  for (const actor of detail.credits.cast) {
    if (actor.profile_path) {
      const imageUrl = `${baseUrl}${actor.profile_path}`;
      actorContent += `
        <div class="actorItem">
          <img src="${imageUrl}" alt="${actor.name}">
          <p>${actor.name}</p>
        </div>
      `;
    }
  }
  
  displayDetail.innerHTML += `
    <div class="content" id="content">
      <div class="oneElementDetail">
        <h2 class="overview">Résumé: ${detail.overview}</h2>
        <p class="release">Date de sortie: ${detail.first_air_date}</p>
        <p class="score">Note sur 10: ${detail.vote_average}</p>
        <p class="voteCount">nombre de votes: ${detail.vote_count}</p>
        <p class="acteurs">Productions: ${prodString}</p>
        <p class="actor">Acteurs: ${actorString}</p>
        <p class="genre">Genre: ${genreString}</p>
        <p class="director">Réalisateur: ${directorString}</p>
        <p class="countries">${countries}</p>
      </div>
      <div class="titreAndImg">
        <img src="https://image.tmdb.org/t/p/w500${detail.poster_path}" alt="">
      </div>
    </div>
    <div class="imgActor">
      ${actorContent}
    </div>
  `;
  

}
// ----------------------------function creation end--------------------------------


displayOne()