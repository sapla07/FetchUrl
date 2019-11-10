const div = document.getElementById('movies');
div.setAttribute("class", "row");


const url = 'https://www.omdbapi.com/?apikey=d14b5a69&s=batman';

function createNode(element){
    return document.createElement(element);
}

function sortByTitle(movies) {
  movies.sort(function(a, b){
	var s1 = a.Title.toLowerCase();
	var s2 = b.Title.toLowerCase();
	if (s1 < s2) {return -1;}
	if (s1 > s2) {return 1;}
	return 0;
	});
	
	return movies;
}

function sortByYear(movies) {
    movies.sort(function(a, b){
	var s1 = a.Year.toLowerCase();
	var s2 = b.Year.toLowerCase();
	if (s1 < s2) {return -1;}
	if (s1 > s2) {return 1;}
	return 0;
	});
	
	return movies;
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
          let div1 = createNode('div'),
              img = createNode('img'),
               p = createNode('p');
             // h4 = createNode('h4');
                     
           img.src = movie.Poster;           
           p.innerHTML = `${movie.Title}  ${movie.Year}`;
           
          
           div1.setAttribute("class", "column")
           img.setAttribute("style", "width: 300px; height: 300px" );
        //    append(div1, h3);
           append(div1, img);
           append(div1, p)
           append(div, div1);       
      })
 } )
 .catch((error)=>{ console.log(error)});




// completely chaneged searchMovies Function

 function searchMovies(){
 
		var input = document.getElementById('search');
		var filter = input.value.toUpperCase();
		fetch(url)
		.then( function(response){ return response.json() } )
			.then( function(data){
				//console.log(JSON.stringify(data))
				let movies = data.Search;
				console.log(movies);
				div.innerHTML = ""; 
				
				return movies.map(function(movie){	
					var title = movie.Title
					if(title.toUpperCase().indexOf(filter) > -1){
						let div1 = createNode('div'),
						img = createNode('img'),
						p = createNode('p');

						img.src = movie.Poster;           
						p.innerHTML = `${movie.Title}  ${movie.Year}`;


						div1.setAttribute("class", "column")
						img.setAttribute("style", "width: 300px; height: 300px" );
					//    append(div1, h3);
						append(div1, img);
						append(div1, p)
						append(div, div1);       
					}
					
				})	
			})
		.catch((error)=>{ console.log(error)});
	
 		
 }
 
 
 
 
 // Added New Function for Filtering
 
 
 function filter(choice) {
  //if (choice=="default") return; // please select - do nothing
	console.log("selected field is", choice)
	
		fetch(url)
		.then( function(response){ return response.json() } )
			.then( function(data){
				//console.log(JSON.stringify(data))
				let movies = data.Search;
				console.log(movies);
				div.innerHTML = ""; 
				
				if (choice.toLowerCase() == "title" ){
						movies = sortByTitle(movies);
				} else if (choice.toLowerCase() == "year" ){ 
						movies = sortByYear(movies);
				}
				console.log("sorted",movies)
				return movies.map(function(movie){
					let div1 = createNode('div'),
					img = createNode('img'),
					p = createNode('p');
					// h4 = createNode('h4');

					img.src = movie.Poster;           
					p.innerHTML = `${movie.Title}  ${movie.Year}`;


					div1.setAttribute("class", "column")
					img.setAttribute("style", "width: 300px; height: 300px" );
					//    append(div1, h3);
					append(div1, img);
					append(div1, p)
					append(div, div1);       
				})	
			})
		.catch((error)=>{ console.log(error)});
	

}