document.addEventListener('DOMContentLoaded', function() {                
    let watchlistStr = localStorage.getItem('watchlist');
    let watchlistArr = JSON.parse(watchlistStr);
    let container = document.querySelector('.watchlistContainer')
    console.log(watchlistArr)

    let watchlistHTML = watchlistArr.map(function(watchlistItem){
        return `<div class="card">
        <img class="card-img-top" src="${watchlistItem.Poster}"/>
        <div class="card-body">
            <h5 class="card-title">${watchlistItem.Title}</h5>
            <p class="card-text">${watchlistItem.Year}</p>
         
        </div>
    </div>`
    });
    container.innerHTML = watchlistHTML.join('')

   });