import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Animate } from 'react-simple-animate';

import { Wrapper, TextWrapper, Title, Desc, IconWrapper } from './styles';

const Skill = ({ title, desc, Icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Animate
      play={inView}
      duration="0.5"
      delay="0.3"
      start={{ opacity: 0 }}
      end={{ opacity: 1 }}
      complete={{ transition: 'all .5s linear 0s' }}
      render={({ style }) => (
        <Wrapper ref={ref} style={style}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Desc>({desc})</Desc>
          </TextWrapper>
        </Wrapper>
      )}
    ></Animate>
  );
};

Skill.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  Icon: PropTypes.func,
};

export default Skill;
