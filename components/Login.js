import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Input } from 'antd';

function Login() {
  const [modal01pen, setModal01pen] = useState(false);
  const [modal02pen, setModal02pen] = useState(false);

  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [signInFirstname, setSignInFirstname] = useState('');
  const [signInUsername, setSignInUsername] = useState('');


  const urlBack = 'https://hackatweet-backend-eta.vercel.app'

  let modalContentSignup = (
    <>
        <Input 
            placeholder="Firstname"
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}
        />
        <Input
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}
        />
        <Input.Password 
            placeholder="Password" 
            onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}
        />
    </>
  );

  let modalContentSignin = (
    <>
        <Input 
            placeholder="Firstname"
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={(e) => setSignInFirstname(e.target.value)} value={setSignInFirstname}
        />
        <Input
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={(e) => setSignInUsername(e.target.value)} value={setSignInUsername}
        />
    </>
  );


  const handleRegister = () => {
    fetch(`${urlBack}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
    }).then(response => response.json())
        .then(data => {
            if (data) {
                console.log(data)
                // dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
                setSignUpFirstname('');
                setSignUpUsername('');
                setSignUpPassword('');
            }
        });
  };

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
            onOk={() => handleRegister()}
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
