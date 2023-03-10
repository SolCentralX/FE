// @ts-nocheck
import { clusterApiUrl, Connection, Keypair, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { PerpetualsClient } from '@/context/PerpProvider';
import { useState } from 'react';
import { AnchorProvider, BN, utils, Program } from '@project-serum/anchor';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { useFetchProvider } from '@/hooks';
import { IDL } from '@/target/perpetuals';
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID
} from "@solana/spl-token"

export function useFetchData() {
  const anchorWallet = useAnchorWallet()
  const { provider, network, findProgramAddress } = useFetchProvider()
  const initData = {
    pools: [],
    position: null,
    oraclePrice: null,
    entryPriceandFee: {
      price: null,
      fee: null
    }
  }
  const [data, setData] = useState(initData)
  // const program = new Program(IDL, "2nv5ppjUhvze6m6RAZweUBVzt3KSbszsBuW1Yjh4kr8A", provider)
  const {connection} = useConnection();
  const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt", anchorWallet)

  // const pool = findProgramAddress("pool", program, "test pool");

  // const generateCustody = (decimals: number) => {
  //   let mint = Keypair.generate();
  //   let tokenAccount = findProgramAddress("custody_token_account", program, [
  //     pool.publicKey,
  //     mint.publicKey,
  //   ]).publicKey;
  //   let oracleAccount = findProgramAddress("oracle_account", program, [
  //     pool.publicKey,
  //     mint.publicKey,
  //   ]).publicKey;
  //   let custody = findProgramAddress("custody", program, [
  //     pool.publicKey,
  //     mint.publicKey,
  //   ]).publicKey;
  //   return {
  //     mint,
  //     tokenAccount,
  //     oracleAccount,
  //     custody,
  //     decimals,
  //   };
  // };

  const toTokenAmount = (uiAmount: number, decimals: number) => {
    return new BN(uiAmount * 10 ** decimals);
  }

  // const custodies: any = []
  // custodies.push(generateCustody(9));
  // custodies.push(generateCustody(6));

  const fetchData = async () => {

    try {
      // const pools = await client.getPools();
      // console.log(pools, 'pools-------')
      // const poolKey = await client.getPoolKey("SLP-Pool")
      // console.log(poolKey, 'poolKey------->')
      if (provider) {
        // console.log(provider, 'provider balance------->')
        const pools: any = await client.getPools();
        console.log(pools[0].aumUsd.toString(), pools, 'pools-------')

        const fetchBalance = await connection.getBalance(provider?.wallet.publicKey)
        const solBalance = fetchBalance / LAMPORTS_PER_SOL

        console.log(solBalance, LAMPORTS_PER_SOL, 'connection----->')

        // const pool: any = await client.getPool("SLP-Pool");
        // console.log(pool, 'pool-------')
        // const aum: any = await client.getAum("SLP-Pool");
        // console.log(aum.toString(), 'aum-------')

        // @ts-ignore
        // const positions = await client.getUserPositions(provider.wallet.publicKey);
        // console.log(positions, 'positions-------')

        const entryPriceandFee = await client.getEntryPriceAndFee(
          "SLP-Pool",
          new PublicKey("So11111111111111111111111111111111111111112"),
          toTokenAmount(1, 6),
          toTokenAmount(1, 6),
          "long"
        );
        console.log(entryPriceandFee.price.toString() * 0.000001, entryPriceandFee.fee.toString() * 0.000001, 'entryPriceandFee-------')

        // console.log(provider.wallet.publicKey, 'provider.wallet.publicKey------>')
        // const pnl = await client.getPnl(
        //     // @ts-ignore
        //     provider.wallet.publicKey,
        //     "SLP-Pool",
        //     new PublicKey("So11111111111111111111111111111111111111112"),
        //     "long"
        // )
        // console.log(pnl, 'pnl-------')

        const oraclePrice = await client.getOraclePrice(
          "SLP-Pool",
          new PublicKey("So11111111111111111111111111111111111111112"),
          false
        )
        console.log(oraclePrice.toString(), 'oraclePrice------<')

        // const exitPriceAndFee = await client.getExitPriceAndFee(
        //   provider.wallet.publicKey,
        //   "SLP-Pool",
        //   new PublicKey("So11111111111111111111111111111111111111112"),
        //   "long"
        // )
        // console.log(exitPriceAndFee.toString(), 'exitPriceAndFee------<')

        // const positionKey = await client.getPositionKey(
        //   provider.wallet.publicKey,
        //   "SLP-Pool",
        //   new PublicKey("So11111111111111111111111111111111111111112"),
        //   "long"
        // )
        // console.log(positionKey, 'positionKey-------')

        // const custoday = await client.getCustody(
        //   "SLP-Pool",
        //   new PublicKey("So11111111111111111111111111111111111111112"),
        // )
        // const custodies: any = []
        // custodies.push(client.generateCustody(9))
        // const custoday = client.generateCustody(9, "SLP-Pool")
        // console.log(custoday, 'custoday-------')


        // const fundingAccount = await client.getFundingAccountKey(
        //   new PublicKey("So11111111111111111111111111111111111111112"),
        //   provider.wallet.publicKey,
        //   false,
        //   TOKEN_PROGRAM_ID,
        //   ASSOCIATED_TOKEN_PROGRAM_ID
        // )
        // console.log(fundingAccount, 'fundingAccount------>')

        // const users = await client.getUsers("SLP-Pool")
        // console.log(users, 'users------->')


        // client.openPosition(
        //   oraclePrice*0.000001,
        //   toTokenAmount(1, 6),
        //   toTokenAmount(1, 6),
        //   "long",
        //   users[0],
        //   fundingAccount,
        //   positionKey,
        //   custoday
        //   // custodies[0]
        // )

        // setData({pools: pools, position: null, oraclePrice: oraclePrice, entryPriceandFee: entryPriceandFee})
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }

  return { data, fetchData }
}

