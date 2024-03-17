import AnchorLink from 'antd/es/anchor/AnchorLink';
import { Footer } from 'antd/lib/layout/layout';

export function FooterUI() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      ©{new Date().getFullYear()} Created by{' '}
      <AnchorLink
        href={'https://github.com/YuriiBoltukov'}
        title="YuriiBoltukov"
        target="blank"
      />
    </Footer>
  );
}
