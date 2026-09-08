function getUsernameFromLocalStorage() {
    let username = localStorage.getItem('username');
    if (username != null) {
        window.location.href = 'store.html';
    };
}

function continueWithoutUser() {
    window.location.href = 'store.html';
}

function addedUsername() {
    const usernameInputRef = document.getElementById('input_username');
    const usernameInput = usernameInputRef.value;

    if (usernameInput.length == 0) {
        setNotifyMassage(usernameInput.length)
    } else {
        localStorage.setItem('username', usernameInput);
        window.location.href = 'store.html'
    }
}

function setNotifyMassage(sign) {
    const notifyMassageRef = document.getElementById('notify_unsernamen');

    if (sign == 0) {
        notifyMassageRef.innerHTML = "Bitte gib noch deinen Usernamen an";
    }
}

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
        } else if (genre == "alle Genres") {
            addBookCard(indexBooks)
        }
    };
    setLikedButton();
}

function clickLike(indexBooks) {
    if (books[indexBooks].liked) {
        books[indexBooks].liked = false;
        books[indexBooks].likes = books[indexBooks].likes - 1;
        showBooks(books[indexBooks].genre);
        setLikedButton()
    } else {
        books[indexBooks].liked = true;
        books[indexBooks].likes = books[indexBooks].likes + 1;
        showBooks(books[indexBooks].genre);
        setLikedButton()
    };
}

function setLikedButton(){
    
    for (let indexLiked = 0; indexLiked < books.length; indexLiked++) {
        let likedButtonRef = document.getElementById(`heart${indexLiked}`);
        if (books[indexLiked].liked) {
            likedButtonRef.classList.add('heart-fill');
        }else{
            likedButtonRef.classList.remove('heart-fill');
        };
    };
}

function addInputComment(indexBooks) {
    const commmentInputRef = document.getElementById(`input_comment${indexBooks}`);
    const commentInput = commmentInputRef.value;
    username = localStorage.getItem('username');
    if (username != null && commentInput.length > 0) {
        books[indexBooks].comments.push({ "name": username, "comment": commentInput });
        renewComment(indexBooks);
    } else if (commentInput.length > 0) {
        books[indexBooks].comments.push({ "name": "Anonym", "comment": commentInput });
        renewComment(indexBooks);
    };
    resetCommentInput(indexBooks)
}

function resetCommentInput(indexBooks) {
    const commmentInputRef = document.getElementById(`input_comment${indexBooks}`);    
    commmentInputRef.value = "";
}


