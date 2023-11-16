import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

import Home from "./pages/Dashboard/Home"
import Users from "./pages/Dashboard/Users"
import Contact from './pages/Dashboard/Contact';
import Menu from './components/Menu';
import UserDetails from './pages/Dashboard/UserDetails';
import Login from './pages/Auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';
import Register from './pages/Auth/Register';
import Error404 from './pages/Error404'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <DashboardLayout />}>
          <Route index element = {<Home />}></Route>
          <Route path = "users" element = {<Users />}></Route>
          <Route path = "users/:id" element = {<UserDetails />}></Route>
          <Route path = "contact" element = {<Contact />}></Route>
        </Route>

        <Route path='auth' element={<AuthLayout />}>
          <Route index element = {<Login />}></Route>
          <Route path="register" element = {<Register />}></Route>
        </Route>

        <Route path="*" element={<Error404 />}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
