
// const accessKey = "Iex4QjSPzPAOYL-iWqYNsrBZ3ZORNnQbjaHfae4oEBA"

function redirect(){
  window.location.href = "/searchResults.html";
}
// function photoSearch(){
// let str = document.getElementById("searchSubmit").value;
//   if str === false
//   else
//   console.log(str);
// }


// const searchSubmit = document.querySelector("#searchSubmit");
// console.log

// const api = "https://api.unsplash.com/search/photos?query=";
// const apiKey = "client_id=Iex4QjSPzPAOYL-iWqYNsrBZ3ZORNnQbjaHfae4oEBA";


// const url = api + searchSubmit + apiKey;

const url = 'https://api.unsplash.com/search/photos?query=minimal&client_id=Iex4QjSPzPAOYL-iWqYNsrBZ3ZORNnQbjaHfae4oEBA';

async function getPhotos(){
  const response = await fetch(url);
  const results = await response.json();
  const photoResults = results.results;

  document.querySelector("#searchpage").innerHTML += "<h2>Number of search results :" 3 "</h2>";

  for(let i = 0; i < photoResults.length; i++){
    document.querySelector('#searchPage').innerHTML += '<img class="imgSearchStyle" src="' + photoResults[i].urls.thumb +'" alt="' + photoResults[i].alt_description+'"><a class="linkStyle" href = "'+ photoResults[i].user.name +'" ></a>';
      


    console.log(photoResults[i].urls.thumb);
    
  }




}

getPhotos();












// fetch('https://api.unsplash.com/search/photos?query=minimal&client_id=Iex4QjSPzPAOYL-iWqYNsrBZ3ZORNnQbjaHfae4oEBA')
//   .then(response => response.json())
//   .then(data => {
//     (data);
//   })
//   .catch(err => console.log(err))

//   function fetchPhotos(response){
//     let photos = response.results;
//     for (let i = 0; index < photos.length; i++) {
//       console.log(response.results[i]);
      
//     }
//   }
