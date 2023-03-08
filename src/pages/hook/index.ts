import { clusterApiUrl, Connection } from '@solana/web3.js';
import { PerpetualsClient } from '@/context/PerpProvider';
import { useState } from 'react';
import { AnchorProvider } from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';

// Set our network to devent.
const cluster = "devnet";
const network = clusterApiUrl(cluster);

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

// export const fetchPoolsData = async () => {
    // const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt")
    // const provider = getProvider()
    // console.log(client, 'provider-------')
    // // setInterval(async () => {
    //     try {
    //         // const pools = await client.getPools();
    //         // console.log(pools, 'pools-------')
    //         console.log(window.solflare, 'window.solflare---')
    //         console.log(provider?.wallet, 'provider.wallet.publicKey')
    //         const positions = await client.getUserPositions(provider.wallet.publicKey);
    //         console.log(positions, 'positions-------')
    //     } catch (error) {
    //         console.log('error: ', error)
    //     }
    // }, 1000)
// }

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
            // const pools = await client.getPools();
            // console.log(pools, 'pools-------')
            // const poolKey = await client.getPoolKey("SLP-Pool")
            // console.log(poolKey, 'poolKey------->')
            // @ts-ignore
            const positions = await client.getUserPositions(provider.wallet.publicKey);
            console.log(positions, 'positions-------')
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return {data, fetchData}
}

