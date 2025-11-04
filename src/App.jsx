import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import ProductDetails from "./components/ProductDetails";
import CatergoryResults from "./components/CatergoryResults";

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
   {
    path: "/category/:name",
    element: (
      <div>
        <Navbar />
        <CatergoryResults />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
