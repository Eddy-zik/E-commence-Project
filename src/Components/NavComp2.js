import React from 'react'
import Allcategories from './Allcategories'
import Babykidsandtoys from './Babykidsandtoys'
import Computerandaccessories from './Computerandaccessories'
import Electronics from './Electronics'
import Homeandkitchen from './Homeandkitchen'
import konga from "./konga.webp"
import Kongafashion from './Kongafashion'
import Othercatergories from './Othercatergories'
import Phonesandtablets from './Phonesandtablets'
import Help from './Help'
import Cart from "./Cart.jpg"


export default function NavComp2() {
  return (
    <div>
    <div className='nav-main'>
    <a href='#' ><img src={konga} alt='konga' height={40} width={140} className='img8' /></a>
    <button className='tag1'> <p > Store <br></br> Locator </p></button> 
    <button className='tag2'> <p > Sell on <br></br> konga </p></button>
    
    <div className='input1'> <input type="text" name='' id='' placeholder='Search for product, brands and categories' className='input-bar'></input></div>
       <div><button className='search-bar' >Search</button>
       <button className='tag1'> <p > <Help/> </p></button></div> 
    <button className='tag2'> <p > Login/ <br></br> Signup </p></button>
    <button className='tag3'> <p > My <br></br> Cart </p><img src={Cart} alt='konga' height={20} width={20} className='cart' /></button>
    
       </div>
        <div className='nav-sub'>
    
    <Allcategories/>
    <Computerandaccessories/>
    <Phonesandtablets/>
    <Electronics/>
    <Kongafashion/>
    <Homeandkitchen/>
    <Babykidsandtoys/>
    <Othercatergories/>
        
    </div>
    </div>
  )
}
