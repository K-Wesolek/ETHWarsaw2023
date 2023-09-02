import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NFTPreviev from "./pages/NFTPreviev.jsx";
import Form from "./pages/Form.jsx";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/nftpreviev/" element={<NFTPreviev />} />
          <Route path="/form/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;