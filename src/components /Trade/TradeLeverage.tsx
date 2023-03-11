import React, { useCallback, useState } from 'react'
import Slider from '@mui/material/Slider'

interface props {
  leverage: any
}

const TradeLeverage = ({leverage}: props) => {
  const marks = [
    {
      value: 0,
      label: 0
    },
    {
      value: 1,
      label: 1
    },
    {
      value: 2,
      label: 2
    },
    {
      value: 3,
      label: 3
    },
    {
      value: 4,
      label: 4
    },
    {
      value: 5,
      label: 5
    },
    {
      value: 6,
      label: 6
    },
    {
      value: 7,
      label: 7
    },
    {
      value: 8,
      label: 8
    },
    {
      value: 9,
      label: 9
    },
    {
      value: 10,
      label: 10
    },
  ]
  // const [slider, setSlider] = useState(0)
  const sliderChange = useCallback((val: any) => {
    leverage(val.target.value)
  }, [])


  return (
    <div className='text-slate-400 flex flex-col space-y-2'>
        <div>Leverage Slider</div>
        <Slider
            aria-label="Small steps"
            defaultValue={0}
            step={1}
            min={0}
            max={10}
            // marks={marks}
            marks
            valueLabelDisplay="auto"
            onChange={sliderChange}
        />
    </div>
  )
}

export default TradeLeverage