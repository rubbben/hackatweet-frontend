import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Input } from 'antd';

function Login() {
  const [modal01pen, setModal01pen] = useState(false);
  const [modal02pen, setModal02pen] = useState(false);

  let modalContentSignup = (
    <>
        <Input 
            placeholder="Firstname"
            prefix={<UserOutlined className="site-form-item-icon" />}
        />
        <Input
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
        />
        <Input.Password placeholder="Password" />
    </>
  );

  let modalContentSignin = (
    <>
        <Input 
            placeholder="Firstname"
            prefix={<UserOutlined className="site-form-item-icon" />}
        />
        <Input
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
        />
    </>
  );

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Button type="primary" onClick={() => setModal01pen(true)}>
        Sign up
        </Button>
        <Modal
            title="Create your Hackatweet account"
            centered
            open={modal01pen}
            onOk={() => setModal01pen(false)}
            onCancel={() => setModal01pen(false)}
        >
            {modalContentSignup}
        </Modal>

        <Button type="primary" onClick={() => setModal02pen(true)}>
        Sign in
        </Button>
        <Modal
            title="Connect to Hackatweet"
            centered
            open={modal02pen}
            onOk={() => setModal02pen(false)}
            onCancel={() => setModal02pen(false)}
        >
            {modalContentSignin}
        </Modal>
      </main>
    </div>
  );
}

export default Login;
