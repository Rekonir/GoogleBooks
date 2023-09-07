import MainPage from "./pages/MainPage/MainPage"
import styles from './App.module.scss'
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div className={styles.App}>
        <MainPage />
      </div>
    </Provider>

  )
}

export default App
