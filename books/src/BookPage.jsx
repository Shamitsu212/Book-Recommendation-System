import React from "react";
import { useParams } from "react-router-dom";

function BookPage({books}) {
    
    const {id} = useParams();
    const book = books.find(b => b.id === id)

    return(
        <div>бквыфвфыв</div>
    );
}
export default BookPage