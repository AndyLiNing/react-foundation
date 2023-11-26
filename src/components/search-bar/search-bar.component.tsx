import { BaseSyntheticEvent, FC, useRef, useState } from 'react';

const SearchBarComponent: FC<SearchProps>= ( { onSearchHandler }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClick = () => {
        console.log('inputRef', inputRef)
        onSearchHandler(searchTerm);
        setSearchTerm('')
    }
    return <>
        <input ref={inputRef} value={searchTerm} onChange={(e: BaseSyntheticEvent) => { setSearchTerm(e.target.value)}}/>
        <button onClick={ onClick }> Search </button>
    </>
}

export type SearchProps = {
    onSearchHandler: (e: string) => void
}
export default SearchBarComponent;
