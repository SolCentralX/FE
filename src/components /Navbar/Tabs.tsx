import { Tab } from '@headlessui/react'

import React from 'react'

export const Tabs = () => {
  return (
    <div className='flex flex-row space-x-10 h-1/2 items-center'>
        <button className=' rounded-lg text-white text-sm p-1 w-20'> 
            Dashboard
        </button>
        <button className='rounded-lg w-20 text-white text-sm p-2'> 
            Earn
        </button>
        <button className=' rounded-lg  w-20 text-white text-sm p-2'> 
            Create LP
        </button>
    </div>
)
}