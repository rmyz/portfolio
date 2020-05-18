import TwoColumns from '../shared/TwoColumns';
import { AboutPortfolioIcon, AboutPortfolioTitleIcon } from '../shared/Icons';
import Title from '../shared/Title';

import aboutPortfolioData from './aboutPortfolioData';
import { TextWrapper, Text, Wrapper } from './styles';

const AboutPortfolio = () => {
  const renderTextNodes = () => {
    return aboutPortfolioData.map((text, key) => <Text key={key}>{text}</Text>);
  };

  const renderSecondColumn = () => {
    return (
      <Wrapper>
        <Title>
          <AboutPortfolioTitleIcon /> ABOUT PORTFOLIO
        </Title>
        <TextWrapper>{renderTextNodes()}</TextWrapper>
      </Wrapper>
    );
  };

  const renderFirstColumn = () => {
    return <AboutPortfolioIcon />;
  };

  return (
    <TwoColumns
      firstColumn={renderSecondColumn()}
      secondColumn={renderFirstColumn()}
      firstColumnWidth="60%"
      secondColumnWidth="40%"
    ></TwoColumns>
  );
};

export default AboutPortfolio;
