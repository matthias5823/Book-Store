function addComments(indexBooks) {
    let entryCommment = "";


    for (let indexComments = 0; indexComments < books[indexBooks].comments.length; indexComments++) {
        console.log(books[indexBooks].comments[indexComments].name + ": " + books[indexBooks].comments[indexComments].comment);
        entryCommment +=
            `
        <tr>
                    <th>${books[indexBooks].comments[indexComments].name}</th>
                    <td>${books[indexBooks].comments[indexComments].comment}</td>
        </tr>
    `

    };
    return entryCommment;

}