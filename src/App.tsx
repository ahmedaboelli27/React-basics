import { useState } from 'react';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import Form from './Components/form/Form';
import UserDetails from './Components/userDetails/userDetails';  // Corrected component name
import { IuserData } from "../src/Components/Interfaces";

const App = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [userData, setUserData] = useState<IuserData>({
    username: '',
    address: '',
    email: '',
    phone: '',
    password: '',
  });

  return (
    <>
      <Navbar />
      {login ? <UserDetails user={userData}/> : <Form setLoginName={setLogin} loginName={login} setuserData={setUserData} userData={userData} />}
    </>
  );
};

export default App;
