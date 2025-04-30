import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
