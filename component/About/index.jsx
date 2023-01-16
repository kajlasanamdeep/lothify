import React from 'react'
import style from './about.module.css'
const About = () => {
  return (
    <section className={style['mint5about']} id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className={style.maincontent}>
              <h1 className={style.heading}>Transforming Spaces With Art </h1>
              <p>Lithofy creates curates and commissions art for homes, offices, hospitality and events. We bring a collection of paintings from all across India and provide an online platform for our consumers to experience and shop their desired paintings in the comfort of their homes</p>
            </div>
            <div className='ms-5 mt-5'>
              <p className={style.secondheading}>Looking for some art<br /> Inspiration??</p>
              <a target='_blank' href='https://www.instagram.com/lithofy/?igshid=YmMyMTA2M2Y%3D' className={style.button}>Follow us on Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;