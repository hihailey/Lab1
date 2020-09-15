var favoriteMovies = [];

function addFavoriteMovie(movieName){

    if(movieName.includes("The") != true){

        favoriteMovies.push(movieName);
}

}

function printFavoriteBooks(){
        console.log("Favorite Movies : "+favoriteMovies+"."+"The number of my favorite movies is " +favoriteMovies.length +".");

}

addFavoriteMovie("Spiderman");
addFavoriteMovie("The king");
addFavoriteMovie("Lion King");
printFavoriteBooks();

var i =0;
    while(i<favoriteMovies.length){

        console.log(favoriteMovies[i]);
        i++;

}