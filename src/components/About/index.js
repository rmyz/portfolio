import TwoColumns from '../shared/TwoColumns';
import { AboutMeIcon, AboutMeTitleIcon } from '../shared/Icons';
import Title from '../shared/Title';

import aboutMe from './aboutData';
import { TextWrapper, Text, Wrapper } from './styles';

const About = () => {
  const renderTextNodes = () => {
    return aboutMe.map((text, key) => <Text key={key}>{text}</Text>);
  };

  const renderSecondColumn = () => {
    return (
      <Wrapper>
        <Title>
          <AboutMeTitleIcon /> ABOUT ME
        </Title>
        <TextWrapper>{renderTextNodes()}</TextWrapper>
      </Wrapper>
    );
  };

  const renderFirstColumn = () => {
    return <AboutMeIcon />;
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

export default About;
