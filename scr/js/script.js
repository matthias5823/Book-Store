// geht durch die Genres Variable durch und schreibt die werte in Button Tags
function loadNavGenre() {
    const navLink = document.getElementById('genre');
    for (let indexGenres = 0; indexGenres < bookGenres.length; indexGenres++) {

        navLink.innerHTML +=
            `<button class="button-nav" onclick="showBooks('${bookGenres[indexGenres]}')">${bookGenres[indexGenres]}</button>`;
    }
}

function showBooks(genre) {
    const dataBooCard = document.getElementById('section_book_card');
    dataBooCard.innerHTML = "";

    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        if (genre == books[indexBooks].genre) {
            console.log(books[indexBooks].name);
            addBookCard(indexBooks)
        }

    }
}