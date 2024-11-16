import { useBooks } from "../../context/BookContext";

function BookPage() {
  const { books } = useBooks()
  console.log(books);
  return <div>BookPage</div>;
}

export default BookPage;
