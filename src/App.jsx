import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage";
import BookProvider from "./context/BookContext";

function App() {
  return (
    <BookProvider>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BookProvider>
  )
}

export default App