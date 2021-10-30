import React, { ReactElement } from 'react';
import Base from './pages/Base';
import BaseItem from './pages/BaseItem';
import Login from './pages/Login';
import Contacts from './pages/Contacts';
import Profile from './components/Profile';

export enum Permissions {
  authorized = 'authorized',
  unauthorized = 'unauthorized',
  all = 'all',
}

export type PermissionsType = keyof typeof Permissions;

export type TypeRoute = {
  path: string;
  exact?: boolean;
  component: ReactElement;
  permissions?: PermissionsType;
  title?: string;
};

export const routes: TypeRoute[] = [
  {
    path: '/',
    exact: true,
    permissions: Permissions.all,
    title: 'Real estate database',
    component: <Base />,
  },
  { path: '/base/:id', permissions: Permissions.all, component: <BaseItem /> },
  { path: '/contacts', permissions: Permissions.all, title: 'Contacts', component: <Contacts /> },
  { path: '/login', permissions: Permissions.unauthorized, title: 'Login', component: <Login /> },
  {
    path: '/profile',
    permissions: Permissions.authorized,
    title: 'Profile',
    component: <Profile />,
  },
];
