import React from 'react'
import TradeFees from '../Trade/TradeFees'
import TradeInput from '../Trade/TradeInput'
import TradePay from '../Trade/TradePay'
import TradeRecieve from '../Trade/TradeRecieve'
import TradeTabs from '../Trade/TradeTabs'

const Trade = () => {
  return (
    <div className='flex flex-col bg-[#17182c] w-1/4 p-3 space-y-3 h-3/4 justify-center'>
        <TradeTabs/>
        <TradePay/>
        <TradeRecieve/>
        <TradeFees/>
        <TradeInput/>
    </div>
  )
}

export default Trade