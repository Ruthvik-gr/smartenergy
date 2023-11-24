import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { CommunityMarket } from "./pages/market/buyer";
import { PublicMarket } from "./pages/market/seller";
import { Investor } from "./pages/Invest/Investor";
import { Investee } from "./pages/Invest/investee";
import { Signin } from "./pages/Signin";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/signin";
    });
  };

  return (
    <>
      <Router>
        <Navigation isAuth={isAuth} signUserOut={signUserOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/community-market"
            element={<CommunityMarket isAuth={isAuth} />}
          />
          <Route
            path="/public-market"
            element={<PublicMarket isAuth={isAuth} />}
          />
          <Route path="/investor" element={<Investor isAuth={isAuth} />} />
          <Route path="/investee" element={<Investee isAuth={isAuth} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin setIsAuth={setIsAuth} />} />
          {/* <Route path="/payment" element={<payment />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
