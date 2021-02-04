import React from 'react';
import Request from '../request/Request';
import Results from '../results/Results';
import SingleHistory from '../history/SingleHistory';

export default function App() {
  return (
    <>
      <SingleHistory url={'www.url.com'} method={'GET'}/>
    </>
  );
}
