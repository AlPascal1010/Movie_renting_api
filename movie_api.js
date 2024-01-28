class Movie {
    constructor(title, availableCopies) {
        this.title = title;
        this.availableCopies = availableCopies;
    }
}

class MovieStore {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    rentMovie(title) {
        const movie = this.movies.find(movie => movie.title === title);
        if (!movie) {
            return `Sorry, we do not have ${title}`;
        }
        if (movie.availableCopies > 0) {
            movie.availableCopies--;
            return `You have successfully rented ${title}`;
        } else {
            return `Sorry, ${title} is currently out of stock`;
        }
    }

    returnMovie(title) {
        const movie = this.movies.find(movie => movie.title === title);
        if (movie) {
            movie.availableCopies++;
            return `You have successfully returned ${title}`;
        } else {
            return `Sorry, we do not accept returns for ${title}`;
        }
    }
}

// Usage:
const store = new MovieStore();
store.addMovie(new Movie('Jujutsu Kaisen', 10));
store.addMovie(new Movie('Demon Slayer', 5));

console.log(store.rentMovie('Jujutsu Kaisen'));  // You have successfully rented Jujutsu Kaisen
console.log(store.rentMovie('Demon Slayer'));  // You have successfully rented Demon Slayer
console.log(store.returnMovie('Solo Levelling'));  // You have successfully returned The Matrix
