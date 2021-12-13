const getPage = (defaultPage: string | undefined) => {
  const storedPage = localStorage.getItem("pages") as string;

  const fallbackPage = "home";

  const iPage = storedPage || defaultPage || fallbackPage;

  return { iPage };
};

export default getPage;
