import React from 'react';
import FriendListView from '../views/FriendListView';
import FriendDetailsView from '../views/FriendDetailsView';

export default [
  {
    path: '/', // only for demo, default should be home
    element: <FriendListView />,
  },
  {
    path: '/friends',
    element: <FriendListView />,
  },
  {
    path: '/friends/:id',
    element: <FriendDetailsView />,
  },
];
