import { Tab } from '@headlessui/react'

import React from 'react'

export const Tabs = () => {
  return (
    <div className='flex flex-row space-x-5 h-1/2'>
        <button className='border-stone-300 border-2 rounded-lg text-white text-xs p-1 w-20'> 
            Dashboard
        </button>
        <button className='border-stone-300 border-2 rounded-lg w-20 text-white text-xs p-2'> 
            Earn
        </button>
        <button className='border-stone-300 border-2 rounded-lg  w-20 text-white text-xs p-2'> 
            Buy
        </button>
        <button className='border-stone-300 border-2 rounded-lg  w-20 text-white text-xs p-2'> 
            Referrals
        </button>
        <button className='border-stone-300 border-2 rounded-lg  w-20 text-white text-xs p-2'> 
            Ecosystem
        </button>
        <button className='border-stone-300 border-2 rounded-lg  w-20 text-white text-xs p-2'> 
            Docs
        </button>
    </div>
)
}