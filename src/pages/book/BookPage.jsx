import useTitle from "../../hooks/useTitle";

function BookPage({ name }) {
  useTitle(name);
  return <div>BookPage</div>;
}

export default BookPage;
