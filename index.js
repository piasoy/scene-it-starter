let searchResults;
document.addEventListener('DOMContentLoaded', function() {            //fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.    

    function renderMovies(movieArray){                                  //movieArray = the search results
        let movieHTML = movieArray.map(function(currentMovie){
            if (currentMovie.Poster === "N/A"){currentMovie.Poster = "no_image.png" } //if image doesn't exist, use this png
           return `<div class="card">
                        <img class="card-img-top" src="${currentMovie.Poster}"/>
                        <div class="card-body">
                            <h5 class="card-title">${currentMovie.Title}</h5>
                            <p class="card-text">${currentMovie.Year}</p>
                            <button onclick="this.disabled=true;saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary">Add</button>
                        </div>
                    </div>`
        })
        return movieHTML.join('');
    }

    document.getElementById('search-form').addEventListener('submit', function(e){     //listen for when form is submitted
        e.preventDefault();                                                            //what is it preventing?
        var searchString = document.getElementById('searchInput').value                //get string from search field
        var urlEncodedSearchString = encodeURIComponent(searchString);                  //encodoes some string characters
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString)
        .then(function(response){                                                       //response from request
            searchResults = response.data.Search;                                             //response.data is what you requested
            container.innerHTML = renderMovies(searchResults)                    //call renderMovies, pass the response.data, place it inside container
            return searchResults;

        })
    })
});


function saveToWatchlist(imdbID,){                                         
    var movie = searchResults.find(function(currentMovie){                  //method returns the movie in the searchArray results that matches the imdbID 
        return currentMovie.imdbID == imdbID;
});

    var watchlistJSON = localStorage.getItem('watchlist');                  //the watchlist as a string
    var watchlist = JSON.parse(watchlistJSON);                              //turn watchlist into JSON

    if (watchlist === null){watchlist = [];}

    watchlist.push(movie);                                                  
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);





}





