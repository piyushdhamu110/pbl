import React from 'react';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact =() =>{
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[99vw] h-[14vh]'></div>
      <div className="w-[90vw] h-[80vh] flex justify-center p-3 bg-white rounded-2xl">
          <div className='w-[100%]  flex'>
                    <div className='w-[50%] p-3 flex flex-col items-center justify-center gap-3'>
                             <div className='w-[70%] p-3 flex flex-col gap-4'>
                                  <div className='flex items-center gap-5'>
                                  <IoIosCall className='text-5xl bg-black text-white p-2 rounded-[50%]' /> 
                                  <p>Call To Us</p>
                                  </div>
                                  <div className='flex flex-col gap-3'>
                                    <p>We are available 24/7, 7 days a week.</p>
                                    <p>Phone: +8801611112222</p>
                                  </div>
                             </div>
                            
                             <div className='w-[70%] p-3 flex flex-col gap-4'>
                             <div className='flex items-center gap-5'>
                                  <MdEmail className='text-5xl bg-black text-white p-2 rounded-[50%]' /> 
                                  <p>Write To Us</p>
                                  </div>
                                  <div className='flex flex-col gap-3'>
                                    <p>Fill out our form and we will contact you within 24 hours.</p>
                                    <p>Emails: support@exclusive.com</p>
                                  </div> 
                             </div>
                    </div>
                    <div className='w-[50%] p-3 flex items-center'>
                              <form action='' className='w-[100%] flex flex-col gap-5'>
                                        <div className='w-[100%] flex gap-2'>
                                                  <input type="text" name="name" placeholder='name' className='w-[100%] p-2 border-1 bg-gray-200 focus:outline-none rounded-md' />
                                                  <input type="text" name="email" placeholder='email' className='w-[100%] p-2 border-1 bg-gray-200 focus:outline-none rounded-md' />
                                                  <input type="text" name="number" placeholder='number' className='w-[100%] p-2 border-1 bg-gray-200 focus:outline-none rounded-md' />
                                        </div>
                                        <textarea name="" id="" cols="30" rows="10" className='bg-gray-200 rounded-md focus:outline-none p-2'></textarea>
                                        <button className='bg-black text-white p-2 rounded-2xl hover:bg-slate-700'>Submit</button>
                              </form>
                    </div>
          </div>
      </div>
    </div>
  )
}

export default Contact;