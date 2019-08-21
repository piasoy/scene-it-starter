document.addEventListener('DOMContentLoaded', function() {                

    function renderMovies(movieArray){
        // console.log('movieArray: ',movieArray);
        let movieHTML = movieArray.map(function(currentMovie){
            // console.log('movieArray: ',movieArray);
           return `<div class="card">
                        <img class="card-img-top" src="${currentMovie.Poster}"/>
                        <div class="card-body">
                            <h5 class="card-title">${currentMovie.Title}</h5>
                            <p class="card-text">${currentMovie.Year}</p>
                            <button onclick="saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary">Add</button>
                        </div>
                    </div>`
        })
        // console.log(movieHTML.join(''))
        return movieHTML.join('');
    }

    // container.innerHTML = renderMovies(movieData)
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        container.innerHTML = renderMovies(movieData)
    })
});

function saveToWatchlist(imdbID){
    console.log(imdbID)
    var movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;

    });

    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);

    if (watchlist === null){watchlist = [];}

    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);




}






// element.addEventListener('submit', function(e){

//     function renderMovies(movieArray){
//         console.log('movieArray: ',movieArray);
//         let movieHTML = movieArray.map(function(currentMovie){
//             console.log('movieArray: ',movieArray);
//            return `<div class="card">
//                         <img class="card-img-top" src="${currentMovie.Poster}"/>
//                         <div class="card-body">
//                             <h5 class="card-title">${currentMovie.Title}</h5>
//                             <p class="card-text">${currentMovie.Year}</p>
//                             <a href="#" class="btn btn-primary">Add</a>
//                         </div>
//                     </div>`
//         })
//         console.log(movieHTML.join(''))
//         return movieHTML.join('');
//     }

    
//     container.innerHTML = renderMovies(movieData)


// })