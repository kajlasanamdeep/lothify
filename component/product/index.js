import React, { useState } from 'react'
import style from './contact.module.css';
import { FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";
import { Modal } from 'react-bootstrap';
const PayModal = ({ show, setShow }) => {
    return (
        <Modal
            size="sm"
            show={show}
            centered
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Payment Method
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className=' list-unstyled'>
                    <li>
                        <img height={50} width={80} src={'/g-pay.png'} /> {" "} <b>+91 95010 55555</b>
                    </li>
                </ul>
            </Modal.Body>
        </Modal>
    )
}
const index = ({ product, setShow, setCart }) => {
    const [pay, setPay] = useState(false);
    return (
        <section className={style.section}>
            <div className='container'>
                <PayModal show={pay} setShow={setPay} />
                <div className='row justify-content-center align-content-center'>
                    <div className='col-lg-6 col-md-12'>
                        <div className={style.leftdiv}>
                            <img className={style.img} src={product?.src} alt='' />
                        </div>
                        <div className='mt-3'>
                            <i>Height:{product?.height}</i><br />
                            <i>Width:{product?.width}</i>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <i className={style.heading}>{product?.title}</i>
                        <br />
                        <i className={style.price}>₹{product?.Price}</i>
                        <br />
                        <label htmlFor='qty' className={style?.label}>
                            <i>Quantity</i>
                        </label>
                        <br />
                        <input id='qty' defaultValue={1} min={1} className={style.num} type='number'></input>
                        <br />
                        <button className='btn btn-primary w-50 mt-3' onClick={() => setPay(true)}>
                            Buy Now
                        </button>
                        <br />
                        <button className='btn btn-success w-50 mt-3' onClick={() => { setCart(old => [...old, product]); setShow(true) }}>
                            Add To Cart
                        </button>
                        <br />
                        <div className='mt-2'>
                            <FaWhatsapp /><FaFacebook className='m-3' /><FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index