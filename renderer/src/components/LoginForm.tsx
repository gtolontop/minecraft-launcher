import React from 'react';

export const LoginForm: React.FC = () => {
  return (
    <div className="login-form">
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Login</button>
    </div>
  );
};
