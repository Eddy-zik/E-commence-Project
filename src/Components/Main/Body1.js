import React from 'react'
import Nexus from "./NexusWebPremium.jpg.webp"
import Bar from "./Bar.jpg.jpg"
import Access from "./AccessBox.jpg.webp"
import Fcmb from "./FCMBbox.jpg.webp"
import Yakata from "./Special.jpg.jpg"
import Wallet from "./Wallet.jpg"
import Bag from "./Bag.jpg"
import Flight from "./Flight.jpg"
import Computer from "./Computer.jpg"
import Store from "./Store.jpg"
import Truck from "./Truck.jpg"


export default function Body1() {
    return (
        <>
            <div >
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
                        <div> <img src='Bag' width={20} height={20} /></div>
                        Brand Store </div>
                    <div className='div-block'>
                        <div> <img src='Flight' width={20} height={20} /></div>
                        Book Flights </div>

                </div>

            </div>

            <div className='div2'>
                <h1> Today's Deals     <span> <a href='#' className='div2-link'> See All Items</a></span> </h1>
            </div>

            <div className='div3'>




            </div>

            <div className='div4'>


            </div>

            <div className='div5'>

            </div>

            <div className='div6'>
                
                <div></div>
                <div></div>

            </div>

            <div className='div7'>

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

                <div className='div8'>

                    <div></div>
                    <div></div>

                </div>

                <div className='div9'>
                    <h2></h2>
                    <p></p>
                </div>

            </div>



        </>
    )
}
