import { render } from '@testing-library/react';

import Logo from '..';

describe('Logo', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Logo />);

    const logo = getByTestId('Logo');

    expect(logo).toBeInTheDocument();
  });
});
