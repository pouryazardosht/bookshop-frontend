import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const BookContext = createContext()

function BookProvider({ children }) {
    const [books, setBooks] = useState([
        {
            "id": "c632bd79-d1cd-4757-b974-30b89271a964",
            "title": "کتاب شهر و دیوارهای نامطمئنش",
            "summary": "معرفی کتاب شهر و دیوارهای نامطمئنش اثر هاروکی موراکامی",
            "author": "هاروکی موراکامی",
            "price": 432000,
            "quantity": 10
        },
        {
            "id": "49949130-7138-4aba-89e5-a62722c61620",
            "title": "کتاب آرزوهای بزرگ",
            "summary": "string",
            "author": "چارلز دیکنز",
            "price": 360000,
            "quantity": 5
        },
        {
            "id": "41ff129a-362a-4963-9c45-8b5c4fd578b0",
            "title": "کتاب کتاب بازی 4 : ماجراجویی در مدرسه",
            "summary": "string",
            "author": "لیزی دویل",
            "price": 148000,
            "quantity": 2
        },
        {
            "id": "704ca34f-2c3c-49b4-88e3-a449acce82eb",
            "title": "دارن شان",
            "summary": "خلاصه قرار میگیرد",
            "author": "دارن",
            "price": 100000,
            "quantity": 1
        },
        {
            "id": "704ca34f-2c3c-49b4-88e3-a449acce82ae",
            "title": "کتاب می خواهم بمیرم ولی دوست دارم دوکبوکی بخورم",
            "summary": "خلاصه قرار میگیرد",
            "author": "بک سهی",
            "price": 112000,
            "quantity": 7
        },
        {
            "id": "704ca34f-2c3c-49b4-88e3-a449acce82vb",
            "title": "کتاب کلیله و دمنه (وزیری چرم)",
            "summary": "خلاصه قرار میگیرد",
            "author": "ابوالمعالی نصرالله منشی",
            "price": 616000,
            "quantity": 2
        },
    ]);
    // useEffect(() => {
    //     const fetchBooks = async () => {
    //         try {
    //             const res = await api.get("/book");
    //             setBooks(res);

    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     }
    //     fetchBooks()
    // }, [])
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