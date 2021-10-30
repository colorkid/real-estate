import React from 'react';
import { Button, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import Auth from '../../store/auth';
import { observer } from 'mobx-react-lite';
import { userDataRequestType } from '../../services/auth';
import Loader from '../Loader';

const LoginForm = observer(() => {
  const history = useHistory();

  if (Auth.isAuthed) {
    history.push('/profile');
  }

  const [form] = Form.useForm();

  const handleLogin = () => {
    form.validateFields().then((values: userDataRequestType) => Auth.signIn(values));
  };

  const handleRegister = () => {
    form.validateFields().then((values: userDataRequestType) => Auth.singUp(values));
  };

  return (
    <>
      {Auth.isFetching ? (
        <Loader />
      ) : (
        <Form
          name="login"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: '320px' }}
        >
          <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, min: 8 }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={handleLogin} style={{ marginRight: '16px' }}>
              Login
            </Button>
            <Button type="primary" onClick={handleRegister}>
              Register
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
});

export default LoginForm;
