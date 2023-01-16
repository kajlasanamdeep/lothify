import React from 'react'
import style from './contact.module.css'
const index = () => {
    return (
        <>
            <section id='contact' className={style.section}>
                <div className='container'>
                    <h1 className={style.heading}>Contact Us</h1>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className={style.firstdiv}>
                                <img src='/contactbg.webp' alt='' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={style.formdiv}>
                                <h4>
                                    Sat Paul Mittal School</h4>
                                <h4>Ludhiana, Punjab</h4>
                                <h6>lithofy.soviet@gmail.com  |
                                   +91 95010 55555</h6><br />
                                <div>
                                    <div className='d-flex'>
                                        <div className='p-1'>
                                            <label>First Name</label><br />
                                            <input className='form-control border-dark bg-transparent' type='text' />
                                        </div>
                                        <div className='p-1'>
                                            <label>Last Name</label><br />
                                            <input type='text' className='form-control border-dark bg-transparent' />
                                        </div>
                                    </div>
                                    <div>
                                        <label>E-mail</label><br />
                                        <input type='email' className='form-control border-dark bg-transparent' />
                                    </div>
                                    <div>
                                        <label>Message</label><br />
                                        <textarea type='text' className='form-control border-dark bg-transparent' />
                                    </div>
                                    <button className='btn mt-2 px-5 btn-success'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
