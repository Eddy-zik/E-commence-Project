import React from 'react'
import Babykidsandtoys from './Babykidsandtoys'
import Computerandaccessories from './Computerandaccessories'
import Electronics from './Electronics'
import Homeandkitchen from './Homeandkitchen'
import Kongafashion from './Kongafashion'
import Othercatergories from './Othercatergories'
import Phonesandtablets from './Phonesandtablets'

const Allcategories = () => {
  return (
    <>
    <div>
      <div className='myDiv'>
        All Categories
      </div>
      <div className='hide'>
        
        <div className='hide-div'><Computerandaccessories/></div>
        <div className='hide-div'><Phonesandtablets/></div>
        <div className='hide-div'><Electronics/></div>
        <div className='hide-div'><Kongafashion/></div>
        <div className='hide-div'><Homeandkitchen/></div>
        <div className='hide-div'><Babykidsandtoys/></div>
        <div className='hide-div'><Othercatergories/></div>
      
      </div>
      </div>
    </>
  )
}

export default Allcategories