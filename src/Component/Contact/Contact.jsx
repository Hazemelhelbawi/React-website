import React from 'react'
import './Contact.css'
export default function Contact() {
    return ( <>
        <section id='contact'>
        <div className=' py-5 text-center'>
          <div className=' contact-info py-4'>
      
          <h1 className='fw-bold text-danger'>CONTACT ME</h1>
      
                <div className='d-flex justify-content-center'>
                <div className='brdr'></div>
              <i className="iconsLine fa-solid fa-star fs-3  "></i>
              <div className='brdr'></div>
      
                </div>
          </div>
        <div className='mb-3'>
        <input type="text" class="form-control w-75 m-auto border-bottom mb-2 pb-4 border border-0 rounded-0 fs-4" placeholder="Name" />
        <input type="email" class="form-control w-75 m-auto border-bottom mb-2 pb-4  border border-0 rounded-0 fs-4" placeholder="Email Address" />
        <input type="Number" class="form-control w-75 m-auto border-bottom mb-2 pb-4 border border-0 rounded-0 fs-4" placeholder="Phone Number" />
       <textarea type="text" class="form-control w-75 m-auto mb-6 border border-0 rounded-0 fs-4" placeholder="Message" />
      
        </div>
        <button type="button" class="btn btn-outline-danger py-3 px-5 fw-bold  ">Send</button>
      
      
      
      
      
        </div>
      
      
            </section>
            </>
          )
      }
      