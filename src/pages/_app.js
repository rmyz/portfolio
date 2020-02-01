import PropTypes from 'prop-types';
import GlobalStyles from '../styles/globalStyles';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
