import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [formData, setFormData] = useState([]);
  const onFinish = (values) => {
    setFormData(values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ minWidth: "375px" }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Please input your Password!" },
          { min: 6, message: "Password must be at least 6 characters" },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link style={{ float: "right" }} className="login-form-forgot" to="">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
        <br /> Or <Link to="">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default Signin;
