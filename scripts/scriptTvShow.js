let tvShowByCateg = document.querySelector('#tvShowByCateg');
let displayCategories = document.querySelector("#displayCategories");


const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJkYmQ1MmM2ZWNkNmJhNTZjY2Y4NTk2OTJkZDcwYSIsInN1YiI6IjY0NjFlNTQ0ZWY4YjMyMDBlM2FkZTc4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwY4O7MURvIiWbGpBdgRdc8FL6dj-gEZvGJMHZi1umk",
    },
  };

  async function categoriesDisplay() {
    displayCategories.innerHTML = "";
    const promise = await fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=d4bdbd52c6ecd6ba56ccf859692dd70a&language=en"
    );
    const categ = await promise.json();
  
    for (const category of categ.genres) {
      const div = document.createElement("div");
      div.classList.add("displayTvShow");
      div.setAttribute("data-id", category.id);
  
  
      const checkbox = document.createElement("INPUT");
      checkbox.setAttribute("type", "checkbox");
      const label = document.createElement("label");
      label.innerHTML = category.name;
      const miniDiv = document.createElement("div");
      div.classList.add("miniDiv");
  
      div.appendChild(label);
  
      checkbox.classList.add("genre", "displayTvShow");
      checkbox.setAttribute("data-id", category.id);
  
      checkbox.innerHTML = category.name;
      miniDiv.appendChild(checkbox);
  
      div.appendChild(miniDiv);
      displayCategories.appendChild(div);
    }
  }


  async function TvShowByCategorie(categories = null) {
    tvShowByCateg.innerHTML = "";
   
    const promise = await fetch(
      "https://api.themoviedb.org/3/discover/tv?with_genres=" + categories,
      options
    );
    const tvShow = await promise.json();
  
    for (const tv of tvShow.results) {
        console.log(tv.name)
      const div = document.createElement("div");
      const title = document.createElement("h3");
      const divImg = document.createElement("img");
      div.classList.add("oneElement");
  
      title.innerHTML = tv.name;
  
      divImg.src = `https://image.tmdb.org/t/p/w500${tv.poster_path}`;
      divImg.alt = tv.name;
  
      div.appendChild(title);
      div.appendChild(divImg);
      tvShowByCateg.appendChild(div);
    }
  }

//   ---------------------------addEventListener start---------------


let categories = [];

displayCategories.addEventListener("click", function (e) {
  if (e.target.classList.contains("displayTvShow")) {
    const idCategory = e.target.getAttribute("data-id");

    if (categories.includes(idCategory)) {

      const index = categories.indexOf(idCategory);
      categories.splice(index, 1);
    } else {
      
      categories.push(idCategory);
    }
    console.log(categories);

    TvShowByCategorie(categories);
    
  }
});


  
  categoriesDisplay()
  TvShowByCategorie()


