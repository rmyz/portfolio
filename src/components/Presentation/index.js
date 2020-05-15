import React, { Fragment } from 'react';

import TwoColumns from '../TwoColumns';
import SocialLink from '../SocialLink';
import { GithubIcon, LinkedinIcon, GmailIcon, VSCodeIcon } from '../Icons';

import { Wrapper, Title, SubTitle, IconWrapper, Image } from './styles';

const Presentation = () => {
  const firstColumn = () => {
    return <Image src="/me.png" alt="me" />;
  };

  const renderIcons = () => (
    <IconWrapper>
      <SocialLink link="https://github.com/rmyz" color="white">
        <GithubIcon />
      </SocialLink>
      <SocialLink link="https://linkedin.com/rmyz" color="grey">
        <LinkedinIcon />
      </SocialLink>
      <SocialLink link="mailto:rmyzdev@gmail.com" color="grey">
        <GmailIcon />
      </SocialLink>
      <SocialLink link="https://howivscode.com/rmyz" color="grey">
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
    <Fragment>
      <TwoColumns
        id="presentation"
        firstColumnWidth="45%"
        secondColumnWidth="55%"
        firstColumn={firstColumn()}
        secondColumn={secondColumn()}
      />
    </Fragment>
  );
};

export default Presentation;
