import {productData2} from "../../Data/Data-2"
import Data from "../../Data/Data-2"
import React from 'react'

export default function Product() {
    return (
        <>
        {
            productData2.map ((cart) => {
                return(
                    <div className="cart-main">
                    <div className='cart-container'>
                                
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

