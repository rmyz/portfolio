import { useInView } from 'react-intersection-observer';
import { Animate } from 'react-simple-animate';

import TwoColumns from '../shared/TwoColumns';
import { GithubIcon, LinkedinIcon, GmailIcon, VSCodeIcon } from '../shared/Icons';

import SocialLink from './SocialLink';
import { Wrapper, Title, SubTitle, IconWrapper, Image } from './styles';

const Presentation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const firstColumn = () => {
    return (
      <Animate
        play={inView}
        duration="0.25"
        delay="0.1"
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        complete={{ transition: 'all .25s linear 0s' }}
        render={({ style }) => <Image style={style} src="/me.png" alt="me" />}
      ></Animate>
    );
  };

  const renderIcons = () => (
    <Animate
      play={inView}
      duration="0.25"
      delay="0.7"
      start={{ opacity: 0 }}
      end={{ opacity: 1 }}
      complete={{ transition: 'all .25s linear 0s' }}
      render={({ style }) => (
        <IconWrapper style={style}>
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
      )}
    ></Animate>
  );

  const secondColumn = () => {
    return (
      <Wrapper ref={ref}>
        <Animate
          play={true}
          duration="0.25"
          delay="0.3"
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          complete={{ transition: 'all .25s linear 0s' }}
          render={({ style }) => <Title style={style}>Sergi Romeu</Title>}
        ></Animate>
        <Animate
          play={true}
          duration="0.25"
          delay="0.5"
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          complete={{ transition: 'all .25s linear 0s' }}
          render={({ style }) => <SubTitle style={style}>Fullstack Developer</SubTitle>}
        ></Animate>
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
