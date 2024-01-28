import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionCreators } from './store/reducers/actions';
import Header from './components/Header/Header';
import TownNotFound from './components/TownNotFound/TownNotFound';
import Main from './components/Main/Main';
import styles from './App.module.css';

const App = () => {
  const state = useSelector(state => state.root);
  const dispatch = useDispatch();

  const { townToSearch, weatherData } = state;

  useEffect(() => {
    dispatch(actionCreators.fetchWeatherData(townToSearch));
  }, [townToSearch]);

  return (
    <div className={styles.app}>
      <Header />
        { weatherData?.cod === 200 
        ?
          <Main />
        :
          <TownNotFound />
      }
      </div>
  );
}

export default App;