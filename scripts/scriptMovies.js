let moviesByCateg = document.querySelector("#moviesByCateg");
let displayCategories = document.querySelector("#displayCategories");

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJkYmQ1MmM2ZWNkNmJhNTZjY2Y4NTk2OTJkZDcwYSIsInN1YiI6IjY0NjFlNTQ0ZWY4YjMyMDBlM2FkZTc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwY4O7MURvIiWbGpBdgRdc8FL6dj-gEZvGJMHZi1umk",
  },
};

// ---------Function creation start----------------------
async function categoriesDisplay() {
  displayCategories.innerHTML = "";
  const promise = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=d4bdbd52c6ecd6ba56ccf859692dd70a&language=en"
  );
  const categ = await promise.json();

// --------------------Loop to get all the categ id-------------
  for (const category of categ.genres) {
    const div = document.createElement("div");
    div.classList.add("displayFilms");
    div.setAttribute("data-id", category.id);
    // -------------------Checkbox creation---------------------
    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    // ----------------Label creation with categories name-------
    const label = document.createElement("label");
    label.innerHTML = category.name;
    const miniDiv = document.createElement("div");
    div.classList.add("miniDiv");
    div.appendChild(label);
    // ----------Setting up id on the checkbox------------
    checkbox.classList.add("genre", "displayFilms");
    checkbox.setAttribute("data-id", category.id);

    checkbox.innerHTML = category.name;
    miniDiv.appendChild(checkbox);

    div.appendChild(miniDiv);
    displayCategories.appendChild(div);
  }
}

async function filmByCategorie(categories = null) {
  moviesByCateg.innerHTML = "";
 
  const promise = await fetch(
    "https://api.themoviedb.org/3/discover/movie?with_genres=" + categories,
    options
  );
  const filmByCat = await promise.json();

  for (const films of filmByCat.results) {
    const div = document.createElement("div");
    
    const divImg = document.createElement("img");
    div.classList.add("oneElement");
    div.setAttribute("data-idMoovie", films.id)
    divImg.setAttribute("data-idMoovie", films.id)



    //-------- Setting up class to be able to target it in my event
    div.classList.add("detailMovie")
    divImg.classList.add("detailMovie")
  // -----------------
    console.log(div)

    divImg.src = `https://image.tmdb.org/t/p/w500${films.poster_path}`;
    divImg.alt = films.name;

    div.appendChild(divImg);
    moviesByCateg.appendChild(div);
  }

}
// -------------Function creation END--------------------



// ------------addEventListener Start-------------------
let categories = [];

displayCategories.addEventListener("click", function (e) {
  if (e.target.classList.contains("displayFilms")) {
    const idCategory = e.target.getAttribute("data-id");
    if (categories.includes(idCategory)) {
      const index = categories.indexOf(idCategory);
      categories.splice(index, 1);
    } else {
      categories.push(idCategory);
    }
    filmByCategorie(categories);
  }
});


moviesByCateg.addEventListener("click", function(e){
  if(e.target.classList.contains("detailMovie")){
    const idMovie = e.target.getAttribute("data-idMoovie")
    window.location.href = "/cinetech/movie/" + idMovie;
  }
})
//------------addEventListener end----------------------

categoriesDisplay();
filmByCategorie();