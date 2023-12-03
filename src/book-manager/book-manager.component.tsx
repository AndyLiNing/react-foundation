import './book-manager.component.css';
import { FC, useState } from 'react';

import BookCreateComponent from './book-create/book-create.component';
import BookListComponent, { Book } from './book-list/book-list.component';

const BookManagerComponent: FC<{}> = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const createBook = (title: string) => {
        const id = generateId();
        setBooks([...books, { id, title }]);
    }

    const deleteBookById = (id: number) => {
        const newBooks = [...books.filter(book => id !== book.id)];
        setBooks(newBooks);
    }

    const editBookById = (id: number, title: string) => {
        const newBooks = books.map((book) => {
            if(book.id === id) {
                book.title = title;
            }
            return book
        })
        setBooks(newBooks)
    }

    return <div className="app">
        <h1>Reading List</h1>
        <BookListComponent books={books} deleteBookById={deleteBookById} editBookById={editBookById}/>
        <BookCreateComponent createBook={createBook}/>
    </div>
}

const generateId = (): number => Math.round(Math.random() * 99999)

export default BookManagerComponent
