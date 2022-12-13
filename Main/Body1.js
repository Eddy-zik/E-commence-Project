import React from 'react'
import Nexus from "./NexusWebPremium.jpg.webp"
import Bar from "./Bar.jpg.jpg"
import Access from "./AccessBox.jpg.webp"
import Fcmb from "./FCMBbox.jpg.webp"
import Yakata from "./Special.jpg.jpg"
import Wallet from "./Wallet.jpg"
import Computer from "./Computer.jpg"
import Store from "./Store.jpg"
import Truck from "./Truck.jpg"
import Games from "./Games.jpg.webp"
import Groceries from "./Groceries.jpg.jpg"
import Laptop from "./Laptops.jpg.webp"
import Mobile from "./Mobile.jpg.webp"
import Smartphone from "./Smartphones.jpg.webp"
import Hb from "./Beauty.jpg.webp"
import Bag from "./Bag.jpg"
import Flight from "./Flight.jpg"
import Kpay from "./KPayNew.jpg"
import Drinks2 from "./Drinks2.jpg"
import Groceries2 from "./Groceries2.jpg"
import Hp from "./hp.png"
import Itec from "./itec.png"
import Intel from "./Intel.png"
import Braca from "./barcardi.png"
import Tecno from "./tecs.png"
import Unilever from "./uni.png"
import Philip from "./philip.png"
import Cocacola from "./Cocacola.png"
import Samsung from "./samsung.png"
import Lenovo from "./lenovo.png"
import Vivo from "./vivo.png"
import Apc from "./brands.png"
import HeroCarousel from '../Carousel'
import Product from './Product'
import NavComp1 from '../NavComp1'
import Tv from "../Main/tvs.jpg"
import Furniture from "./furniture.jpg"
import Fitness from "./fitness.jpg"
import Kid from "./kids.jpg"



export default function Body1() {
    return (
        <div className='konga'>
            <div className='konga'>

                <HeroCarousel/>              
                <div className='div1'>
                    <img src={Nexus} alt='' height={365} width={900} />
                </div>
                <div className='div1-1'>
                    <div>
                    <img src={Bar} alt='' height={180} width={200} />
                    <img src={Access} alt='' height={180} width={200} />
                    </div>
                    <div>
                        <img src={Fcmb} alt='' height={180} width={200} />
                        <img src={Yakata} alt='' height={180} width={200} />
                    </div>

                </div>

                <div className='div-block-sub'>

                    <div className='div-block'>
                        <div> <img src={Computer} width={15} height={15} /></div>
                        Konga Blog </div>
                    <div className='div-block'>
                        <div> <img src={Wallet} width={15} height={15} /></div>
                        Pay Bills </div>
                    <div className='div-block'>
                        <div> <img src={Truck} width={20} height={20} /></div>
                        Free Delivery </div>
                    <div className='div-block'>
                        <div><img src={Store} width={30} height={30} /></div>
                        Offline Store </div>
                    <div className='div-block'>
                        <div> <img src={Bag} width={15} height={15} /></div>
                        Brand Store </div>
                    <div className='div-block'>
                        <div> <img src={Flight} width={15} height={16} /></div>
                        Book Flights </div>

                </div>

            </div>
            <div className='div2-main'>
                <div className='div2'>
                    <h1> Today's Deals     <span> <a href='#' className='div2-link'> See All Items</a></span> </h1>
                </div>

            <Product />

            <div className='div3'>

                <img src={Laptop} width={200} height={180} />

                <img src={Smartphone} width={200} height={180} />

                <img src={Hb} width={200} height={180} />

                <img src={Groceries} width={200} height={180} />

                <img src={Games} width={200} height={180} />

                <img src={Mobile} width={200} height={180} />

            </div>

            <div className='div4'>

                <img src={Kpay} width={1310} height={90} />

            </div>

            <div className='div5'>

                <img src={Groceries2} width={620} height={180} />
                <img src={Drinks2} width={620} height={180} />

            </div>

            <div className='div6'>

                <div className='div6-sub'>
                    <img src={Furniture} alt='' width={250} height={200} className='img6' />
                    <h3>HOME FURNISHINGS</h3>
                    <p> Get Up To 70% off</p>
                    <a href='#'> SHOP NOW  </a>
                </div>
                <div className='div6-sub'>
                <img src={Fitness} alt='' width={250} height={200} className='img6'/>
                    <h3>FITNESS TOOLS & EQUIPMENT</h3>
                    <p>Get Fitness Equipment At Amazing Discounts!</p>
                    <a href='#'>SHOP NOW</a>
                </div>
                <div className='div6-sub' >
                    <img src={Kid} alt='' width={250} height={200} className='img6' />

                    <h3>KIOS WEARS & ACCESSORIES </h3>
                    <p>  All Kiddies Product At Huge Discounts!</p>
                    <a href='#'>SHOP NOW</a>
                </div>
                <div className='div6-sub'>
                <img src={Tv} alt='' width={250} height={200} className='img6' />
                    <h3>TOP DEALS ON TELEVISIONS</h3>
                    <p>Get the TV You Want With Bargain Deals! </p>
                    <a href='#'>SHOP NOW</a>
                </div>
</div>
                <div className='div7'>

                    <div className='div7sub'>
                        <a href='www.konga.com/content/hpstore' ><img src={Hp} width={216} height={110} className='div10' /></a>
                        <a href='www.konga.com/content/itec' ><img src={Itec} width={216} height={110} className='div10' /></a>
                        <a href='www.konga.com/content/intel' ><img src={Intel} width={216} height={110} className='div10' /></a>
                        <a href='www.konga.com/content/barcardi'><img src={Braca} width={216} height={110} className='div10' /></a>
                        <a href='www.konga.com/content/tecno' ><img src={Tecno} width={216} height={110} className='div10'/></a>
                        <a href='www.konga.com/content/unilever-online-store' ><img src={Unilever} width={220} height={110} className='div10'/></a>
                    </div>
                    <div className='div7sub'>

                    <a href='www.konga.com/content/philips'><img src={Philip} width={216} height={110} className='div10'/></a>
                        <a href='www.konga.com/content/coca-cola-nbc-store' ><img src={Cocacola} width={216} height={110} className='div10'/></a>
                        <a href='www.konga.com/content/samsung_store' ><img src={Samsung} width={216} height={110} className='div10'/></a>
                        <a href='#'><img src={Lenovo} width={216} height={110} className='div10'/></a>
                        <a href='www.konga.com/content/vivo' ><img src={Vivo} width={216} height={110} className='div10'/></a>
                        <a href='www.konga.com/content/apc' ><img src={Apc} width={216} height={110} className='div10'/></a>

                    </div>

                </div>

                <div className='div8'>
                    <h2>Konga Online Shopping in Nigeria - Best Shopping Site</h2>
                    <p>
                    Konga.com is Nigeria's number one online Shopping destination.We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else.<br></br> Our access to 
                     Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, <br></br> mobile phones, computers, fashion, 
                     beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories<br></br>  include Food and drinks, automotive and industrial, 
                     books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and<br></br>  memorable, there are also added services like gift vouchers, consumer 
                     promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping<br></br>  rates for certain products and with the bulk purchase option, you can enjoy low shipping 
                     rates, discounted prices and flexible payment. When you shop on our platform, you can pay <br></br>with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of 
                     lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.
                    </p>
                </div>

            </div>

        </div>


    )
}
