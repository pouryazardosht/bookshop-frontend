const BASE_URL = "http://localhost:3000";

const getBook = (page) => `${BASE_URL}/book?page=${page}&limit=10`;
const getBookById = (id) => `${BASE_URL}/book/${id}`;

export { getBook, getBookById };
