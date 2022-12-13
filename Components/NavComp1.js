import React from 'react'
// import { Link } from 'react-router-dom'
import travel from "./k_travels2.webp"
import nexus from "./NEXUSweb.jpg_r127hkfvs.webp"

import kongafood from "./kongafood.webp"
import kongapay from "./konga_pay.webp"
import drinks from "./konga_health.webp"
import KongaHelth from "./new_konga_drinks.webp"
import logistics from "./k_express2.webp"
import groceries from "./new_konga_groceries.webp"



export default function NavComp1() {
  return (
    <div>
       <a href='#' ><img src={nexus} alt='nexus' height={75} width="100%" /></a>
 
   <div className='nav-container'>
    <a href='#' ><img src={travel} alt='' height={15} width={90} className='img1'/></a>

   <a href='#' ><img src={kongafood} alt='' height={18} width={90} className = 'img2'/></a>
   <a href='#' ><img src={kongapay} alt='' height={18} width={90} className = 'img3'  /></a>
   <a href='#' ><img src={drinks} alt='' height={18} width={90} className = 'img4' /></a>
   <a href='#' ><img src={KongaHelth} alt='' height={18} width={90} className = 'img5'  /></a>
   <a href='#' ><img src={logistics} alt='' height={18} width={90} className = 'img6' /></a>
   <a href='#' ><img src={groceries} alt='' height={18} width={90} className = 'img7' /></a>
   </div>
   </div>
  )
}
