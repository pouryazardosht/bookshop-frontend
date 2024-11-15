import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const BookContext = createContext()

function BookProvider({ children }) {
    const [books, setBooks] = useState();
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await api.get("/book");
                setBooks(res);

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchBooks()
    }, [])
    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    )
}

const useBooks = () => {
    const books = useContext(BookContext)
    return books;
}

export default BookProvider;
export { useBooks }