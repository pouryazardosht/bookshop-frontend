import useTitle from "../../hooks/useTitle";

function BookPage({ name, author }) {
  useTitle(name);
  return <div>BookPage</div>;
}

export default BookPage;
