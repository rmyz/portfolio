import Layout from '../components/Layout';
import { getGithubInfo, getLinkedinInfo } from '../services/backendService';

export async function getServerSideProps() {
  const linkedinInfo = await getLinkedinInfo();
  const githubInfo = await getGithubInfo();

  return { props: { linkedinInfo, githubInfo } };
}

const HomePage = props => {
  return <Layout {...props} />;
};

export default HomePage;
