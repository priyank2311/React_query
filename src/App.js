import React, { useState } from 'react';
import Navbar from './componets/Navbar';
import Planet from './componets/Planet';
import People from './componets/People';
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  const [page, setPage] = useState('planet');

  return (
    <>
      <div className="App">
        <h1>Star War</h1>
        <Navbar setPage={setPage} />

        <div className="content">
          {page === 'planet' ? <Planet /> : <People />}
        </div>
      </div>
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </>
  );
}

export default App;
