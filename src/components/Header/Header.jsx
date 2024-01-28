import React from 'react';
import styles from './Header.module.css';
import Logotype from './../Logotype/Logotype';
import Search from '../UI/Search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../store/reducers/actions';

const Header = (props) => {
    const state = useSelector(state => state.root);
    const dispatch = useDispatch();

    const searchOnChangeHandler = (event) => {
        dispatch(actionCreators.searchTownFieldMutationObserver(event.currentTarget.value));
    }

    const searchOnClickHandler = () => {
        dispatch(actionCreators.searchWeatherInTown(state.searchTownField));
    }

    return (
        <header className={styles.body}>
            <Logotype />
            <Search 
            placeholder="Найдите свой город"
            value={state.searchTownField} 
            onChange={searchOnChangeHandler}
            onClick={searchOnClickHandler}
            />
        </header>
     );
}

export default Header;