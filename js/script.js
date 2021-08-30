'use strict'; // используем строгий режим кодинга

// запрашиваем данные от пользователя о количестве просмотренных фильмов
let numberOfFilms; // хранит значение о количестве просмотренных фильмов
let lastFilm; // временая переменая цикла, каждую итерацию хранит названия просмотренного фильма
let ratingFilm; // временная переменная цикла, каждую итерацию хранит значение рейтингка фильма

do {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
} while (numberOfFilms == "" || numberOfFilms <= 0);

// Главная переменная, выполняющая роль базы данных о просмотренных фильмах
const personalMovieDB = {
    count: numberOfFilms, // количество просмотренных фильмов
    movies: {}, // коллекция фильмов с их названиями, в качестве ключа и рейтингом, в качестве значения
    actors: {}, 
    genres: [],
    privat: false
};

for (let i = 0; i < personalMovieDB.count; i++) {
    do {
        lastFilm = prompt("Введите название просмотренного фильма:", "");
        if (lastFilm == null) {
            alert("Вы нажали отмена!");
        } else if (lastFilm == "") {
            alert("Вы ничего не ввели!");
        } else if (lastFilm.length >= 50) {
            alert("Название фильма слишком длинное (больше 50 символов)");
        }
    } while (lastFilm == null || lastFilm == "" || lastFilm.length >= 50);    
    
    do {
        ratingFilm = +prompt("Укажите рейтинг фильма от 1.0 до 10:", "");
        if (ratingFilm > 10.0) {
            alert("Вы указали рейтинг фильма больше 10!");
        } else if (ratingFilm < 1) {
            alert("Вы указали рейтинг фильма менше 1.0 или не указали ничего!");
        }
    } while (ratingFilm == null || ratingFilm > 10.0 || ratingFilm < 1);
    personalMovieDB.movies[lastFilm] = ratingFilm;
}
// Вердикт по количеству просмотренных фильмов
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else {
    console.log("Вы киноман");
}
console.log(personalMovieDB);
