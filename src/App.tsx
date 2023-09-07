import MainPage from "./pages/MainPage/MainPage"
import styles from './App.module.scss'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Routes } from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <div className={styles.App}>
          <MainPage />
        </div>
        
      </Routes>
    </Provider>

  )
}

export default App
