import PropTypes from 'prop-types';

import { Wrapper, TextWrapper, Title, Desc, IconWrapper } from './styles';

const Skill = ({ title, desc, Icon }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Desc>({desc})</Desc>
      </TextWrapper>
    </Wrapper>
  );
};

Skill.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  Icon: PropTypes.func,
};

export default Skill;
