import { BaseSyntheticEvent, FC, useState } from 'react';

const BookCreateComponent: FC<BookCreateComponentProps> = ({ createBook }) => {
    const [title, setTitle] = useState<string>('')

    const handleSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        createBook(title);
    }

    const handleOnChange = (e: BaseSyntheticEvent) => {
        setTitle(e.target.value)
    }

    return <div className="book-create">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="book-input"> Title </label>
                    <input  id="book-input" className="input" value={title} onChange={handleOnChange}/>
                    <button className="button">Add Book</button>
                </form>
           </div>
}

export type BookCreateComponentProps = {
    createBook: (title: string) => void
}

export default  BookCreateComponent;
