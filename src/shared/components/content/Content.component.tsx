import { Content } from 'antd/es/layout/layout';
import { User } from '../../../public/modules/user';
import { theme } from 'antd';
import { RoutingComponent } from '../routing/Routing.component.tsx';

export function ContentComponent({ user }: { user: User }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ padding: '0 16px' }}>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <RoutingComponent role={user.role} />
      </div>
    </Content>
  );
}
