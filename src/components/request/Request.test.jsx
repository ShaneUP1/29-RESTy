import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Request from './Request';


describe('Request component', () => {
  afterEach(() => cleanup());
  it('renders a list of histories', () => {
    const { asFragment } = render(<Request
      onSubmit={jest.fn()} handleChange={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
