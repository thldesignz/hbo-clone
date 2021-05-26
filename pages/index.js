import Router from 'next/dist/next-server/lib/router/router';
import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '../components/HBOProvider';
import Login from '../components/UI/Login/login';


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect( () => {
    const loggedIn = false;
    if(loggedIn === false){
      router.push('/create')
    }
  },[])
  return (
    <div>
      <Login />
    </div>
  )
}
