import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Perfil } from "./pages/Perfil/Perfil";
import { Root } from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export function App() {
  const [theme, setTheme] = useState("light");

  function alternarTema() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, alternarTema }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}
