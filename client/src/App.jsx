import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Layout from "./Layout";
import IndexPage from "./components/pages/IndexPage";
import UserContextProvider from "./context/UserContext";
import Create from "./components/create/Create";
import BlogPage from "./components/pages/BlogPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:blogId" element={<BlogPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
