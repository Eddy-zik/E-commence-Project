import React from 'react'
import konga from "./konga.webp"


export default function NavComp2() {
  return (
    <div>
    <div className='nav-main'>
    <a href='#' ><img src={konga} alt='konga' height={40} width={140} className='img8' /></a>
    <button className='tag1'> <p > Store <br></br> Locator </p></button> 
    <button className='tag2'> <p > Sell on <br></br> konga </p></button>
    
    <div className='input1'> <input type="text" name='' id='' placeholder='Search for product, brands and categories' className='input-bar'></input></div>
       <div><button className='search-bar' >Search</button>
       <button className='tag1'> <p > Help </p></button></div> 
    <button className='tag2'> <p > Login/ <br></br> Signup </p></button>
    <button className='tag3'> <p > My <br></br> Cart </p></button>
       </div>
        <div className='nav-sub'>
    <button className='btn-sub'> All Categories</button>
    <button className='btn-sub'> Computer and Accessories</button>
    <button className='btn-sub'> Phones and Tablets</button>
    <button className='btn-sub'> Electronics</button>
    <button className='btn-sub'> konga Fashion</button>
    <button className='btn-sub'> Home and kitchen</button>
    <button className='btn-sub'>Baby, Kids and Toys</button>
    <button className='btn-sub'> Other Categories</button>
        
    </div>
    </div>
  )
}
