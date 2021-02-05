import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';


describe('HistoryList component', () => {
  afterEach(() => cleanup());
  it('renders a list of histories', () => {
    const histories = [{ url: 'www.url.com', method: 'GET' }, { url: 'www.url.com', method: 'GET' }, { url: 'www.url.com', method: 'GET' }];
    const { asFragment } = render(<HistoryList
      histories={histories}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
