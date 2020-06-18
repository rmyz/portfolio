import TwoColumns from '../shared/TwoColumns';
import { GithubIcon, LinkedinIcon, GmailIcon, VSCodeIcon } from '../shared/Icons';

import SocialLink from './SocialLink';
import { Wrapper, Title, SubTitle, IconWrapper, Image } from './styles';

const Presentation = () => {
  const firstColumn = () => {
    return <Image src="/me.png" alt="me" />;
  };

  const renderIcons = () => (
    <IconWrapper>
      <SocialLink link="https://github.com/rmyz" color="hsla(0,0%,50.2%,0.2)">
        <GithubIcon />
      </SocialLink>
      <SocialLink link="https://linkedin.com/rmyz" color="hsla(0,0%,50.2%,0.2)">
        <LinkedinIcon />
      </SocialLink>
      <SocialLink link="mailto:rmyzdev@gmail.com" color="hsla(0,0%,50.2%,0.2)">
        <GmailIcon />
      </SocialLink>
      <SocialLink link="https://howivscode.com/rmyz" color="hsla(0,0%,50.2%,0.2)">
        <VSCodeIcon />
      </SocialLink>
    </IconWrapper>
  );

  const secondColumn = () => {
    return (
      <Wrapper>
        <Title>Sergi Romeu</Title>
        <SubTitle>Fullstack Developer</SubTitle>
        {renderIcons()}
      </Wrapper>
    );
  };

  return (
    <TwoColumns
      isMainPage={true}
      firstColumnWidth="40%"
      secondColumnWidth="60%"
      firstColumn={firstColumn()}
      secondColumn={secondColumn()}
    />
  );
};

export default Presentation;
