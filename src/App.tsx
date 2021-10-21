import "./presentation/styles/index.css";
import { Layout } from "./presentation/molecules";
import { TestModalTemplate } from "./presentation/templates";

function App() {
  return (
    <Layout>
      <div className="flow">
        <TestModalTemplate />
      </div>
    </Layout>
  );
}

export default App;
