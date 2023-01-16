import React, { useState } from 'react'
import style from './slides.module.css'
import Slider from 'react-slick';
import data from '../../products.json';
import { useRouter } from 'next/navigation';
const index = () => {
      const Router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={style.section}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div>
                <h2> Reserves</h2><br />
                <Slider {...settings}>
                  {data.map((item,i) => {
                    return (
                      <React.Fragment key={i}>
                        <img onClick={() =>Router.push(`/product/${i}`)} className={style.slideimg} src={item.src} alt="" />
                        <h5>{item.title}</h5>
                        <p>
                          {item.des}
                        </p>
                        <p>Price: {" "}{item.Price}</p>
                      </React.Fragment>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index