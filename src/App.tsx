import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} Component={Component} />
      )}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App
