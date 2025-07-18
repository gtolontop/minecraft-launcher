import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    window.api.login({ username, password });
  };

  return (
    <div className="login-form">
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
    </div>
  );
}
