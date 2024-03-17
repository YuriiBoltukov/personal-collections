import { Header } from 'antd/es/layout/layout';
import { NavLink, useLocation } from 'react-router-dom';
import style from '../../../App.module.scss';
import { useEffect, useState } from 'react';
import { Role, User } from '../../../public/modules/user';
import { MenuComponent } from '../menu/Menu.component.tsx';

const ROUTES = (role: Role | undefined) => {
  return [
    {
      name: 'dashboard',
      path: '/',
      available: true,
    },
    {
      name: 'login',
      path: '/login',
      available: true,
    },
    {
      name: 'signup',
      path: '/signup',
      available: true,
    },
    {
      name: 'search result',
      path: '/searchResult',
      available: true,
    },
    {
      name: 'collections',
      path: '/collections',
      available: true,
    },
    {
      name: 'private office',
      path: '/private/privateOffice',
      available: role && [Role.user, Role.admin].includes(role),
    },
    {
      name: 'admin panel',
      path: '/private/admin',
      available: role === Role.admin,
    },
  ].filter(route => route.available);
};

export function HeaderComponent() {
  const location = useLocation();
  const [user, setUser]: [null | User, (value: User) => void] =
    useState<null | User>(null);
  let menuItems = getMenu();

  const defaultSelectedKeys: string[] = [getCurrentActiveRoute()];

  function getCurrentActiveRoute() {
    const path = location.pathname;

    const currentRoute = menuItems.find(route => {
      return route.key === path;
    });

    if (currentRoute) {
      return currentRoute.key;
    }

    return menuItems[0].key;
  }

  function getMenu() {
    return ROUTES(user?.role).map(route => {
      return {
        key: route.path,
        label: (
          <NavLink className={style.nav_link} to={route.path}>
            {route.name}
          </NavLink>
        ),
      };
    });
  }

  async function getUser() {
    try {
      const response = await fetch('http://localhost:1000/user/1');
      const user = await response.json();
      console.log(user);
      setUser(user);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    menuItems = getMenu();
  }, [user]);

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <MenuComponent
        menuItems={menuItems}
        defaultSelectedKeys={defaultSelectedKeys}
      />
    </Header>
  );
}
