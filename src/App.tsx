import MainPage from "./pages/MainPage/MainPage"
import styles from './App.module.scss'
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {

  return (
    <Routes>
      {/* <div className={styles.App}>
          <MainPage />
        </div> */}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} Component={Component} />
      )}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
