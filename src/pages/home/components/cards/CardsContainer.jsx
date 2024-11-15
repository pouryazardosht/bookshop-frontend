import { useBooks } from "../../../../context/BookContext"
import Card from "./Card"

function CardsContainer() {
    const { books } = useBooks();
    return (
        <div className="flex justify-center my-6">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {books.map((book) => (
                    <Card key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}

export default CardsContainer