import Head from "next/head";
import { useState , useEffect} from 'react';
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from "../../Hooks/useMounted";

const Login = () => {
  const globalState = useStateContext();
  //initiate router
  const router = useRouter();
  //loading users and since we are initially set it to  true
  const[loadingUsers, setloadingUsers] = useState(false);
  let users = ls('users') !==null ? ls('users') : []
  let {hasMounted} = useMounted();

  useEffect(() => {
    if(users < 1) {
      setloadingUsers(false)
    }
    console.log('load effect', users)
  }, [])

  console.log('declared users', users)
  const selectUser = (id) => {
    ls('activeUID', id)
    router.push('/')
  }
  const showUsers = () => {
    if(!loadingUsers){
      return users.map((user) => {
        return(
          <div onClick={() => selectUser(user.id)} className="login-user__user-box" key={user.id} >
          <img
            className="login-user__user-img"
            src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          />
          <div className="login-user__user-name">{user.user}</div>
        </div>
        )
      })
    }
  }

  const createUser = () => {
    router.push('/')
  }

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>

      <div className="login-user__form">
        {hasMounted ? showUsers() : ''}
      </div>

      <div className="login-user__buttons">
   
        <button className="login-user__kid" onClick={createUser}>Create User</button>
      </div>
    </div>
  );
};

export default Login;
