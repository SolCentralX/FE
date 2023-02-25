import Right from '@/components /Navbar/Right'
import { Tabs } from '@/components /Navbar/Tabs'
import React from 'react'


const Navbar = () => {
  return (
    <div className='bg-black h-20 flex flex-row w-full items-center border-b justify-between'>
        <Tabs/>
        <Right/>
    </div>
  )
}

export default Navbar