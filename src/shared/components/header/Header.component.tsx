import { Header } from 'antd/es/layout/layout';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Role } from '../../../public/modules/user';
import { MenuComponent } from '../menu/Menu.component.tsx';
import { getCurrentActiveRoute, getMenu } from './headerHelper.service.tsx';

export function HeaderComponent({ role }: { role: Role }) {
  const location = useLocation();
  let menuItems = getMenu(role);

  const defaultSelectedKeys: string[] = [
    getCurrentActiveRoute(location, menuItems),
  ];

  useEffect(() => {
    menuItems = getMenu(role);
  }, [role]);

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
