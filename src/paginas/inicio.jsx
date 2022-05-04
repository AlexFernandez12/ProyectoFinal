import React from 'react'
import {Link} from "react-router-dom"
import '../style/inicio.css'
import BootstrapCarouselComponent from '../components/carousel'

function inicio() {
  return (
    <div className='inicio'>
      <BootstrapCarouselComponent/>
    </div>
  )
}

export default inicio