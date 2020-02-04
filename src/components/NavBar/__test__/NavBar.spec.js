import { render } from '@testing-library/react';
import NavBar from '..';

describe('NavBar', () => {
  it('should render the default markup', () => {
    const { getByTestId } = render(<NavBar />);

    const logoWrapper = getByTestId('Navbar-LogoWrapper');
    const linksWrapper = getByTestId('Navbar-LinksWrapper');

    expect(logoWrapper).toBeInTheDocument();
    expect(linksWrapper).toBeInTheDocument();
  });
});
