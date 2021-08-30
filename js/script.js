'use strict'; // используем строгий режим кодинга

let numberOfFilms; // хранит значение о количестве просмотренных фильмов
let lastFilm; // временая переменая цикла, каждую итерацию хранит названия просмотренного фильма
let ratingFilm; // временная переменная цикла, каждую итерацию хранит значение рейтингка фильма

answerNumberOfFilms(); // Вызов функции запроса данных о количестве просмотренных фильмов

// Главная переменная, выполняющая роль базы данных о просмотренных фильмах
const personalMovieDB = {
    count: numberOfFilms, // количество просмотренных фильмов
    movies: {}, // коллекция фильмов с их названиями, в качестве ключа и рейтингом, в качестве значения
    actors: {}, 
    genres: [],
    private: false
};

answerFilmsData(); // Вызов функции для запроса ответа пользователя по указанному количеству фильмов
personalLevelViewFilms(); // Вызов функции для проверки уровня пользователя по просмотренным фильмам
showMyDB(); // Вызов функции вывода информации по фильмам из базы данных
writeYourGenres(); // Вызов функции запроса 3 любимых жанров фильмов
/*
 * ФУНКЦИИ ПРОГРАММЫ
 */

// Функция для запроса данных от пользователя о количестве просмотренных им фильмов
function answerNumberOfFilms() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");
    } while (numberOfFilms == "" || numberOfFilms <= 0 || isNaN(numberOfFilms));
}

// Функция для опроса пользователя об указанных им просмотренных фильмах
function answerFilmsData() {
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
}

// Функция проверки уровня пользователя по количеству просмотренных фильмов
function personalLevelViewFilms() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("Вы киноман");
    }
}

// Функция проверки приватности базы данных
function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB); // Выводим данные главной переменной (база фильмов)
    } else {
        console.log("Доступ закрыт");
    }
}

// Функйия запроса ответов по 3 любимым жанрам
function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genres;
        genres = prompt(`Укажите Ваш любимый жанр под номером ${i+1}:`);
        personalMovieDB.genres[i] = genres;
    }
}