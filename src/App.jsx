import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Route";

const App = () => {

  return (
    <div className="bg-sky-500">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
};

export default App;
