import React from 'react'

const TradeFees = (props: any) => {
  console.log(props, 'props------->')
  return (
    <div className='flex flex-row justify-between text-xs pl-1 pr-1'>
        <div className='flex flex-col text-slate-400 space-y-2'>
          {/* <div>Collateral</div> */}
          <div>Leverage</div>
          <div>Entry Price</div>
          <div>Fees</div>
        </div>
        <div className='flex flex-col text-white space-y-2 items-end'>
          <div>--</div>
          <div>--</div>
          <div>{props.entryPriceandFee.price ? props.entryPriceandFee.price : '--'}</div>
          {/* 18.69 */}
          <div>{props.entryPriceandFee.fee ? props.entryPriceandFee.fee : '--'}</div>
          {/* 2.6% */}
        </div>
    </div>
  )
}

export default TradeFees