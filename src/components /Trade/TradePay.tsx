import React, { useCallback, useState } from 'react'

const TradePay = (props: any) => {
  const [solAmount, setSolAmount] = useState(0)
  const [solPay, setSolPay] = useState(0)
  const oraclePrice = props.oraclePrice
  console.log(oraclePrice, 'oraclePrice--------')
  const solAmountChangeHandle = useCallback((e: any) => {
    // if (e.target.value) {
    setSolAmount(e.target.value)
    // setPay(e.target.value * Number(oraclePrice ? oraclePrice.toString() : 1))
    setSolPay(e.target.value * 2)
    // setSDXPay(e.target.value * 2)
    // setSDXAmount(e.target.value * 2)
    // }
  }, [])
  return (
    <>
      <div className='flex flex-row justify-between bg-[#2d2e3f] h-1/4 items-center rounded'>
        <div className='flex flex-col pl-3 pt-2 pb-2 space-y-4'>
          <div className='text-slate-500 text-xs'>Pay: ${solPay == 0 ? '0.00' : solPay}</div>
          <div className='text-white text-2xl'>
            <input className='w-full text-black' onChange={solAmountChangeHandle} type="text" value={solAmount} />
          </div>
        </div>
        <div className='flex flex-col pt-2 pb-2 pr-3 space-y-4 items-end'>
          <div className='text-slate-500 text-xs'>Balance: 14</div>
          <div className='text-white text-2xl'>SOL</div>
        </div>
      </div>
      <div className='flex flex-row justify-between bg-[#2d2e3f] h-1/4 items-center rounded'>
        <div className='flex flex-col pl-3 pt-2 pb-2 space-y-4'>
          <div className='text-slate-500 text-xs'>Pay: ${solPay == 0 ? '0.00' : solPay}</div>
          <div className='text-white text-2xl'>{solPay == 0 ? '0.00' : solPay}</div>
        </div>
        <div className='flex flex-col pt-2 pb-2 pr-3 space-y-4 items-end'>
          <div className='text-slate-500 text-xs'>Balance: 0.00</div>
          <div className='text-white text-2xl'>SDX</div>
        </div>
      </div>
    </>
  )
}

export default TradePay