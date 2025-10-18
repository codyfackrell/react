import { useState, useEffect, createContext, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

// the provider will provide state to any of the components that are wrapped inside of it.
// children is a reserved prop when you write a component. Children is anything thats inside the component that you rendered.
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  });

  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
