import React from 'react'

const TradeFees = () => {
  return (
    <div className='flex flex-row justify-between text-xs pl-1 pr-1'>
        <div className='flex flex-col text-slate-400 space-y-2'>
          <div>Collateral</div>
          <div>Leverage</div>
          <div>Entry Price</div>
          <div>Fees</div>
        </div>
        <div className='flex flex-col text-white space-y-2 items-end'>
          <div>--</div>
          <div>--</div>
          <div>18.69</div>
          {/* 18.69 */}
          <div>2.6%</div>
          {/* 2.6% */}
        </div>
    </div>
  )
}

export default TradeFees