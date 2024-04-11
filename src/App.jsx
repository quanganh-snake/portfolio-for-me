import React from 'react';
import BackToTop from './components/common/BackToTop';
import Header from './components/common/Header';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Home />
      </main>
      <BackToTop />
    </>
  );
};

export default App;
