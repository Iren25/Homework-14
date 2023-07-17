const button = document.getElementById('button');

function showPicture() {
    const picture = document.createElement('img')
    picture.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17WZl3nwY9bUTYRKqYkKLz4JLoTWNi1LDmQ&usqp=CAU';
    document.body.appendChild(picture)

    timer = setTimeout(() => {
        document.body.removeChild(picture);
        clearTimeout(timer)
    }, 5000);
}

button.addEventListener('click', showPicture);
