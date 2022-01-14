import './Login.style.css'
const Login = () => {
  return (
    <div className='login'>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button>Login</button>
    </div>
  );
};

export default Login