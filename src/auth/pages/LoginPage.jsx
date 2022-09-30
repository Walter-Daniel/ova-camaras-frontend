import { Button, Form, Input, Col, Row, Typography } from "antd";
import img from '../../assets/logo/LogoMakr-1pri3J.png'
import { createRef } from 'react';
import { Link } from "react-router-dom";
const { Text } = Typography;


export const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formReference = createRef();

  const deleteFormText = () => {
    formReference.current.resetFields();
  };

  return (
    <div className="hero-login">
      <div className="container-fluid">
        <Row justify="center" align="middle" className="container-auth">
          <Col xs={20} md={16} lg={10}>
            <div className="last-container">
              <div className="img-login">
                <img src={img} alt="logo ova" />
              </div>
              <h2>Iniciar sesión</h2>
              <Form
                name="basic"
                labelCol={{
                  span: 12,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                layout="vertical"
                ref={formReference}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Correo Electrónico"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Por favor ingrese su correo!",
                    },
                    {
                      min: 8,
                      max: 30,
                      message:
                        "El email debe tener entre ${min} y ${max} caracteres",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su contraseña!",
                    },
                    {
                      min: 6,
                      max: 12,
                      message:
                        "La contraseña debe tener entre ${min} y ${max} caracteres",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                // wrapperCol={{
                //   offset: 8,
                //   span: 16,
                // }}
                >
                  <Button
                    type="default"
                    htmlType="button"
                    onClick={deleteFormText}
                  >
                    Borrar
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-button-primary"
                  >
                    Enviar
                  </Button>
                </Form.Item>
              </Form>
              <Text>No tienes una cuenta?. Crea una nueva <Link to="/auth/register">aquí</Link>.</Text>
            </div>
          </Col>
        </Row>   
          <div className="dr">
          <Text keyboard>Copyrights © 2022 Walter Daniel Carrizo. Todos los derechos reservados.</Text>
        </div>
      </div>
    </div>
  );
};
