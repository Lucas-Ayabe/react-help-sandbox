import "./presentation/styles/index.css";

import { useEffect, useState } from "react";
import { Layout } from "./presentation/molecules";
import * as Templates from "./presentation/templates";
import { Post } from "./domain";
import { PostService } from "./services";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const service = new PostService();
    service.list().then(setPosts); // Coloca 100 posts falsos
  }, []);

  return (
    <Layout>
      <div className="flow">
        <Templates.Material2FieldTemplate />
      </div>
    </Layout>
  );
}

export default App;
