import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
<div>
<Navbar/>
<Home/>
</div>
 ) ,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
