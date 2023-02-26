import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Right = () => {
  return (
    <div className='flex flex-row space-x-3'>
        <button className='border-neutral-600 border-2 rounded-lg text-white text-xs p-2 w-30'>
            <AccountBalanceWalletIcon/>
            Connect Wallet 
        </button>
    </div>
  )
}

export default Right