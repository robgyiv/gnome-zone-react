import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';
import { Grid } from '@chakra-ui/react';

import Header from '../components/header';
import Submit from '../components/submit';
import Footer from '../components/footer';
import Gallery from '../components/gallery';

import idl from '../files/idl.json';
import kp from '../files/keypair.json';

// SystemProgram is a reference to the Solana runtime!
const { SystemProgram, Keypair } = web3;
const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const baseAccount = Keypair.fromSecretKey(secret);
const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl('devnet');
const opts = {
  preflightCommitment: 'processed',
};

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [gifList, setGifList] = useState([]);

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    if (walletAddress) {
      getGifList();
    }
  }, [walletAddress]);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          const response = await solana.connect({ onlyIfTrusted: true });
          const publicKey = response.publicKey.toString();
          setWalletAddress(publicKey);
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(connection, window.solana, opts.preflightCommitment);
    return provider;
  };

  const createGifAccount = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });
      await getGifList();
    } catch (e) {}
  };

  const upvoteGif = async (gifIndex) => {
    try {
      if (gifList.length > 0) {
        const provider = getProvider();
        const program = new Program(idl, programID, provider);
        await program.rpc.upvoteItem(gifIndex, {
          accounts: {
            baseAccount: baseAccount.publicKey,
          },
        });
        await getGifList();
      }
    } catch (e) {
      return;
    }
  };

  const createProgram = () => {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);
    return program;
  };

  const getGifList = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

      setGifList(account.gifList);
    } catch (e) {
      setGifList(null);
    }
  };

  return (
    <>
      <Head>
        <title>The Gnome Zone</title>
        <meta
          name="description"
          content="Buildspace Solana project site, showcasing the best gnome GIFs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        minHeight={'100vh'}
        templateRows={'10vh 10vh 1fr 15vh'}
        templateColumns={'1fr'}
        width={'100%'}
        gridAutoRows
      >
        <Header />
        <Submit
          isConnected={!!walletAddress}
          createGifAccount={createGifAccount}
          getProvider={getProvider}
          createProgram={createProgram}
          baseAccount={baseAccount}
          getGifList={getGifList}
          gifList={gifList}
          setWalletAddress={setWalletAddress}
        />

        <Gallery gifList={gifList} upvoteGif={upvoteGif} />

        <Footer />
      </Grid>
    </>
  );
}
