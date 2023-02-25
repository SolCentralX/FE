import Socials from '@/components /Footer/Socials'
import Title from '@/components /Footer/Title'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto h-40 bg-black border-t flex flex-col justify-center items-center text-white space-y-5'>
        <Title/>  
        <Socials/>
    </footer>

  )
}

export default Footer