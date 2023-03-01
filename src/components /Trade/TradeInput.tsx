import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const TradeInput = () => {
  const {connected, disconnect, publicKey} = useWallet()
  const { setVisible } = useWalletModal()

  const connectWallet = () => {
    setVisible(true);
  };
  return (
    <div className='bg-[#2d42fc] h-1/5 items-center flex flex-row justify-between cursor-pointer'>
      {!connected ? ( 
         <button>
            <AccountBalanceWalletIcon/>
           <WalletMultiButton/>
         </button>
      ): (
        <>
          <div></div>
          <input type="text" placeholder='Enter an amount' className='bg-[#2d42fc] text-center'/>
          <SendIcon className='pr-2 cursor-pointer'/>
        </>
        )
      }
       
    </div>
  )
}

export default TradeInput