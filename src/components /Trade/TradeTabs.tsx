import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const TradeTabs = () => {
  return (
    <div className='flex flex-row text-white'>
        <button className='w-1/2 bg-[#2d2e3f] p-2 text-sm items-center flex flex-row justify-center space-x-3'>
          <TrendingUpIcon/>
          <div>Long</div>
        </button>
        <button className='w-1/2 bg-[#2d42fc] p-2 text-sm items-center flex flex-row justify-center space-x-3'>
          <TrendingDownIcon/>
          <div>Short</div>
        </button>
    </div>
  )
}

export default TradeTabs