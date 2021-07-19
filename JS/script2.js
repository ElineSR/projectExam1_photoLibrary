//Getting a random image for the frontpage

const homepageImg = document.querySelector("#homepageImg");

const url = 'https://api.unsplash.com//photos/random?&client_id=Iex4QjSPzPAOYL-iWqYNsrBZ3ZORNnQbjaHfae4oEBA';

async function getRandomPhoto() {
  try{
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    
    homepageImg.innerHTML = '<img class="homeImage" src="' + results.urls.regular+ '" alt="' + results.alt_description +'"><a class="linkStyle" href="/photographers.html"<h2>Photographer:' +results.user.name+'</h2></a>';



  }
  catch(error){
    console.log(error);
  }
}

getRandomPhoto();