import React from "react";
import styles from "./allBooksPage.module.css"
import { useState } from "react";

function AllBooksPage({books, goTobook}) {
    const[selectedGenres, setSelectedGenres] = useState ([])

    const GenreChange = (genre) => {
        setSelectedGenres(prev =>       //prev - состояние что было до вызова
            prev.includes(genre) 
            ? prev.filter(g => g !== genre)
            : [...prev, genre]
        );
    };

    const filteredBooks = selectedGenres.length === 0
    ? books 
    : books.filter(book => book.Genres && book.Genres.some(g => selectedGenres.includes(g)))

    return(
        <div>
        <div className={styles.zero}>
            <div className={styles.hText}>Добро пожаловать на главную страницу</div>
            <div className={styles.sidePanel}>
                <span className={styles.sideHText}>Фильтр по жанрам</span><br/>
                <span className={styles.sideText}><input type='checkbox' onChange={() => GenreChange("Фэнтези")}></input>Фэнтези</span>
                <span className={styles.sideText}><input type='checkbox' onChange={() => GenreChange("Приключения")}></input>Приключения</span>
                <span className={styles.sideText}><input type='checkbox' onChange={() => GenreChange("Драма")}></input>Драма</span>
                <span className={styles.sideText}><input type='checkbox' onChange={() => GenreChange("Классика")}></input>Классика</span>
                <span className={styles.sideText}><input type='checkbox' onChange={() => GenreChange("Роман")}></input>Роман</span>
                <span className={styles.sideText}><input type='checkbox' onChange={() => GenreChange("Мистика")}></input>Мистика</span>
                <span className={styles.sideText}><input type='checkbox' onChange={() => GenreChange("Ужасы")}></input>Ужасы</span>
            </div>
        </div>
        <div className={styles.container}>
            {filteredBooks.map((book) => (
            <div key={book.id}  className={styles.bookCard} onClick={() => goTobook(book.id)}>
                <span>{book.name}</span>
                <img src={book.image} className={styles.bookImage}></img>
            </div>
            ))}
        </div>
        </div>
    );
}
export default AllBooksPage