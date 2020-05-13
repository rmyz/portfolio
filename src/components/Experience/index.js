import PropTypes from 'prop-types';

import TwoColumns from '../TwoColumns';
import { WorkIcon, EducationIcon } from '../Icons';
import Timeline from '../Timeline';
import Title from '../Title';

import { Wrapper } from './styles';

const Experience = ({ linkedinInfo }) => {
  const renderFirstColumn = () => {
    const { positions } = linkedinInfo;

    return (
      <Wrapper>
        <Title>
          <WorkIcon /> WORK
        </Title>
        <Timeline items={positions}></Timeline>
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
        <Timeline items={educations}></Timeline>
      </Wrapper>
    );
  };

  return <TwoColumns firstColumn={renderFirstColumn()} secondColumn={renderSecondColumn()} />;
};

Experience.propTypes = {
  linkedinInfo: PropTypes.object,
};

export default Experience;
