import React from 'react';
import styles from './SearchPromptItem.module.css';
import { useDispatch } from 'react-redux';
import { actionCreators } from './../../../../store/reducers/actions';

const SearchPromptItem = ({ place }) => {
    const dispatch = useDispatch();

    const clickHandler = (event) => {
        dispatch(actionCreators.searchWeatherInTown(event.currentTarget.innerText));
    }

    return (
        <div onClick={clickHandler} className={styles.body}>
            { place }
        </div>
     );
}

export default SearchPromptItem;