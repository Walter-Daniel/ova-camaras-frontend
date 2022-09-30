import { Button, Form, Input, Col, Row, Typography } from "antd";
import img from "../../assets/logo/LogoMakr-1pri3J.png";
import { createRef } from "react";
import { Link } from "react-router-dom";
const { Text } = Typography;

export const RegisterPage = () => {
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
    <div className="hero-register">
      <div className="container-fluid">
        <Row justify="center" align="middle" className="container-auth">
          <Col xs={20} md={16} lg={10}>
            <div className="last-container">
              <div className="img-login">
                <img src={img} alt="logo ova" />
              </div>
              <h2>Registrarse</h2>
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
                  name="fullName"
                  label="Nombre completo:"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su nombre completo!",
                      whitespace: true,
                    },
                    {
                      min: 9,
                      max: 30,
                      message: "Debe ingresar entre 6 y 30 carácteres",
                    },
                  ]}
                >
                  <Input placeholder="María Ramos" type="text" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Correo electrónico:"
                  rules={[
                    {
                      type: "email",
                      message: "El correo no es valido!",
                    },
                    {
                      required: true,
                      message: "Por favor introduce tu correo",
                    },
                    {
                      min: 8,
                      max: 30,
                      message:
                        "El email debe tener entre ${min} y ${max} caracteres",
                    },
                  ]}
                >
                  <Input placeholder="maria@email.com" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Contraseña:"
                  rules={[
                    {
                      required: true,
                      min: 6,
                      max: 12,
                      message:
                        "Tu contraseña debe terner entre ${min} y ${max} caracteres!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password minLength={6} />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  label="Confirmar contraseña:"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Por favor confirma tu contraseña",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error("Las contraseñas no coinciden")
                        );
                      },
                    }),
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
              <Text>
                 Ya tienes una cuenta?. Inicia sesión <Link to="/auth/login">aquí</Link>.
              </Text>
            </div>
          </Col>
        </Row>
        <div className="dr">
          <Text keyboard>
            Copyrights © 2022 Walter Daniel Carrizo. Todos los derechos
            reservados.
          </Text>
        </div>
      </div>
    </div>
  );
};
