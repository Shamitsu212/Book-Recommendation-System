import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import styles from "./allBooksPage.module.css"

function BookPage({books, goTobooks, goTobook}) {
    
    const {id} = useParams();
    const book = books.find(b => String(b.id) === id)

    const [selectedGenres, setSelectedGenres] = useState([]);

    useEffect(() => 
    {
        if (book?.Genres) {
            setSelectedGenres(book.Genres);
        }
    },[book]);

    const recomendedBooks = books.filter((b) =>
          b.id !== book.id && 
          b.Genres && 
          b.Genres.some((g) => selectedGenres.includes(g)) 
      );
      
    return(
        <>
        <div className={styles.bookContainer}>
            <div className={styles.bookSmallContainer}>
            <span>{book.name}</span>
            <picture>
                <img src={book.image} className={styles.bookImage}></img>
            </picture>
            </div>
            <div className={styles.bookSmallContainer}>
            <span>{book.text}</span>
                <div className={styles.genreContainer}>
                    {book.Genres.map((genre) => (
                        <div className={styles.genresCard}>
                            <span>{genre}</span>
                        </div>
                    ))}
                </div>
            <div className={styles.buttonContainer}>
            <button onClick={() => goTobooks()} className={styles.returnButton}>Вернуться на главную</button>
            </div>
            <div>
                <span>Похожее по жанрам:</span>
            </div>
            <div className={styles.recomendedContainer}>
            {recomendedBooks.slice(0, 3).map((recomendedBook)=> (
            <div key={recomendedBook.id} onClick={() => goTobook(recomendedBook.id)}>
                    <picture>
                        <img src={recomendedBook.image} className={styles.recomendedBookImage}></img>
                    </picture>
            </div>
            ))}
            </div>
        </div>
        </div>
        </>
    );
}
export default BookPage