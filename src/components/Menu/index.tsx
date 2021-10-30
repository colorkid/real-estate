import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { routes, TypeRoute, Permissions } from '../../routes';
import { observer } from 'mobx-react-lite';
import Auth from '../../store/auth';

const MenuComponent = observer(() => {
  return (
    <Menu theme="dark" mode="horizontal">
      {routes.map((item: TypeRoute) => {
        if (item.title) {
          if (
            item.permissions === Permissions.all ||
            (!Auth.isFetching && Auth.isAuthed && item.permissions === Permissions.authorized) ||
            (!Auth.isFetching && !Auth.isAuthed && item.permissions === Permissions.unauthorized)
          )
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            );
        }
      })}
    </Menu>
  );
});

export default MenuComponent;
