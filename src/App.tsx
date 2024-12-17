import "styles/global.css";
import { AppProvider } from "providers/AppProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "routers/router";

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
