import { Route, Routes } from "react-router-dom"
import HomePage from "./components/templates/HomePage"

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}

export default App