import React from 'react'
import { FaInstagram } from "react-icons/fa";
import style from './footer.module.css'
const Footer = () => {
  return (
    <section className='mint5footer' id='footer'>
      <div className="container mint5-all-pages-padding">
        <div className={style.footercontent}>
          <h1>Lithofy</h1>
          <ul className='d-flex list-unstyled justify-content-center '>
            <li>
              lithofy.soviet@gmail.com
            </li>
          </ul>
          <ul className='d-flex list-unstyled justify-content-center '>
            <li>
              <a className='nav-link' href='https://www.instagram.com/lithofy/?igshid=YmMyMTA2M2Y%3D'>
                <FaInstagram />
              </a>
            </li>
          </ul>
          <div className="footer-text">
            ©2022 by Lithofy
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer