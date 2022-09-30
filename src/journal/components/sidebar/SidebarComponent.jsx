import { CameraOutlined, SnippetsOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import { NavLink } from "react-router-dom";


export const SidebarComponent = () => {

    const linkAdmin = [
        {
          title: 'Usuarios',
          path: 'users',
          protected: true,
          icon: <UserOutlined />
        },
        {
          title: 'Productos',
          path: 'products',
          protected: true,
          icon: <CameraOutlined />
    
        },
        {
          title: 'Ordenes',
          path: 'orders',
          protected: true,
          icon: <SnippetsOutlined />
        }
      ];

  return (
    <List
        itemLayout="horizontal"
        dataSource={ linkAdmin }
        renderItem={item => (
            // item.protected && !currentUser ? '' : 

            <NavLink to={item.path ?? '/'}
                    className={({ isActive }) => isActive ? 'navLink-active' : ''}>
                <List.Item>
                    <List.Item.Meta
                    avatar={item.icon}
                    title={item.title}
                    />
                </List.Item>
          </NavLink>
        )}>

{/* Ova cámaras es una pagina e-comerce donde podras comprar productos (cámaras) , tiene su carrito de compras y una sección de administración a donde podras crear, editar y borrar productos y usuarios , podras ver las ordenes, sus montos y también podras darlas de alta. */}
    </List>
  )
}
