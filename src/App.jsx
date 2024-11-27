import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage";
import BookProvider from "./context/BookContext";
import BookPage from "./pages/book/BookPage";

function App() {
  return (
    <BookProvider>
      <Routes>
        <Route index element={<Navigate to="books" />} />
        <Route path="books" element={<HomePage />} />
        <Route path="books/:id" element={<BookPage />} />
      </Routes>
    </BookProvider >
  )
}

export default App