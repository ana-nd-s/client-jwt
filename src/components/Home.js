import React from "react";
import UrlConfig from "../config";
import { useStoreActions } from "easy-peasy";

const Home = ({ history }) => {
  const setIsAuthorised = useStoreActions(actions => actions.setIsAuthorised);

  const handleLogout = () => {
    const logout = `${UrlConfig.BASE_URL}/user/logout`
    const options = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
    fetch(logout, options).then(() => {
      setIsAuthorised(false)
      history.push('/login')
    }
    )
  };

  return (
    <div>
      <div className="appbar">
        <p className="header-title">Home</p>
        <button className="header-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;