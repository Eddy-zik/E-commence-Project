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


export default function Body1() {
    return (
        <div className='konga'>
            <div>
                <div className='div1'>
                    <img src={Nexus} alt='' height={365} width={900} />
                </div>
                <div className='div1-1'>
                    <img src={Bar} alt='' height={180} width={200} />
                    <img src={Access} alt='' height={180} width={200} />

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
                <div>

                </div>

                <div>

                </div>

                <div>

                </div>


            </div>

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

                <div>
                    <h2></h2>
                    <p></p>
                    <a href='#'></a>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <a href='#'></a>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <a href='#'></a>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <a href='#'></a>
                </div>

                <div className='div7'>

                    <div>
                        <a href='www.konga.com/content/hpstore'><img src={Hp} width={210} height={130} /></a>
                        <a href='www.konga.com/content/itec'><img src={Itec} width={210} height={130} /></a>
                        <a href='www.konga.com/content/intel'><img src={Intel} width={210} height={130} /></a>
                        <a href='www.konga.com/content/barcardi'><img src={Braca} width={210} height={130} /></a>
                        <a href='www.konga.com/content/tecno'><img src={Tecno} width={210} height={130} /></a>
                        <a href='www.konga.com/content/unilever-online-store'><img src={Unilever} width={210} height={130} /></a>
                    </div>
                    <div>

                    <a href='www.konga.com/content/philips'><img src={Philip} width={210} height={130} /></a>
                        <a href='www.konga.com/content/coca-cola-nbc-store'><img src={Cocacola} width={210} height={130} /></a>
                        <a href='www.konga.com/content/samsung_store'><img src={Samsung} width={210} height={130} /></a>
                        <a href='#'><img src={Lenovo} width={210} height={130} /></a>
                        <a href='www.konga.com/content/vivo'><img src={Vivo} width={210} height={130} /></a>
                        <a href='www.konga.com/content/apc'><img src={Apc} width={210} height={130} /></a>

                    </div>

                </div>

                <div className='div8'>
                    <h2></h2>
                    <p></p>
                </div>

            </div>



        </div>
    )
}
