import { Routes, Route } from "react-router-dom";

import Mainlayout from "./layouts/MainLayout";
import SamplePage from "./pages/SamplePage";
import HomePage from "./pages/HomePage";
import DynamicPage from "./pages/DynamicPage";
import ScrollToTop from "./components/ScrollToTop";

// 🛑 TODO: Step 2C - Import your newly created page component here!
// import YourNamePage from "./pages/members/YourNamePage";
import ErwinDaguinotasPage from "./pages/members/ErwinDaguinotasPage";
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
            <Route path="sample" element={<SamplePage />} />
            <Route path="sparky" element={<SamplePage />} />
            <Route path="template" element={<StudentTemplate />} />

            {/* 🛑 TODO: Step 2B - Add a new Route for your page! */}
            {/* Make the path your name (e.g., path="your-name") and the element your component */}
            <Route path="erwin-daguinotas" element={<ErwinDaguinotasPage />} />
            {/* <Route path="your-name" element={<YourNamePage />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
