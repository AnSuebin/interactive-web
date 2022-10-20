import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Home;
