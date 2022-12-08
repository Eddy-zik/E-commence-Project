import React from 'react'
import OIP1 from "./OIP_10.jfif"
import OIP2 from "./OIP_11.jfif"
import img1 from "./FACEBOOK.jpg"
import img2 from "./IG.jpg"
import img3 from "./TWITTER.jpg"

export default function FooterComp2() {
    return (
        <div className='footer-sub'>
            <div> <a href=''><h3>ABOUT KONGA</h3></a>
                <a href=''><p>Contact Us</p></a>
                <a href=''><p>About Us</p></a>
                <a href=''><p>Careers</p></a>
                <a href=''><p>Our Blog</p></a>
                <a href=''><p>Forum</p></a>
                <a href=''><p>Terms & Conditions</p></a> </div>

            <div> <a href=''><h3>PAYMENT</h3></a>
                <a href=''><p>KongaPay</p></a>
                <a href=''><p>Wallet</p></a>
                <a href=''><p>Verve</p></a>
                <a href=''><p>Mastercard</p></a>
                <a href=''><p>Visa</p></a>
            </div>

            <div> <a href=''><h3>BUYING ON KONGA</h3></a>
                <a href=''><p>Buyer Safety Centre</p></a>
                <a href=''><p>FAQs</p></a>
                <a href=''><p>Delivery</p></a>
                <a href=''><p>Konga Return Policy</p></a>
                <a href=''><p>Digital Services</p></a>
                <a href=''><p>Bulk Purchase</p></a> </div>

            <div> <a href=''><h3>MORE INFO</h3></a>
                <a href=''><p>Site Map</p></a>
                <a href=''><p>Track My Order</p></a>
                <a href=''><p>Privacy Policy</p></a>
                <a href=''><p>Authentic items Policy</p></a>
            </div>
            <div> <a href=''><h3>MAKE MONEY ON KONGA</h3></a>
                <a href=''><p>Become a konga Affiliate</p></a>
            </div>

            <div>
                <h3> DOWNLOAD & CONNECT WITH US </h3>
                <div className='footer-b'>
                    <a href=''> <div className='footer-box' > <img src={OIP1} alt='apple' className='footer-box' />
                    </div></a><p>Download on <br></br><b>App Store</b></p>
                    <a href=''><div className='footer-box'><img src={OIP2} alt='Android' className='footer-box' />
                    </div></a> <p>Download on <br></br><b>Google Play</b></p>

                </div>
                <p><b>CONNECT WITH US</b></p>
                <div className='footer-b'><img src={img1} alt='' />
                    <img src={img2} alt='' />
                    <img src={img3} alt='' /></div>
            </div>
        </div>
    )
}
