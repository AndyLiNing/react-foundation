import React, { BaseSyntheticEvent, FC, useState } from 'react';
import { Book } from '../book-list/book-list.component';

const BookEditComponent: FC<BookEditComponentProps>= ({ book,editBook }) => {
    const [title, setTitle] = useState(book.title);

    const onSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        editBook(book.id, title);
    }
    return <form onSubmit={onSubmit}>
        <label> Title </label>
        <input className="input" value={ title } onChange={(e) => {
            setTitle(e.target.value)
        }}/>
        <button className="button is-primary" type="submit"> Save </button>
    </form>
}

type BookEditComponentProps = {
    book: Book;
    editBook: Function
}

export default BookEditComponent
