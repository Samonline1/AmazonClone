import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/search/:name",
    element: (
      <div>
        <Navbar />
        <SearchResults />
      </div>
    ),
  },
    {
    path: "/search/:name/:id",
    element: (
      <div>
        <Navbar />
        <ProductDetails />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
