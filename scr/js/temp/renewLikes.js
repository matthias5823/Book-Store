function renewLikes(indexBooks) {
const likeRef = document.getElementById(`like${indexBooks}`);
likeRef.innerHTML = `${books[indexBooks].likes}`;    
}