//@ts-nocheck
import { clusterApiUrl } from '@solana/web3.js';
import { PerpetualsClient } from '@/context/PerpProvider';

// Set our network to devent.
const cluster = "devnet";
const network = clusterApiUrl(cluster);

export const fetchPoolsData = async () => {
    const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt")
    console.log(client, 'provider-------')
    try {
        const pools = await client.getPools();
        console.log(pools, 'pools-------')
        // const poolKey = await client.getPoolKey("SLP-Pool")
        // console.log(poolKey, 'poolKey------->')
    } catch (error) {
        console.log('error: ', error)
    }
}

