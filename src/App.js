import { RouterProvider } from "react-router-dom";
import { router } from "./MainRouter";


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
