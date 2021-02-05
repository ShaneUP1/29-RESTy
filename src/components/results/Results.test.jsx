import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Results from './Results';


describe('Results component', () => {
  afterEach(() => cleanup());
  it('renders results from api call', () => {
    const { asFragment } = render(<Results
      response={[{}]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
