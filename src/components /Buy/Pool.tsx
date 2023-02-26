import React from 'react'
import PoolPrice from '../Pool/PoolPrice'
import PoolSupply from '../Pool/PoolSupply'
import PoolTitle from '../Pool/PoolTitle'

const Pool = () => {
  return (
    <div className='flex flex-col bg-[#17182c] w-1/2 p-3'>
        <PoolTitle/>
        <PoolPrice/>
        <PoolSupply/>
    </div>
  )
}

export default Pool