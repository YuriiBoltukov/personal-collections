import { Role } from '../../../public/modules/user';
import { MenuItem } from '../menu/menu.interface.ts';
import { Location, NavLink } from 'react-router-dom';
import style from '../../../App.module.scss';

export const getRoutes = (role: Role | undefined) => {
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

export function getCurrentActiveRoute(
  location: Location,
  menuItems: MenuItem[],
) {
  const path = location.pathname;

  const currentRoute = menuItems.find((route: { key: string }) => {
    return route.key === path;
  });

  if (currentRoute) {
    return currentRoute.key;
  }

  return menuItems[0].key;
}

export function getMenu(role: Role) {
  return getRoutes(role).map(route => {
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
