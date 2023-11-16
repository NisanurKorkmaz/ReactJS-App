import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Menu() {
    const navigate = useNavigate();
  return (
    <div>
        <ul className='menu'>
            <li>
                <a href='/'>Anasayfa(test)</a>
            </li>
            <li>
                <Link to="/">Anasayfa</Link>
            </li>
            <li>
                <Link to="users"> Kullanicilar</Link>
            </li>
            <li>
                <Link to="contact">Iletisim</Link>
            </li>
            <li onClick={() => navigate(-1)}>
                Geri
            </li>
        </ul>
    </div>
  )
}

export default Menu