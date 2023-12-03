import { FC, useState } from 'react';

import BookEditComponent from '../book-edit/book-edit.component';
import { Book } from '../book-list/book-list.component';

const BookShowComponent: FC<BookShowComponentProp> = ({ book, deleteBookById, editBookById }) => {

    const [editMode, setEditMode] = useState(false);

    const onEdit = () =>  {
       setEditMode(!editMode)
    }
    const onDelete = () =>  {
       deleteBookById(book.id)
    }

    const editBook  = (id: number, title: string) => {
        onEdit();
        editBookById(id, title)
    }

    return <div className="book-show">
                <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="image"/>
                {editMode &&
                    <BookEditComponent book={book} editBook={editBook}/>
                }
                {!editMode &&
                    <p>{book.title}</p>
                }
                <div className="actions">
                    <button className="edit" onClick={onEdit}> Edit </button>
                    <button className="delete" onClick={onDelete}> Delete</button>
                </div>
    </div>
}

export type BookShowComponentProp = {
    book: Book;
    deleteBookById: Function;
    editBookById: Function
}

export default BookShowComponent;
