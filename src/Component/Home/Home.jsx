import React from 'react'
import ParticlesBackground from '../Particles/ParticlesBackground'
import Typewriter from 'typewriter-effect'
import './Home.css'
export default function Home() {
  return (
    <>

    <div className='homePage '>
    <ParticlesBackground/>

      <div className=' d-flex  justify-content-center align-item-center m-auto text-center'>
        <div className='Hometitle'>
          <div className='text-center text-white homeInfo '>
          <h1 className='text-danger pb-5'>
            <Typewriter
            options={{
                autoStart:true,
                loop:true,
                delay:100,
                strings:["Welcom to website"]


            }}  
            
            
            />

          </h1>
          <h4 className='d-inline pt-3'>Lorem, ipsum. - <h4 className='text-info d-inline'>New Collections</h4> - Our Products</h4>

          </div>

        </div>
      </div>
    </div>

 
   

    </>    
    )
}
