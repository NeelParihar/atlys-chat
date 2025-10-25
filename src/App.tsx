import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import FeedPage from "./pages/FeedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
