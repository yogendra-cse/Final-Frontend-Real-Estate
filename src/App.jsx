import HomePage from "./routes/homePage/homePage";
import { BrowserRouter } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import Register from "./routes/register/register";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<ListPage />} />
          <Route path=":id" element={<SinglePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/about" element={<SinglePage />} />
          <Route path="/profile/update" element={<ProfileUpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
