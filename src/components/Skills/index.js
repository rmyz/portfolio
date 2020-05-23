import OneColumn from '../shared/OneColumn';
import Title from '../shared/Title';
import { SkillsIcon } from '../shared/Icons';

import skills from './skillsData';
import Skill from './Skill';
import { SkillsWrapper } from './styles';

const Skills = ({ ...rest }) => {
  const renderSkills = () => {
    return skills.map(({ title, desc, Icon }, key) => <Skill title={title} desc={desc} Icon={Icon} key={key} />);
  };

  return (
    <OneColumn {...rest}>
      <Title>
        <SkillsIcon /> SKILLS
      </Title>
      <SkillsWrapper>{renderSkills()}</SkillsWrapper>
    </OneColumn>
  );
};

export default Skills;
