import { Item } from "../components/Items/Items";

const api = process.env.REACT_APP_API;

export const getItem = async (id: string) => {
  const response = await fetch(`${api}/items/${id}`);

  const data = await response.json();

  return data;
};

export const getItems = async () => {
  const response = await fetch(`${api}/items`);

  const data = await response.json();

  return data.reverse();
};

export const deleteItem = async (id: string) => {
  await fetch(`${api}/items/${id}`, {
    method: "DELETE",
  });

  return true;
};

export const postItem = async (item: Partial<Item>) => {
  const response = await fetch(`${api}/items`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};

export const editItem = async (item: Partial<Item>) => {
  console.log(item);

  const response = await fetch(`${api}/items/${item.id}`, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};
