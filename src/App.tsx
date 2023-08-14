import { useState } from "react";
import { ChildrenAges } from "./ChildrenAges";

function App() {
  const [ages, setAges] = useState<Array<number>>([5, 3, 2]);

  return <ChildrenAges ages={ages} onChange={setAges} />;
}

export default App;
