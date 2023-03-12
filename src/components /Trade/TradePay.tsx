import { useWallet } from '@solana/wallet-adapter-react'
import SendIcon from '@mui/icons-material/Send';
import { useWalletModal, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React, { useCallback, useEffect, useState } from 'react'
import TradeFees from './TradeFees'
import TradeInput from './TradeInput'
import TradeLeverage from './TradeLeverage'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Alert, Snackbar } from '@mui/material';
import TradeTabs from './TradeTabs';
import { atom, useAtom } from 'jotai';
// import { getItem, setItem } from '@/hooks/localStorage';

interface PayProps {
  entryPriceandFee: {
    price: any;
    fee: any;
  },
  solBalance: any
}

const TradePay: React.FC<PayProps> = ({  solBalance }) => {
  const [solAmount, setSolAmount] = useState(0)
  const [solPay, setSolPay] = useState(0)
  const [_solBalance, setSolBalance] = useState(solBalance)

  useEffect(() => {
    setSolBalance(solBalance)
  }, [solBalance])
  // console.log(entryPriceandFee, solBalance, 'entryPriceandFee------>');
  // const { price } = entryPriceandFee
  // const [, setPositionData] = useAtom(positionData)
  // const oraclePrice = props.oraclePrice
  const [leverage, serLeverage] = useState(0)
  const [side, setSide] = useState('long')
  const getLeverage = useCallback((val: any) => {
    serLeverage(val)
  }, [])

  const getSide = useCallback((val: any) => {
    console.log(val, 'side-------')
    setSide(val)
  }, [])

  const solAmountChangeHandle = useCallback((e: any) => {
    // if (e.target.value) {
    setSolAmount(e.target.value)
    // setPay(e.target.value * Number(oraclePrice ? oraclePrice.toString() : 1))
    // (Math.floor(price * 0.000001 * 10000)/10000).toFixed(4)
    // const formatPrice = price * 0.000001
    const formatPay = leverage > 0 ? e.target.value * leverage : e.target.value
    // setSolPay(Number((Math.floor(formatPay * formatPrice * 10000) / 10000).toFixed(4)))
    // setSDXPay(e.target.value * 2)
    // setSDXAmount(e.target.value * 2)
    // }
  }, [leverage])

  useEffect(() => {
    // const formatPrice = price * 0.000001
    const formatPay = leverage > 0 ? solAmount * leverage : solAmount
    // setSolPay(Number((Math.floor(formatPay * formatPrice * 10000) / 10000).toFixed(4)))
  }, [leverage, solAmount])

  const { connected, disconnect, publicKey } = useWallet()
  const { setVisible } = useWalletModal()
  const isDisabled = !solAmount || _solBalance < solAmount
  const [open, setOpen] = useState(false)

  const connectWallet = () => {
    setVisible(true);
  };

  const getLocalPositionData = useCallback(() => {
    // @ts-ignore
    localStorage.setItem('positionData', JSON.stringify([{
      netValue: '--',
      size: null,
      price: null,
      side: null
    }]))
    console.log(localStorage.getItem('positionData'), '000000000')
    // @ts-ignore
    return JSON.parse(localStorage.getItem('positionData'))
  }, [])

  const clearData = () => {
    setSolAmount(0)
    setSolPay(0)
    setSolBalance(13)
  }

  const handlerOpen = useCallback(() => {
    setOpen(true)
    clearData()
    // const arr: any = getLocalPositionData()
    // // arr.push({
    // //   netValue: solAmount,
    // //   size: solAmount,
    // //   price: price,
    // //   side: side
    // // })
    // // console.log(arr, 'arr-----');
    // // localStorage.setItem('positionData', arr)
  }, [solAmount, side])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const formatButtonLabel = useCallback(() => {
    const formatSide = side === 'long' ? 'Long' : 'Shotrt'
    return !solAmount ? 'Enter an amount' : solBalance < solAmount ? 'Insufficient SOL Balance' : `${formatSide} SOL`
  }, [solAmount, solBalance, side])


  return (
    <>
      <TradeTabs seitchSide={getSide} />
      <div className='flex flex-col bg-[#17182c] p-3 space-y-5 justify-center rounded'>
        <div className='flex flex-row justify-between bg-[#2d2e3f] h-1/4 items-center rounded'>
          <div className='flex flex-col pl-3 pt-2 pb-2 space-y-4'>
            <div className='text-slate-500 text-xs'>Pay: ${solPay == 0 ? '0.00' : solPay}</div>
            <div className='text-white text-2xl'>
              <input className='w-full text-white bg-[#2d2e3f]' style={{ outline: 'none' }} onChange={solAmountChangeHandle} type="text" value={solAmount} />
            </div>
          </div>
          <div className='flex flex-col pt-2 pb-2 pr-3 space-y-4 items-end' style={{width: "88px"}}>
            <div className='text-slate-500 text-xs'>Balance: {_solBalance ? _solBalance : '--'}</div>
            <div className='text-white text-2xl'>SOL</div>
          </div>
        </div>
        <div className='flex flex-row justify-between bg-[#2d2e3f] h-1/4 items-center rounded'>
          <div className='flex flex-col pl-3 pt-2 pb-2 space-y-4'>
            <div className='text-slate-500 text-xs'>Long: ${solPay == 0 ? '0.00' : solPay}</div>
            <div className='text-white text-2xl'>{solPay == 0 ? '0.00' : solPay}</div>
          </div>
          <div className='flex flex-col pt-2 pb-2 pr-3 space-y-4 items-end'>
            <div className='text-slate-500 text-xs'>Leverage: {`${leverage}X`}</div>
            <div className='text-white text-2xl'>SDX</div>
          </div>
        </div>
        <TradeLeverage leverage={getLeverage} />
        {/* <TradeFees entryPriceandFee={entryPriceandFee} leverage={leverage} /> */}
        <TradeFees/>
        <div className='bg-[#2d42fc] h-1/5 items-center flex flex-row justify-between cursor-pointer rounded'>
          {!connected ? (
            <div className='w-full items-center flex flex-row justify-center space-x-2'>
              <AccountBalanceWalletIcon className='text-white' />
              <WalletMultiButton className='bg-none' />
            </div>
          ) : (
            <>
              <div className='flex justify-center w-full items-center'>
                <button onClick={handlerOpen} disabled={isDisabled} className={`text-white bg-[#2d42fc] text-center h-10 mr-4 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{formatButtonLabel()}</button>
                {/* <SendIcon className='pr-2 cursor-pointer' /> */}
              </div>
              {/* <input type="text" placeholder='Enter an amount' className='bg-[#2d42fc] text-center h-10'/> */}
            </>
          )
          }
          {/* {open && <Alert severity="success">Success!</Alert>} */}
          <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {side === 'long' ? 'Long' : 'Shotrt'} Success!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </>
  )
}

export default TradePay