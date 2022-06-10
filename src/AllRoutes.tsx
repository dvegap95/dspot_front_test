// Component for merge all the routes of the project modules and map-them as props of a
// Route component to be handled by react-router

// todo prepare for nested routes

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import friendRoutes from './modules/friends/routes';

const routes = [...friendRoutes];

export default function AllRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={`route-${route.path}`} />
      ))}
    </Routes>
  );
}
