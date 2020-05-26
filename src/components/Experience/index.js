import PropTypes from 'prop-types';

import TwoColumns from '../shared/TwoColumns';
import { WorkIcon, EducationIcon } from '../shared/Icons';
import Title from '../shared/Title';

import Timeline from './Timeline';
import { Wrapper } from './styles';

const Experience = ({ linkedinInfo, ...rest }) => {
  const renderFirstColumn = () => {
    const { positions } = linkedinInfo;

    return (
      <Wrapper>
        <Title>
          <WorkIcon /> WORK
        </Title>
        <Timeline items={positions} type="WORK" />
      </Wrapper>
    );
  };
  const renderSecondColumn = () => {
    const { educations } = linkedinInfo;

    return (
      <Wrapper>
        <Title>
          <EducationIcon /> EDUCATION
        </Title>
        <Timeline items={educations} type="EDUCATION" />
      </Wrapper>
    );
  };

  return <TwoColumns firstColumn={renderFirstColumn()} secondColumn={renderSecondColumn()} {...rest} />;
};

Experience.propTypes = {
  linkedinInfo: PropTypes.object,
};

export default Experience;
