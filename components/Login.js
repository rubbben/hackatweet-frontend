import styles from '../styles/Home.module.css';
import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Input } from 'antd';
import { useRouter } from 'next/router';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../reducers/user'

function Login() {
  const urlBack = 'https://hackatweet-backend-eta.vercel.app'
  const router = useRouter();
  
  
  const [modal01pen, setModal01pen] = useState(false);
  const [modal02pen, setModal02pen] = useState(false);

  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  
//   console.log(useSelector(state => state.user.value ))

  const dispatch = useDispatch();
  

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
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}
        />
        <Input.Password
            placeholder="Password"
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}
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
            if (data.result) {
                console.log(data)
                dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token, userId: data._id }));
                setSignUpFirstname('');
                setSignUpUsername('');
                setSignUpPassword('');
                router.push('/home');
            }
        });
  };

  const handleConnection = () => {
    fetch(`${urlBack}/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
        .then(data => {
            if (data.result) {
                console.log(data)
                dispatch(login({ username: signInUsername, token: data.token, userId: data._id }));
                setSignInUsername('');
                setSignInPassword('');
                router.push('/home');
            }
        });
  };

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Hackatweet
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
            onOk={() => handleConnection()}
            onCancel={() => setModal02pen(false)}
        >
            {modalContentSignin}
        </Modal>
      </main>
    </div>
  );
}

export default Login;
