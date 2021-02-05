import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
global.fetch = require('node-fetch');
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RESTy from './RESTy';

describe('RESTy container', () => {
  
  it('gets data via api url via GET route', () => {
    render(< RESTy />);
    
    const urlInput = screen.getByPlaceholderText('https://');
    fireEvent.change(urlInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts'
      }
    });

    return waitFor(() => {
      expect(screen.getByTestId('results')).not.toBeEmptyDOMElement();
    });
  });
});
