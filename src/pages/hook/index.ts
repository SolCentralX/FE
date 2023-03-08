//@ts-nocheck
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, Provider, AnchorProvider, web3, utils } from '@project-serum/anchor';
import { PerpetualsClient } from '@/context/PerpProvider';
import { IDL } from '@/target/perpetuals';

declare global {
    interface Window {
        solflare?: any
    }
}

// Set our network to devent.
const cluster = "devnet";
const network = clusterApiUrl(cluster);

// Control's how we want to acknowledge when a trasnaction is "done".
const opts = {
    preflightCommitment: "confirmed",
};


const getProvider = () => {
    const connection = new Connection(network);
    const provider = new AnchorProvider(
        connection,
        window.solflare,
        { preflightCommitment: "confirmed" },
    );
    return provider;
}

const findProgramAddress = (label: string, program, extraSeeds = null) => {
    let seeds = [Buffer.from(utils.bytes.utf8.encode(label))];
    if (extraSeeds) {
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

const getPerpetuals = async (program: any) => {
    const perpetuals = findProgramAddress("perpetuals", program);
    return program.account.perpetuals.fetch(perpetuals.publicKey);
  };

export const fetchPoolsData = async () => {
    const client = getProvider()
    // const client = new PerpetualsClient(network, "ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt")
    // console.log(client, 'provider-------')
    try {
        const provider = getProvider();
        const program = new Program(IDL, "2nv5ppjUhvze6m6RAZweUBVzt3KSbszsBuW1Yjh4kr8A", provider);
        let perpetuals = await getPerpetuals(program);
        const pools =  await program.account.pool.fetchMultiple(perpetuals.pools);
        return pools
    } catch (error) {
        console.log(error);
    }
}

export const openPosition = async (
  price: number,
  collateral: typeof BN,
  size: typeof BN,
  side: PositionSide,
  user,
  fundingAccount: PublicKey,
  positionAccount: PublicKey,
  custody
  ) => {
    try {
      const provider = getProvider()
      const program = new Program(IDL, "2nv5ppjUhvze6m6RAZweUBVzt3KSbszsBuW1Yjh4kr8A", provider)
      const perpetuals = await getPerpetuals(program)
      const openPosition = await program.methods
        .openPosition({
          price: new BN(price * 1000000),
          collateral,
          size,
          side: side === "long" ? { long: {} } : { short: {} },
        })
        .accounts({
          owner: user.wallet.publicKey,
          fundingAccount,
          transferAuthority: authority.publicKey,
          perpetuals: perpetuals,
          pool: pool.publicKey,
          position: positionAccount,
          custody: custody.custody,
          custodyOracleAccount: custody.oracleAccount,
          custodyTokenAccount: custody.tokenAccount,
          systemProgram: SystemProgram.programId,
          tokenProgram: spl.TOKEN_PROGRAM_ID,
        })
        .signers([user.wallet])
        .rpc()
      return openPosition
    } catch(error) {
      if (this.printErrors) {
        console.log(err);
      }
      throw err
    }

}

export const getPoolKey = async () => {
  const pools = findProgramAddress("pool", 'SLP-pool')
  return pools.publicKey
};

export const closePosition = async (
  price: number,
  user,
  receivingAccount,
  positionAccount,
  custody
  ) => {
    const provider = getProvider()
    const program = new Program(IDL, "2nv5ppjUhvze6m6RAZweUBVzt3KSbszsBuW1Yjh4kr8A", provider)
    try {
    const closePosition = await program.methods
        .closePosition({
          price: new BN(price),
        })
        .accounts({
          owner: user.wallet.publicKey,
          receivingAccount,
          transferAuthority: authority.publicKey,
          perpetuals: perpetuals.publicKey,
          pool: pool.publicKey,
          position: positionAccount,
          custody: custody.custody,
          custodyOracleAccount: custody.oracleAccount,
          custodyTokenAccount: custody.tokenAccount,
          tokenProgram: spl.TOKEN_PROGRAM_ID,
        })
        .signers([user.wallet])
        .rpc();
      return closePosition
    } catch (err) {
      if (this.printErrors) {
        console.log(err);
      }
      throw err;
    }
}



