function loadNavGenre() {
    const navLink = document.getElementById('genre');
    for (let indexGenres = 0; indexGenres < bookGenres.length; indexGenres++) {
        
        navLink.innerHTML += 
        `<button class="button-nav" onclick="showBooks('${bookGenres[indexGenres]}')">${bookGenres[indexGenres]}</button>`
    }
}

function showBooks(genre) {
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    
    console.log(books[indexBooks].genre);
    
  }
}