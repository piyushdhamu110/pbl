import React from 'react';
import logo from '../assets/logo.png';

const Footer=() =>{
  return (
    <footer className="w-[99vw] p-5  flex justify-center">
      <div className='w-[90%] flex bg-white p-4 rounded-xl'>
        <div className='w-[34%] flex flex-col gap-3 items-center'>
          <img src={logo} alt="" className='w-[7rem]'/>
          <p>Subscribe</p>
          <p>Get 10% off on first order.</p>
        </div>
        <div className='w-[34%] flex flex-col gap-3 items-center'>
          <p className='text-[20px] font-semibold'>Support</p>
          <p>Army Institute of Technology, pune</p>
          <p>LCM@gmail.com</p>
          <p>+8888-8888</p>
        </div>
        <div className='w-[34%] flex flex-col gap-3 items-center'>
          <p className='text-[20px] font-semibold'>Quick Links</p>
          <p>Contacts</p>
          <p>SignUp</p>
          <p>Products</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;