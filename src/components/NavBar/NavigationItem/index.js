import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import { Wrapper } from './styles';

const NavigationItem = ({ tooltipText, tooltipId, Icon, href }) => {
  const onHandleNavigate = () => {
    const element = document.getElementById(href);

    window.scrollTo({
      top: element.offsetTop - 60,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Wrapper data-tip data-for={tooltipId} href={href} onClick={onHandleNavigate}>
        <Icon />
      </Wrapper>
      <ReactTooltip id={tooltipId} effect="solid" place="right">
        <span>{tooltipText}</span>
      </ReactTooltip>
    </>
  );
};

NavigationItem.propTypes = {
  tooltipText: PropTypes.string,
  tooltipId: PropTypes.string,
  Icon: PropTypes.func,
  href: PropTypes.string,
};

export default NavigationItem;
