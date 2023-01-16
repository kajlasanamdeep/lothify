import React from 'react'
import { Button } from 'react-bootstrap'
 import { FaFacebook,FaGoogle } from 'react-icons/fa';
function Book() {
  return (
    <section>
        <div className='container'>
            <div className='d-flex flex-column align-items-center justify-content-center' style={{height:'75vh'}}>
                <h2 className=''>Log In</h2>
                <h6>New to this site? <i>Sign Up</i></h6>
                <Button className='w-50' style={{backgroundColor:'blue'}}><FaFacebook/> {" "} Login with Facebook</Button>
                <Button className='mt-2 w-50'><FaGoogle/> {" "} Login with Google</Button>
                <i>_____________________or _________________________</i>
                <Button className='mt-2 w-50' variant='outline-dark'>Login with Email</Button>
            </div>
        </div>
    </section>
  )
}

export default Book