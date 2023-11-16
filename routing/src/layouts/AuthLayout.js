import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./style.css";

function AuthLayout() {
  return (
    <div className='auth-container'>
        <div className='auth-menu'>
            <Link to="/auth">Giris Yap</Link>
            <Link to="/auth/register">Kayit Ol</Link>
        </div>
        <hr />
        <Outlet/>

    </div>
  )
}

export default AuthLayout