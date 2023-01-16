import { useRouter } from 'next/router';
import React from 'react'
import products from '../../products.json';
import style from './products.module.css';
function Index() {
    const Router = useRouter();
    return (
        <section>
            <div className='container'>
                <div className={style.shop}>
                    {products.map((item, i) => {
                        return (
                            <div onClick={() => Router.push(`/product/${i}`)} key={i}>
                                <img  className={style.slideimg} src={item.src} alt="" />
                                <h5 className='w-75 m-auto'>{item.title}</h5>
                                <p>{"₹"}{item.Price}</p>
                            </div>
                        )
                    })}
                </div >
            </div>
        </section>
    )
}

export default Index