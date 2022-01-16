import './Login.style.css'
import { useState, useEffect } from 'react';
import * as apiService from "../../api/index";
import {useNavigate} from "react-router-dom"

interface Login {
  // id: string;
  name: string;
  email: string;
  password: string;
  // eventAttend: string[] | null;
  // eventAttended: string[] | null;
}

interface Profile {
  // id: string;
  name: string;
  email: string;
  password: string;
  eventAttend: string[] | null;
  eventAttended: string[] | null;
}

const Login = () => {

  let navigate = useNavigate()
  const [login, setLogin] = useState<Login[]>([])
  const [emailEntered, setEmailEntered] = useState('')
  const [passwordEntered, setPasswordEntered] = useState('')
  const [profile, setProfile] = useState<Profile[]>([])
  // const [menu, setMenu] = useState(true)

  const loadLogin = async () => {
    const res = await apiService.postLogin(
      emailEntered,
      passwordEntered,
    );
    if( "user" in res ){
      localStorage.setItem("email", res.user.email)
      // setMenu(false)
      const response = await apiService.getProfile(res.user.email);
      console.log("profile", response);
      
      setProfile(response);
      

      navigate("/")
      window.location.reload();
      // location.reload()
    } else {
      console.log("failed login");
    }
    setLogin(res)
  };

  // const refresch = () => {

  //   if (localStorage.getItem("email") !== null) {
  //     navigate("/profile")
      
  //   }
  // }
   

  useEffect(() => {
    
    loadLogin();
   
  }, []);

  // useEffect(() => {
  //   let isMounted = true
  //   loadLogin().then(login => {
  //     if(isMounted) setState(login)
  //   });
   
  // }, []);

  return (
    <div className='login'>
      <input type="text" placeholder="email" onChange={(e) => setEmailEntered(e.target.value)} />
      <input type="text" placeholder="password"  onChange={(e) => setPasswordEntered(e.target.value)} />
      {/* <button type='button' onClick={loadLogin}>Login</button> */}
      <button type='button' onClick={() => {loadLogin()}}>Login</button>
    </div>
  );
};

export default Login