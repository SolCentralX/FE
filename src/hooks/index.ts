import { AnchorProvider, Program, utils } from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
// import { IDL } from '@/target/perpetuals';

export function useFetchProvider() {
    // Set our network to devent.
    const cluster = "devnet";
    const network = clusterApiUrl(cluster);

    const getProvider = (anchorWallet: any) => {
        const connection = new Connection(network);
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
    const anchorWallet = useAnchorWallet()
    const provider = getProvider(anchorWallet)
    // const program = new Program(IDL, "2nv5ppjUhvze6m6RAZweUBVzt3KSbszsBuW1Yjh4kr8A", provider)

    const findProgramAddress = (label: string, program: any, extraSeeds = null) => {
        let seeds = [Buffer.from(utils.bytes.utf8.encode(label))];
        if (extraSeeds) {
            // @ts-ignore
          for (let extraSeed of extraSeeds) {
            if (typeof extraSeed === "string") {
              seeds.push(Buffer.from(utils.bytes.utf8.encode(extraSeed)));
            } else if (Array.isArray(extraSeed)) {
              seeds.push(Buffer.from(extraSeed));
            } else {
              seeds.push(extraSeed.toBuffer());
            }
          }
        }
        let res = PublicKey.findProgramAddressSync(seeds, program.programId);
        return { publicKey: res[0], bump: res[1] };
      };

       const connection = new Connection(clusterApiUrl('devnet'))
        // console.log("position----->", position)
        // setData({pools: pools, position: null, entryPriceandFee: entryPriceandFee})
        const userATA = await client.createFundingAccount(connection)
        console.log('Funding account----', userATA)


    return {
        provider,
        // program,
        network,
        findProgramAddress
    }
}
