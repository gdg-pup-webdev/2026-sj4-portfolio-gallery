import { Routes, Route } from "react-router-dom";

import Mainlayout from "./layouts/MainLayout";
import SamplePage from "./pages/SamplePage";
import HomePage from "./pages/HomePage";
import DynamicPage from "./pages/DynamicPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path="/testing" element={<SamplePage />} />

          <Route path="/dynamic/:id" element={<DynamicPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
