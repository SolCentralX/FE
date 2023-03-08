import React from 'react'
import TradeFees from '../Trade/TradeFees'
import TradeInput from '../Trade/TradeInput'
import TradeLeverage from '../Trade/TradeLeverage'
import TradePay from '../Trade/TradePay'
import TradeRecieve from '../Trade/TradeRecieve'
import TradeTabs from '../Trade/TradeTabs'

const Trade = () => {
  return (
    <div className='flex flex-col w-1/4 h-4/5 space-y-2 pr-10'>
    <TradeTabs/>
    <div className='flex flex-col bg-[#17182c] p-3 space-y-5 justify-center rounded'>
        <TradePay/>
        <TradeRecieve/>
        <TradeLeverage/>
        <TradeFees/>  
    </div>
    <TradeInput/>
    </div>
  )
}

export default Trade