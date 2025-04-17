import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css'

import anna from "./assets/anna.png"
import crimes from "./assets/crimes.png"
import ctulhu from "./assets/ctulhu.png"
import hobbit from "./assets/hobbit.png"
import ring from "./assets/ring.png"
import table from "./assets/table.png"

import BookPage from './BookPage'
import AllBooksPage from './allBooksPage'


function App() {

  const books = [
    {id: 1 , image: hobbit , name:"Хоббит" ,  text:"Увлекательное фэнтези-приключение о Бильбо Бэггинсе, который отправляется в путешествие, полное магии, опасностей и драконов.",
      Genres:[
          "Фэнтези", "Приключения"
      ],
     },
     {id: 2 , image: ring , name:"Властелин колец" ,  text: "Эпическая сага о борьбе добра и зла, в центре которой — путешествие хоббита Фродо, несущего Кольцо Всевластья." ,
      Genres:[
        "Фэнтези", "Приключения"
      ],
     },
     {id: 3 , image: table , name:"Рыцари круглого стола" ,  text:"Легенды о короле Артуре и его рыцарях, полные доблести, чести и волшебства." ,
      Genres:[
        "Легенды", "Историческое фэнтези", "Приключения"
      ],
     },
     {id: 4 , image: crimes , name:"Преступление и наказание" ,  text:"Психологический роман о морали, вине и раскаянии, рассказывающий историю бедного студента, совершившего убийство." ,
      Genres:[
        "Классика", "Психология", "Драма"
      ],
     },
     {id: 5 , image: anna , name:"Анна Каренина" ,  text:"Трагическая история любви и измены в высшем обществе России XIX века." ,
      Genres:[
        "Классика", "Роман", "Драма"
      ],
     },
     {id: 6 , image: ctulhu , name:"Зов Ктулху" ,  text:"Мрачный рассказ о древнем космическом существе, пробуждающем ужасы в людях, осмелившихся узнать правду." ,
      Genres:[
        "Ужасы", "Мистика", "Тёмное фэнтези"
      ],
     },
  ]

  const navigate = useNavigate();

  function goTobooks()
  {
    navigate("/")
  };

  function goTobook(id)
  {
    navigate(`/book/${id}`)
  };

  return (
    <>
      <Routes>
          <Route path="/book/:id"
          element ={
          <BookPage 
                books = {books}
                goTobooks = {goTobooks}
                goTobook={goTobook}
              />}/>
          <Route path="/" element={
            <AllBooksPage
                books={books}
                goTobook={goTobook}
              />}/>
      </Routes>
    </>
  )
}

export default App
