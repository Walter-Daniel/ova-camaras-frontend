import { Layout } from 'antd';
import { NavbarComponent } from '../components/navbar/NavbarComponent';

const { Header, Footer, Sider, Content } = Layout;

export const ShopLayout = () => {
  return (
    <Layout>
      <Header>
        <NavbarComponent />
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content><div className="header-img"></div></Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
