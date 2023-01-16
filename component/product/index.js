import React from 'react'
import style from './contact.module.css';
import { FaWhatsapp , FaTwitter,FaFacebook} from "react-icons/fa";

const index = ({ product,setShow,setCart }) => {
    return (
        <section className={style.section}>
            <div className='container'>
                <div className='row justify-content-center align-content-center'>
                    <div className='col-lg-6 col-md-12'>
                        <div className={style.leftdiv}>
                            <img src={product?.src} alt='' />
                        </div>
                        <div className='mt-3'>
                            <i>Height:{product?.height}</i><br/>
                           <i>Width:{product?.width}</i>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <i className={style.heading}>{product?.title}</i>
                        <br/>
                        <i className={style.price}>₹{product?.Price}</i>
                        <br/>
                        <label htmlFor='qty' className={style?.label}>
                            <i>Quantity</i>
                        </label>
                        <br/>
                        <input id='qty' defaultValue={1} min={1} className={style.num} type='number'></input>
                        <br/>
                        <button className='btn btn-success w-50 mt-3' onClick={()=>{setCart(old=>[...old,product]);setShow(true)}}>
                            Add To Cart
                        </button>
                        <br/>
                        <div className='mt-2'>
                            <FaWhatsapp/><FaFacebook className='m-3'/><FaTwitter/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index