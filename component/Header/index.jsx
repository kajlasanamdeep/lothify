import style from './header.module.css';
import { HiUserCircle, HiOutlineShoppingBag } from 'react-icons/hi';
import { Offcanvas } from 'react-bootstrap';

const Header = ({ show, setShow, setCart, cart }) => {
  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className={`navbar-brand ${style.logo}`} href="/">Lithofy</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className={`navbar-nav ${style.ul}`}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#about">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#contact">Contact us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/book">Book Online</a>
                </li>
                <li className="nav-item">
                  <a href='/signup' className="nav-link"><HiUserCircle className={style.icon} /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/login'><i>Log In</i></a>
                </li>
                <li className="nav-item position-relative">
                  <span className="nav-link" onClick={() => setShow(true)}><HiOutlineShoppingBag className={style.icon} /></span>
                  <i className='bg-dark text-white position-absolute top-0 ms-auto px-1 rounded'>{cart.length}</i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Offcanvas show={show} onHide={() => setShow(false)} placement={'end'}>
        <Offcanvas.Header className='bg-dark text-white' closeButton closeVariant='white'>
          <Offcanvas.Title><i>Cart</i></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-center'>
          {
            !cart.length ?
              <i>Cart is empty</i>
              :
              <>{cart.map((product, i) => <div className=' position-relative'><i onClick={() => setCart(old => old.filter((_, ind) => ind != i))} className='btn-close top-0 text-dark bg-white position-absolute' />
                <img width={150} src={product?.src} /><br />
                <i className='text-dark'>₹{product?.Price}</i>
              </div>)}</>
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
