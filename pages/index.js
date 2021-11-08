import Head from 'next/head';
import Image from 'next/image';

import { Grid } from '@chakra-ui/react';

import Header from '../components/header';
import Submit from '../components/submit';
import Footer from '../components/footer';
import Gallery from '../components/gallery';

export default function Home() {
  return (
    <Grid minHeight={'100vh'} templateRows={'10vh 10vh 1fr'}>
      <Head>
        <title>The Gnome Zone</title>
        <meta
          name="description"
          content="Buildspace Solana project site, showcasing the best gnome GIFs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Submit />

      <main>
        <Gallery />
      </main>

      <Footer />
    </Grid>
  );
}
