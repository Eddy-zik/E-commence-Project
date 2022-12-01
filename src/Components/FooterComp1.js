import React from 'react'
import email from "./Email1.svg"
import phone from "./phone1.svg"
import whatsapp from "./whatsapp3.svg"

export default function FooterComp1() {
  return (
    <div>
    <div className='footer-main' >
        <div>
            <img className='mat'src={email} alt='email' width={40} height={40} /></div>
          <div > <a href=''><h4>EMAIL SUPPORT</h4><p>help@konga.com</p></a></div>
        
        <div>
        <img className='mat'src={phone} alt='phone' width={40} height={40}/></div>
        <div ><a href=''><h4>PHONE SUPPORT</h4><p>0708 063 5700, 0809 460 5555</p></a></div>
        
        <div>
        <img  className='mat'src={whatsapp} alt='whatsapp' width={40} height={40}/></div>
        <div><a href=''><h4>WHATSAPP</h4><p>0907 0038 400, 0809 460 5555</p></a></div>
        
        <div>
            <a href=''><h4>GET LASTEST DEALS</h4>
            <p>For best promotion sent to your inbox</p></a>
        </div>
        <div className='input-bar2'>
        <input type="text" name='' id='' placeholder='Email Address' className='input-bar2'></input></div>
        <div><button className='search-bar2'> Subscribe </button></div>
    </div>
    </div>
  )
}
