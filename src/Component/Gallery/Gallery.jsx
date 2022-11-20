import axios from 'axios';
import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import './Gallery.css'
export default function Gallery() {
  let [ApiData,setApiData]=useState([]);
  let [Myimg,setmyimg]=useState('');

function getimg(product){

console.log(product.image);
setmyimg(product)
}


  async function getdata(){
    let{data}=await axios.get('https://fakestoreapi.com/products')
    setApiData(data)
    console.log(data);
  }

  
useEffect(()=> {
  getdata()
},[])


  return (
    <>
    <section style={{minHeight:'100vh'}}>
    <div className='gallerytitle'>
    <h1 className='text-center m-auto text-danger py-5 fw-bold'>GALLERY</h1>

    </div>
    <div className="container gallery ">
        <div className="row">
            {
            ApiData.map(( product , index )=>
              <div className="col-md-4 border border-1 border-info galleryitem">
                <div className=' text-center text-white gallerydata'>
             <div className='productinformation'>
             <span className='pt-5'>id({product.id})</span>
                <h5 className='text-info'><span className='fw-bolder  fs-4 text-bg-info'>Title</span> :{product.title}</h5>                         
                <h4 className='py-3 fs-4 fw-bold text-danger'><span className='fw-bolder fs-4 text-bg-danger'>Price</span>:{product.price}</h4>                         
                <p ><span className='fw-bolder fs-4'>Description</span> :{product.description}</p>  
             </div>
                <img onClick={(()=>getimg(product))} src={product.image} className="w-50 py-2 pointer-cursor" alt="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />                       



<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content text-center text-white bg-dark">
      <div className="modal-header">
        <h1 class="modal-title fs-5 text-danger text-center ms-auto" id="staticBackdropLabel">{Myimg.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body overflow-hidden">
      <img src={Myimg.image} className="w-50 py-2 " alt="" />  
      </div>
      <div className="modal-footer text-center m-auto">
      <p className='pb-3'>{Myimg.description}</p>                     

        <button type="button" className="btn btn-danger text-center m-auto" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

                </div>
            </div>

            )}
        </div>
      </div>
      </section>
    </>
  )
}
