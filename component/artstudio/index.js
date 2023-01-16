import React from 'react'
import style from "./art.module.css"

const index = () => {
    return (
        <section className={style.section}>
            <div className={style.div1}>
                <div className='container'>
                    <div className={`row firstrow`}>
                        <div className='col-8'>
                            <div className={style.contentdiv}>
                                <h1>Art Studio</h1>
                                <p>
                                    Our art studio consists of young artists and designers creating new art every day. It's a team of talented and experimental young artists making paintings ranging from water-colours to murals.
                                </p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className={style.imgdiv}>
                                <img src='/art.webp' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.div2}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className={style.content}>
                                <div>
                                    <h1>Let's Add Art To Your Space!</h1>
                                    <p>Connect with us for your customized requirements for<br /> your space or for corporate orders/gifting.</p>
                                    <p className='mt-5'>Fill out the details and we'll get in touch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default index