import { Routes, Route } from "react-router-dom";

import Mainlayout from "./layouts/MainLayout";
import SamplePage from "./pages/SamplePage";
import HomePage from "./pages/HomePage";
import DynamicPage from "./pages/DynamicPage";
import ScrollToTop from "./components/ScrollToTop";
import StudentTemplate from "./pages/members/StudentTemplate";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path="testing" element={<SamplePage />} />

          <Route path="dynamic/:id" element={<DynamicPage />} />

          <Route path="members">
            <Route path="sparky" element={<SamplePage />} />
            <Route path="template" element={<StudentTemplate />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
