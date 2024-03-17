import { Menu } from 'antd';
interface PropTypes {
  menuItems: {
    key: string;
    label: JSX.Element;
  }[];
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
