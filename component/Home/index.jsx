import React from 'react'
import style from './home.module.css'
import sideImg from '../Assets/Images/banner-side-img.svg'
const Home = () => {
  return (
    <section className={style.home} id='home'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className={style.content}>
            <h1>Lithofy</h1>
            <p>​Affordable art, purposefully curated</p>
          </div>

        </div>
        <div className='col-lg-6 d-flex'>
          <div className={style.imgdiv}>
          <img  src='/sideimg.webp' alt=''/>

          </div>

        </div>

      </div>

    </div>
    </section>
  )
}

export default Home;