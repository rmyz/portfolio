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
        <meta name="screen-orientation" content="portrait"></meta>
        <link href="/manifest.json" rel="manifest"></link>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
        <meta name="description" content="Sergi Romeu's Portfolio website project"></meta>
        <meta name="keywords" content="rmyz, rmyz.dev, Sergi Romeu, Romeu"></meta>
        <meta name="theme-color" content="#212020" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
      <Layout {...props} />
    </Fragment>
  );
};

export default HomePage;
