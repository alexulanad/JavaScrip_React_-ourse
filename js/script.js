'use strict'; // используем строгий режим кодинга

// запрашиваем данные от пользователя о количестве просмотренных фильмов
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt("Ваш последний просмотренный фильм?", "Пусто"),
      ratingFilm = +prompt("Оцените этот фильм от 0.0 до 10.0:", "10.0" ),
      lastFilm2 = prompt("Ваш последний просмотренный фильм?", "Пусто"),
      ratingFilm2 = +prompt("Оцените этот фильм от 0.0 до 10.0:", "10.0" );

// personalMovieDB.movies[lastFilm] = ratingFilm;
// personalMovieDB.movies[lastFilm2] = ratingFilm2;

console.log(personalMovieDB);



