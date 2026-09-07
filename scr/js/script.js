// geht durch die Genres Variable durch und schreibt die werte in Button Tags
function loadNavGenre() {
    const navLink = document.getElementById('genre');
    for (let indexGenres = 0; indexGenres < bookGenres.length; indexGenres++) {
        navLink.innerHTML +=
            `<button class="button-nav" onclick="showBooks('${bookGenres[indexGenres]}')">${bookGenres[indexGenres]}</button>`;
    }
}
// Erstellt nach dem was der User klickt die Bücherkarten
function showBooks(genre) {
    const dataBooCard = document.getElementById('section_book_card');
    dataBooCard.innerHTML = "";
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        if (genre == books[indexBooks].genre) {
            addBookCard(indexBooks)
        }else if (genre == "alle Genres") {
        addBookCard(indexBooks)
    }
    } 
}

function clickLike(indexBooks) {
    if (books[indexBooks].liked) {
        books[indexBooks].liked = false;
        books[indexBooks].likes = books[indexBooks].likes - 1;
        showBooks(books[indexBooks].genre);
        setLikedButton(indexBooks)
    } else {
        books[indexBooks].liked = true;
        books[indexBooks].likes = books[indexBooks].likes + 1;
        showBooks(books[indexBooks].genre);
        setLikedButton(indexBooks)
    };
}

function setLikedButton(indexBooks) {
    const heartRef = document.getElementById(`heart${indexBooks}`);
    if (books[indexBooks].liked) {
        heartRef.classList.add('heart-fill');
    } else {
        heartRef.classList.remove('heart-fill');
    };
}

function addInputComment(indexBooks) {
    const commmentInputRef = document.getElementById(`input_comment${indexBooks}`);
    const commentInput = commmentInputRef.value;

    books[indexBooks].comments.push({ "name": "TestUser", "comment": commentInput });
    renewComment(indexBooks);
    commentInput = "";
}


