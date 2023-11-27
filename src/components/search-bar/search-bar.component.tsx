import './search-bar.component.css'
import { BaseSyntheticEvent, FC, useRef, useState } from 'react';

const SearchBarComponent: FC<SearchProps>= ( { onSearchHandler }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onSubmit = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        onSearchHandler(searchTerm);
        setSearchTerm('')
        inputRef.current?.blur();
    }
    return <div className="search-box">
        <form onSubmit={onSubmit}>
            <label> Search </label>
            <input ref={inputRef} value={searchTerm} onChange={(e: BaseSyntheticEvent) => { setSearchTerm(e.target.value)}}/>
        </form>

        {/*<button onClick={ onClick }> Search </button>*/}
    </div>
}

export type SearchProps = {
    onSearchHandler: (e: string) => void
}
export default SearchBarComponent;
