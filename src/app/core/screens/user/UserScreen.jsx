import { useAuth } from "../../hooks/useAuth";

import Header from "../../layout/header/Header";


const UserScreen = () => {
  const { user, loading, error } = useAuth();
  
  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{`Error: ${error.message}`}</p>;
  }

  if (!user) {
    return <p>User not found or not authenticated</p>; 
  }

  return (
    <>
      <Header title="PROFILE" />
      <h1>Welcome, {user.name}</h1>
    </>
  );
};

export default UserScreen;