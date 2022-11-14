import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./componenets/Home/Home";
import Phone from "./componenets/Phone/Phone";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("http://localhost:5000/phones"),
          element: <Home></Home>,
        },
        {
          path: "/phones/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:5000/phones/${params.id}`),
          element: <Phone></Phone>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
