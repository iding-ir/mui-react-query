import { Book } from "../components/Books/Books";

const api = process.env.REACT_APP_API;

export const getBooks = async () => {
  const response = await fetch(`${api}/books`);

  const data = await response.json();

  return data.reverse();
};

export const deleteBook = async (id: string) => {
  await fetch(`${api}/books/${id}`, {
    method: "DELETE",
  });

  return true;
};

export const postBook = async (book: Partial<Book>) => {
  const response = await fetch(`${api}/books`, {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};
