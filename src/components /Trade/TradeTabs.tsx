import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tab, Tabs } from '@mui/material';

const TradeTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='flex flex-row text-white'>
      <button className='w-1/2 bg-[#2d42fc] p-2 text-sm items-center flex flex-row justify-center space-x-3 rounded-l'>
        <TrendingUpIcon/>
        <span>Long</span>
      </button>
      <button className='w-1/2 bg-[#2d2e3f] p-2 text-sm items-center flex flex-row justify-center space-x-3 rounded-r'>
        <TrendingDownIcon/>
        <span>Short</span>
      </button>
    </div>
  )
}

export default TradeTabs