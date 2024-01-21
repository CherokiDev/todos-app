import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter basename="/todos-app/">
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
