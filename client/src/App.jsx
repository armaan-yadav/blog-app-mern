import Header from "./components/header/Header";
import Login from "./components/auth/Login";
import Post from "./components/post card/Post";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Layout from "./Layout";
import IndexPage from "./components/pages/IndexPage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
