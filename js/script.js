'use strict'; // используем строгий режим кодинга


//let numberOfFilms; // хранит значение о количестве просмотренных фильмов
// let lastFilm; // временая переменая цикла, каждую итерацию хранит названия просмотренного фильма
// let ratingFilm; // временная переменная цикла, каждую итерацию хранит значение рейтингка фильма

// Главная переменная, выполняющая роль базы данных о просмотренных фильмах
const personalMovieDB = {
    count: 0, // количество просмотренных фильмов
    movies: {}, // коллекция фильмов с их названиями, в качестве ключа и рейтингом, в качестве значения
    actors: {}, 
    genres: [],
    private: true, // свойсвто определяет доступ к базе фильмо, если false - доступ открыт
    // Функция для запроса данных от пользователя о количестве просмотренных им фильмов
    answerNumberOfFilms: function() {
        do {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "1");
        } while (personalMovieDB.count == "" || personalMovieDB.count <= 0 || isNaN(personalMovieDB.count));
    },
    // Функция для опроса пользователя об указанных им просмотренных фильмах и рейтинге
    answerFilmsData: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {
            let lastFilm;
            let ratingFilm;
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
            } while (ratingFilm == null || ratingFilm > 10.0 || ratingFilm < 1 || isNaN(ratingFilm));
            personalMovieDB.movies[lastFilm] = ratingFilm;
        }
    },
    // Функция проверки уровня пользователя по количеству просмотренных фильмов
    personalLevelViewFilms: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else {
            console.log("Вы киноман");
        }
    },
    // Функция проверки приватности базы данных
    showMyDB: function(privat) {
        if (!privat) { // Если personalMovieDB.private не true тогда выводит базу данных 
            console.log(personalMovieDB); // Выводим данные главной переменной (база фильмов)            
            personalMovieDB.genres.forEach(function(item, i) {
                console.log(`Любимый жанр № ${i+1} - это ${item}.`);
            });
        } else {
            console.log("Доступ закрыт");
        }
    },
    // Функция запроса ответов по 3 любимым жанрам
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            do {
            personalMovieDB.genres[i] = prompt(`Укажите Ваш любимый жанр под номером ${i+1}:`);
            } while (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "");
            //personalMovieDB.genres[i] = prompt(`Укажите Ваш любимый жанр под номером ${i+1}:`);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};

personalMovieDB.answerNumberOfFilms(); // Вызов функции запроса данных о количестве просмотренных фильмов
personalMovieDB.answerFilmsData(); // Вызов функции для запроса ответа пользователя по указанному количеству фильмов
personalMovieDB.personalLevelViewFilms(); // Вызов функции для проверки уровня пользователя по просмотренным фильмам
personalMovieDB.writeYourGenres(); // Вызов функции запроса 3 любимых жанров фильмов
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.private); // Вызов функц вывода базы данных
