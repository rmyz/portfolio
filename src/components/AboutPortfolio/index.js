import { useInView } from 'react-intersection-observer';
import { Animate } from 'react-simple-animate';

import TwoColumns from '../shared/TwoColumns';
import { AboutPortfolioIcon, AboutPortfolioTitleIcon } from '../shared/Icons';
import Title from '../shared/Title';

import aboutPortfolioData from './aboutPortfolioData';
import { TextWrapper, Text, Wrapper } from './styles';

const AboutPortfolio = ({ ...rest }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const renderTextNodes = () => {
    return aboutPortfolioData.map((text, key) => <Text key={key}>{text}</Text>);
  };

  const renderSecondColumn = () => {
    return (
      <Wrapper ref={ref}>
        <Title id="aboutPortfolio">
          <AboutPortfolioTitleIcon /> ABOUT PORTFOLIO
        </Title>
        <Animate
          play={inView}
          duration="0.25"
          delay="0.3"
          start={{ transform: 'translateX(-1600px)' }}
          end={{ transform: 'translateX(0px)' }}
          complete={{ transition: 'all .25s linear 0s' }}
          render={({ style }) => <TextWrapper style={style}>{renderTextNodes()}</TextWrapper>}
        ></Animate>
      </Wrapper>
    );
  };

  const renderFirstColumn = () => {
    return (
      <Animate
        play={inView}
        duration="0.25"
        delay="0.3"
        start={{ transform: 'translateX(800px)' }}
        end={{ transform: 'translateX(0px)' }}
        complete={{ transition: 'all .25s linear 0s' }}
        render={({ style }) => <AboutPortfolioIcon style={style} />}
      ></Animate>
    );
  };

  return (
    <TwoColumns
      firstColumn={renderSecondColumn()}
      secondColumn={renderFirstColumn()}
      firstColumnWidth="60%"
      secondColumnWidth="40%"
      {...rest}
    />
  );
};

export default AboutPortfolio;
