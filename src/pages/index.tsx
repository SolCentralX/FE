import Head from 'next/head'
import Trade from '@/components /Buy/Trade'
import TradeMain from '@/components /Trade/TradeMain'
import { useEffect, useMemo, useState } from 'react'
import { useFetchData } from './hook'
import { useFetchProvider } from '@/hooks'
import { useAtom } from 'jotai'
// import { setItem } from '@/hooks/localStorage';

export default function Home() {
  const {provider} = useFetchProvider()
  // const [datas , setData] = useAtom(data)
  const [flag, setFlag] = useState(false)
  const {fetchData} = useFetchData()
  const [datas, setDatas] = useState({
    solBalance: null,
    entryPriceandFee: {
      price: null,
      fee: null
    }
  })
  // @ts-ignore
  // localStorage.setItem('positionData', [])
  // console.log(datas, 'datas-------->')
  // const [tradeData, setTradeData] = useState({
  //   pools: [],
  //   position: null,
  //   oraclePrice: null,
  //   solBalance: null,
  //   entryPriceandFee: {
  //     price: null,
  //     fee: null
  //   }
  // })

  // useEffect(() => {
  //   setTradeData(data)
  // }, [data])
  // useFetchData()
  const fetchDatas = async () => {
    const response: any = await fetchData();
    setDatas(response)
    console.log(response)
  }

  useEffect(() => {
    // console.log(provider, 'provider-------->');
    if (!provider) {
      return
    }
    fetchDatas();
  },[provider])

  return (
    <>
      <Head>
        <title>SolDecentral</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-row pl-10 h-5/6 w-full pt-12 justify-between pr-5 justify-center' style={{minWidth: '1200px'}}>
        <div className='flex flex-col w-2/3 h-full pl-5'>
          <div className='flex flex-col w-full bg-[#17182c] h-2/3 pl-5 pt-3 space-y-1 rounded'>
            <h2 className='text-white text-3xl'>SLP-Pool</h2>
            <p className='flex text-white mt-10 text-sm'>
              <span className='pr-2'>3XEbiB7vEPz4YF6nh4yqT73apV6DCCPnBGt6jh1EhnEb</span>
              <svg viewBox="0 0 36 36" width="20px" xmlns="http://www.w3.org/2000/svg" style={{cursor: 'pointer'}}>
                <path fill='#fff' d="M8.71446 10.4167H6.0835V27.75C6.0835 28.9417 7.0585 29.9167 8.25016 29.9167H25.5835V27.2855H8.71446V10.4167ZM27.7502 6.08337H12.5835C11.3918 6.08337 10.4168 7.05837 10.4168 8.25004V23.4167C10.4168 24.6084 11.3918 25.5834 12.5835 25.5834H27.7502C28.9418 25.5834 29.9168 24.6084 29.9168 23.4167V8.25004C29.9168 7.05837 28.9418 6.08337 27.7502 6.08337ZM27.2859 23.1069H13.3573L13.2026 8.71402H27.2859V23.1069Z" />
              </svg>
            </p>
            <h3 className='text-white text-xl mt-20' style={{marginTop: '10px'}}>
              <span>Balance: </span>
              <span>◎5.00189312</span>
            </h3>
            <div className="flex justify-between pr-10" style={{marginTop: '16px'}}>
              <dl className='w-1/2 h-32 bg-[#2d42fc] rounded mr-6 flex flex-col justify-center text-white px-4'>
                <dt className='text-xl mb-2'>Net Worth in USD</dt>
                <dd>$92.28</dd>
              </dl>
              <dl className='w-1/2 h-32 bg-[#2d42fc] rounded flex flex-col justify-center text-white px-4'>
                <dt className='text-xl mb-2'>Net Worth in SOL</dt>
                <dd>◎5.001893</dd>
              </dl>
            </div>
          </div>
          <TradeMain/>
        </div>
        <Trade datas={datas}/>
      </div>
    </>
  )
}


