
import { Layout } from 'antd';
import { NavbarComponent } from '../components/navbar/NavbarComponent';
import { SidebarComponent } from '../components/sidebar/SidebarComponent';
import { Welcome } from '../components/welcome/Welcome';

const { Header, Footer, Sider, Content } = Layout;

export const ShopPage = () => {
  return (
    <Layout>
        <div className="mobileHidden color-side">
          <Welcome />
          <Sider>
            <SidebarComponent />
          </Sider>
        </div>
      <Layout>
        <Header>
          <NavbarComponent />
        </Header>
          <Content><div className="header-img"></div></Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}
