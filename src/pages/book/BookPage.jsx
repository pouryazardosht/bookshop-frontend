import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/config";

function BookPage() {
  const { book, setBook } = useState([])
  const { id } = useParams()
  useEffect(() => {
    const getById = async (id) => {
      try {

        const res = await api.get(`/book/${id}`);
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    }
    getById(id)
  })
  return <div>BookPage</div>;
}

export default BookPage;
