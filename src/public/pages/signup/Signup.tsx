import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = () => {
    const { username, password, confirmPassword } = formData;
    if (!username || !password || !confirmPassword) {
      message.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      message.error('Passwords do not match');
      return;
    }
  };

  return (
    <Form>
      <Form.Item label="Username">
        <Input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Confirm Password">
        <Input.Password
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSignup}>
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
