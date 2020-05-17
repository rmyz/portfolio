import OneColumn from '../shared/OneColumn';
import Title from '../shared/Title';
import { SkillsIcon } from '../shared/Icons';

import skills from './skills';
import Skill from './Skill';
import { SkillsWrapper } from './styles';

const Skills = () => {
  const renderSkills = () => {
    return skills.map(({ title, desc, Icon }, key) => <Skill title={title} desc={desc} Icon={Icon} key={key} />);
  };

  return (
    <OneColumn>
      <Title>
        <SkillsIcon /> SKILLS
      </Title>
      <SkillsWrapper>{renderSkills()}</SkillsWrapper>
    </OneColumn>
  );
};

export default Skills;
