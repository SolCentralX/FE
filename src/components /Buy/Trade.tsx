import React from 'react'
import TradeFees from '../Trade/TradeFees'
import TradeInput from '../Trade/TradeInput'
import TradeLeverage from '../Trade/TradeLeverage'
import TradePay from '../Trade/TradePay'
import TradeRecieve from '../Trade/TradeRecieve'
import TradeTabs from '../Trade/TradeTabs'

const Trade = () => {
  return (
    <div className='flex flex-col bg-[#17182c] w-1/4 p-3 space-y-3 h-4/5 justify-center'>
        <TradeTabs/>
        <TradePay/>
        <TradeRecieve/>
        <TradeLeverage/>
        <TradeFees/>
        <TradeInput/>
    </div>
  )
}

export default Trade