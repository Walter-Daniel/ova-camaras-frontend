import { LogoutOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Navigate } from "react-router-dom";
import { Anchor, Button, Drawer, Tooltip } from 'antd';
import { useState } from 'react';
const { Link } = Anchor;  
import img from '../../../assets/logo/logo.png'

export const NavbarComponent = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  

  const logout = () => {
    // <Navigate to="/auth/login" />
    console.log('Cerrar Sesión')
  }
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img src={img} alt="logo Walter Daniel Carrizo" />
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#about" title="Usuario" />
            <Link href="#education" title="Administrador" />
            <Tooltip title="Cerrar Sesión" color='red' key='red'>
              {/* <Button> */}
                <LogoutOutlined onClick={() => logout()}/>
              {/* </Button> */}
            </Tooltip>
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" className='btn-second' onClick={showDrawer}>
            <MenuUnfoldOutlined />
          </Button>
          <Drawer
            placement="right"
            title="Menú"
            onClose={onClose}
            open={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#about" title="Acerca de mí" />
              <Link href="#education" title="Estudios" />
              <Link href="#portfolio" title="Portfolio" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  )
}
