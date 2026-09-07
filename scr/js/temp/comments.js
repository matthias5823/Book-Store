function addComments(indexBooks) {
    let entryCommment = "";
    for (let indexComments = 0; indexComments < books[indexBooks].comments.length; indexComments++) {
        console.log(books[indexBooks].comments[indexComments].name + ": " + books[indexBooks].comments[indexComments].comment);
        entryCommment +=
            `
        <article class="entry-comment">
                    <p class="commentator">${books[indexBooks].comments[indexComments].name}</p>
                    <p class= "commentator-comment">${books[indexBooks].comments[indexComments].comment}</p>
        </article>
    `
    };
    return entryCommment;
};

function renewComment(indexBooks) {
    const sectionCommentRef = document.getElementById(`comment${indexBooks}`);
    sectionCommentRef.innerHTML = "";

    for (let indexComments = 0; indexComments < books[indexBooks].comments.length; indexComments++) {

        sectionCommentRef.innerHTML +=
            `<article class="entry-comment">
                    <p class="commentator">${books[indexBooks].comments[indexComments].name}</p>
                    <p class= "commentator-comment">${books[indexBooks].comments[indexComments].comment}</p>
            </article>`
    }

}