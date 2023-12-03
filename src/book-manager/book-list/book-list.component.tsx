import { FC } from 'react';

import BookShowComponent from '../book-show/book-show.component';

const BookListComponent: FC<BookListComponentProp> = ({books, deleteBookById, editBookById}) => {
    return <div className="book-list">
        {
            books.map((book) =>
            <BookShowComponent key={book.id} book={book} deleteBookById ={deleteBookById} editBookById={editBookById}/>)
        }
    </div>
}

export type BookListComponentProp = {
    books: Book[];
    deleteBookById: Function;
    editBookById: Function;
}

export type Book = {
    id: number;
    title: string
}

export default BookListComponent
