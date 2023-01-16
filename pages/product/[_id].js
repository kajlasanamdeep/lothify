import { useRouter } from "next/router"
import products from '../../products.json';
import Item from '../../component/product'
import React, { useEffect, useState } from "react";
function Product({setShow,setCart}) {
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const { _id } = router.query;

    useEffect(() => {
        if (_id) {
            setIndex(_id)
        }
    }, [])
    return <React.Fragment>
        <div className="mt-2 d-flex justify-content-evenly"><i className="fs-2 fw-semibold">Home/product/{_id ?? 0}</i> <span><i onClick={() => index > 1 ? setIndex(index - 1) : null} className="btn bg-transparent">Prev</i> | <i onClick={() => index < products.length - 1 ? setIndex(index + 1) : null} className="btn bg-transparent">Next</i></span></div>
        <Item setCart={setCart} setShow={setShow} product={products[index]} />
    </React.Fragment>
}

export default Product;