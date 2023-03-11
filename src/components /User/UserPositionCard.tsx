
// import { getItem } from '@/hooks/localStorage'
// import { getItem } from '@/hooks/localStorage'
// import { useAtom } from 'jotai'
import React, { useCallback, useEffect, useState } from 'react'
// import { positionData } from '../Trade/TradePay'

const UserPositionCard = () => {
  // @ts-ignore
  const [list, setList] = useState([{
    netValue: '--',
    size: null,
    price: null,
    side: null
  }])
  // const list: any = JSON.parse(localStorage.getItem('positionData')) || [{
  //   netValue: null,
  //   size: null,
  //   price: null,
  //   side: '--'
  // }]
  const getLocalPositionData = () => {
    // @ts-ignore
    // localStorage.setItem('positionData', JSON.stringify([{
    //   netValue: '--',
    //   size: null,
    //   price: null,
    //   side: null
    // }]))
    // console.log(localStorage.getItem('positionData'), '000000000')
    console.log(typeof localStorage.getItem('positionData'), 'ppppp')
    // @ts-ignore
    // setList(JSON.parse(localStorage.getItem('positionData')))
  }

  useEffect(() => {
    getLocalPositionData()
  }, [])
  
  
  return (
    <div className='flex flex-row text-white text-center justify-between leading-10'>
      {
        list.map((item: any, ind: number) => {
          return (
            <>
              <div className='leading-10'>{item.side}</div>
              <div>{item.netValue ? item.netValue : '--'}</div>
              <div>{item.size ? item.size : '--'}</div>
              <div>{item.price ? item.price : '--'}</div>
            </>
          )
        })
      }
    </div>
  )
}

export default UserPositionCard