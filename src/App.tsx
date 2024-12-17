import "styles/global.css";
import { Layout } from "components/shared/Layout";
import { AppProvider } from "providers/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <Layout>hi!</Layout>
    </AppProvider>
  );
};

export default App;
