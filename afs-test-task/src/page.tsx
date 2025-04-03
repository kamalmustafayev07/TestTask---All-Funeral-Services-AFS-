import { Route, Routes } from "react-router-dom";
import "./index.css";
import Companies from "./components/shared/Company/Companies";
import { useEffect } from "react";
import { useLazyGetAuthQuery } from "./services/companyApi";


function Home() {
  const [fetchAuth] = useLazyGetAuthQuery();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      fetchAuth("USERNAME"); 
    }
  }, [fetchAuth]);
  
  return (
    <Routes>
      <Route path="/company" element={<Companies />} />
    </Routes>
  );
}

export default Home;
