import React from 'react';
import { render } from '@testing-library/react';
import Layout from '..';

describe('components/Layout', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Layout />);

    const layoutComponent = getByTestId('layoutWrapper');

    expect(layoutComponent).toBeInTheDocument();
  });
});
