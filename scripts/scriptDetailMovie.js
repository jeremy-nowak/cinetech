let displayDetail;

window.addEventListener("DOMContentLoaded", () => {
  displayDetail = document.querySelector("#displayDetail");
});

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJkYmQ1MmM2ZWNkNmJhNTZjY2Y4NTk2OTJkZDcwYSIsInN1YiI6IjY0NjFlNTQ0ZWY4YjMyMDBlM2FkZTc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwY4O7MURvIiWbGpBdgRdc8FL6dj-gEZvGJMHZi1umk",
  },
};

const idDetail = window.location.pathname.split("/").pop();

// -------------------------------Giving the idmovie to the fav button------------------------

// let addToFavBtn = document.querySelector('#addToFavBtn');

// addToFavBtn.setAttribute("data-id", idDetail);

// ----------------------------function creation start--------------------------------

async function addToFavorites(movieId) {
  fetch('cinetech/addToFavorite', {
    method: 'POST',
    body: 'movieId=' + movieId
  })
  .then(function(response) {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Une erreur s\'est produite. Veuillez réessayer.');
    }
  })
  .then(function(data) {
    if (data === 'success') {
      addToFavBtn.classList.add('added');
      addToFavBtn.innerText = 'Ajouté aux favoris';
    } else {
      throw new Error('Une erreur s\'est produite. Veuillez réessayer.');
    }
  })

}



async function displayComment(idDetail) {
  const promise = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      idDetail +
      "/reviews?language=fr-FR&page=1', options"
  );
}

async function displayOne(idDetail) {
  const promise = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      idDetail +
      "?language=fr-FR&append_to_response=credits",
    options
  );
  const detail = await promise.json();

  // Boucle pour parcourir le tableau production_companies
  // et transformation en string pour l'afficher

  let prod = detail.production_companies;
  let prodArray = [];
  for (const production of prod) {
    prodArray.push(production.name);
  }

  let prodString = prodArray.toString();

  // Boucle pour parcourir le tableau genres
  // et transformation en string pour l'afficher

  let genres = detail.genres;

  let genreArray = [];
  for (const genre of genres) {
    genreArray.push(genre.name);
  }

  let genreString = genreArray.toString();

  // Recuperation du nom du producteur
  let directorArray = [];
  let directorString = "";

  let countries = "Pays de production: ";
  for (const country of detail.production_countries) {
    countries += country.name + ", ";
  }
console.log(detail)
  for (const producteur of detail.credits.crew) {
    if (producteur.job === "Director") {
      directorArray.push(producteur.name);
    }
    directorString = directorArray.toString();
  }

  let actorArray = [];
  let actorString = "";

  for (const actor of detail.credits.cast) {
    if (actor.known_for_department === "Acting") {
      actorArray.push(actor.name);
    }
    actorString = actorArray.toString();
  }

  const baseUrl = "https://image.tmdb.org/t/p/w200";
  let actorContent = "";
  let count2 = 0;

  for (const actor of detail.credits.cast) {
    if (count2 === 4) {
      break;
    }
    if (actor.profile_path) {
      const imageUrl = `${baseUrl}${actor.profile_path}`;
      actorContent += `
      <div class="actorItem">
        <img src="${imageUrl}" alt="${actor.name}">
        <p>${actor.name}</p>
      </div>
    `;
    }
    count2++;
  }



  // ---------------Start addEventListener---------

//   addToFavBtn.addEventListener("click", function(e){
//   e.preventDefault()
//   movieId = idDetail;
//   addToFavorites(idDetail)
//   console.log(movieId)
// })


  // ---------------End addEventListener-----------
  
  displayDetail.innerHTML += `
  <div class="content" id="content">
  <div class="oneElement">
  <div class="infoMovies">
  <h2 class="overview">Résumé: ${detail.overview}</h2>
  <p class="release"><h4>Date de sortie: ${detail.release_date}</p></h4>
  <p class="score"><h4>Note sur 10: ${detail.vote_average}</p></h4>
  <p class="voteCount"><h4>nombre de votes: ${detail.vote_count}</p></h4>
  <p class="acteurs"><h4>Productions: ${prodString}</p></h4>
  <p class="actor"><h4>Acteurs: ${actorString}</p></h4>
  <p class="genre"><h4>Genre: ${genreString}</p></h4>
  <p class="director"><h4>Réalisateur: ${directorString}</p</h4>
  <p class="countries"><h4> ${countries}</p </h4>
  <div class="imgActor">
  ${actorContent}
</div>
  </div>
  <div class="titreAndImg">
  <img src="https://image.tmdb.org/t/p/w500${detail.poster_path}" alt="">
  </div>
  </div>
</div>
`;


}
// ----------------------------Function creation end--------------------------------

displayOne(idDetail);

// CA MARCHE PAS
