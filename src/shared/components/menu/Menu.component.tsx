import { Menu } from 'antd';
import { MenuItem } from './menu.interface.ts';
interface PropTypes {
  menuItems: MenuItem[];
  defaultSelectedKeys: string[];
}
export function MenuComponent(props: PropTypes) {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={props.defaultSelectedKeys}
      items={props.menuItems}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
}
