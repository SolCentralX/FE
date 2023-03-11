
// import { getItem } from '@/hooks/localStorage'
import { getItem } from '@/hooks/localStorage'
import { useAtom } from 'jotai'
import React, { useCallback, useEffect, useMemo } from 'react'
// import { positionData } from '../Trade/TradePay'

const UserPositionCard = () => {
  // const list: any = useMemo(() => {
  //   return getItem('positionData')
  // }, []) || 
  const list = [{
    netValue: null,
    size: null,
    price: null,
    side: '--'
  }]
  
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