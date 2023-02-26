import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const TradeInput = () => {
  return (
    <div className='bg-[#2d42fc] h-1/5 items-center flex justify-between '>
        <div></div>
        <input type="text" placeholder='Enter an amount' className='bg-[#2d42fc] text-center'/>
        <SendIcon className='pr-2 cursor-pointer'/>
    </div>
  )
}

export default TradeInput