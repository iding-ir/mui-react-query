import { IStory } from "../types";

const api = process.env.REACT_APP_API;

export const getStory = async (id: string) => {
  const response = await fetch(`${api}/${id}`);

  const data = await response.json();

  return data;
};

export const getStories = async () => {
  const response = await fetch(`${api}`);

  const data = await response.json();

  return data.reverse();
};

export const deleteStory = async (id: string) => {
  await fetch(`${api}/${id}`, {
    method: "DELETE",
  });

  return true;
};

export const postStory = async (story: Partial<IStory>) => {
  const response = await fetch(`${api}`, {
    method: "POST",
    body: JSON.stringify(story),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};

export const editStory = async (story: Partial<IStory>) => {
  const response = await fetch(`${api}/${story.id}`, {
    method: "PUT",
    body: JSON.stringify(story),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};
