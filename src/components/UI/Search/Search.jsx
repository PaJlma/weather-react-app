import React, { useRef } from 'react';
import styles from './Search.module.css';
import SearchPromptItem from './SearchPromptItem/SearchPromptItem';
import { useSelector } from 'react-redux';

const Search = ({ placeholder, value, onChange, onClick }) => {
    const searchHistory = useSelector(state => state.root.searchHistory);

    return (
        <div className={styles.body}>
            <div className={styles.input}>
                <input
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    type="text"
                />
                <button onClick={onClick}/>
            </div>

            <div className={styles.prompts}>
                {Array.from(searchHistory).map(item => <SearchPromptItem key={item} place={item} />)}
            </div>
        </div>
     );
}

export default Search;