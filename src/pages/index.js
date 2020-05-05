import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import { getGithubInfo, getLinkedinInfo } from '../services/backendService';

export async function getServerSideProps() {
  const linkedinInfo = await getLinkedinInfo();
  const githubInfo = await getGithubInfo();

  return { props: { linkedinInfo, githubInfo } };
}

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>Sergi Romeu&apos;s Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Layout {...props} />
    </Fragment>
  );
};

export default HomePage;
