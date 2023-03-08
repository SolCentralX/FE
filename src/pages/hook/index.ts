//@ts-nocheck
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, Provider, AnchorProvider, web3, utils } from '@project-serum/anchor';
import { PerpetualsClient } from '@/context/PerpProvider';
import { IDL } from '@/target/perpetuals';
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { useState } from 'react';

const network = 'https://api.devnet.solana.com'

const getProvider = (anchorWallet: any) => {
  const connection = new Connection(network);
  console.log(anchorWallet, 'anchorWallet-------->')
  let provider
  if(anchorWallet) {
      provider = new AnchorProvider(
          connection,
          anchorWallet,
          { preflightCommitment: "confirmed" },
      );
  }
  return provider;
}

export function useFetchData() {
  const anchorWallet = useAnchorWallet()
  const initData = {
      pools: [],
      position: null
  }
  const [data, setData] = useState(initData)
  const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt", anchorWallet)
  const provider = getProvider(anchorWallet)

  const fetchData = async () => {
      try {
          const pools = await client.getPools();
          console.log(pools, 'pools-------')
          const poolKey = await client.getPoolKey("SLP-Pool")
          console.log(poolKey, 'poolKey------->')
          // @ts-ignore
          const positions = await client.getUserPositions(provider.wallet.publicKey);
          console.log(positions, 'positions-------')
      } catch (error) {
          console.log('error: ', error)
      }
  }

  return {data, fetchData}
}

export function useOpenPosition() {
  const anchorWallet = useAnchorWallet()
  const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt", anchorWallet)
  client.openPosition()
}

export function useClosePosition() {
  const anchorWallet = useAnchorWallet()
  const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt", anchorWallet)
  client.closePosition()
}




