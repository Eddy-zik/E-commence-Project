import {productData} from "../../Data/Data-1"
import Data from "../../Data/Data-2"
import React from 'react'

export default function Product() {
    return (
        <>
        {
            productData.map ((cart2) => {
                return(
                    <div className="cart2-main">
                    <div className='cart2-container'>
                                
                                    <img className='img-cart' src={cart.img_path} alt=''
                                     width={100} height={100}  />
                                
                                <h3 className='cart-text'>{cart.title}</h3>
                                <h2 className='cart-text'>{cart.amount}</h2>
                                    <p>{cart.desc}</p>
                            </div>
                            </div>
                )
            })

    
            }
        </>
    )
}