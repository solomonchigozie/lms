import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower your future with the 
        courses designed to fit your choice <span className='text-blue-600'><img src={assets.sketch} alt="sketch"
        className='md:block hidden absolute -bottom-7 right-0' /></span> </h1>
    
      <p className='md:block hidden text-gray-500 max-w-2xl max-auto'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Vel facere eos explicabo. Nesciunt earum et asperiores nihil 
        dolorem velit? Hic earum voluptate perspiciatis 
        veritatis doloremque molestiae voluptates sint esse animi.
      </p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Recusandae eos beatae rerum dolor modi sint tempora. 
        Eligendi, porro aut impedit quibusdam, illo
        consequatur nemo amet harum explicabo fuga perferendis. Quod?
      </p>

      <SearchBar />

    </div>
  )
}

export default Hero
