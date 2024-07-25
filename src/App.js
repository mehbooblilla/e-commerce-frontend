import { Toaster } from "react-hot-toast";
import "./App.css";
import MainRoutes from "./Components/routes/MainRoutes";
import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext()

function App() {
  const [user,setUser]=useState(null)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);
  return (
    <div>
         <AuthContext.Provider value={{ user, setUser }}>
      <MainRoutes />
      <Toaster position="top-right" reverseOrder={false} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
