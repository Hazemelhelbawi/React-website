import React from 'react'
import './About.css'
export default function About() {
  return (
  <>
  <div className='aboutSection' style={{minHeight:'100vh'}}>
        <div className='text-center headerSection'>
        <h1 className='text-danger fw-bold '>About</h1>

             </div>
    <div className="container py-4">
      <div className="row text-white ">
        <div className="col-md-4 ms-auto text-start ">
          <p className='fs-5'>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
        </div>
        <div className="col-md-4 me-auto text-start ">
          <p className='fs-5'>
          You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>

      </div>
    </div>
    </div>
  </>
    )
}
