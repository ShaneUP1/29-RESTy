import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SingleHistory from './SingleHistory';


describe('SinlgeHistory component', () => {
  afterEach(() => cleanup());
  it('renders a list of histories', () => {
    const { asFragment } = render(<SingleHistory
      url={"www.url.com"} method={"GET"}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
