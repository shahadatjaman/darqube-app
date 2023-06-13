import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import "./App.css";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Suspense fallback={"loading..."}>{useRoutes(routes)}</Suspense>
    </>
  );
}

export default App;
