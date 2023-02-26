import React from 'react'

const TradePay = () => {
  return (
    <div className='flex flex-row justify-between bg-[#2d2e3f] h-1/4'>
        <div className='flex flex-col pl-3 pt-2 space-y-2'>
            <div className='text-slate-500 text-xs'>Pay: $0.00</div>
            <div className='text-white text-xl'>0</div>
        </div>
        <div className='flex flex-col pt-2 pr-3 space-y-2 items-end'>
            <div className='text-slate-500 text-xs'>Balance: $0.00</div>
            <div className='text-white text-xl'>LINK</div>
        </div>
    </div>
  )
}

export default TradePay