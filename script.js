const ul = document.getElementById('movies');
const url = 'https://www.omdbapi.com/?apikey=d14b5a69&s=batman';

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

fetch(url)
 .then( function(response){ return response.json() } )
 .then( function(data){
      console.log(JSON.stringify(data))
      let movies = data.Search;
       return movies.map(function(movie){
          let li = createNode('li'),
              img = createNode('img'),
              span = createNode('span');
           img.src = movie.Poster;
           span.innerHTML = `${movie.Title} ${movie.Year}`;
           append(li, span);
           append(li, img\\);
           append(ul, li);       
      })
 } )
 .catch((error)=>{ console.log(error)});