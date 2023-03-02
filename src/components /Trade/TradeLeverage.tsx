import React from 'react'
import Slider from '@mui/material/Slider'

const TradeLeverage = () => {
  return (
    <div className='text-slate-400 flex flex-col space-y-2'>
        <div>Leverage Slider</div>
        <Slider
            aria-label="Small steps"
            defaultValue={0}
            step={1}
            marks
            min={0}
            max={10}
            valueLabelDisplay="auto"
        />
    </div>
  )
}

export default TradeLeverage