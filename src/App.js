import Hellopage from "./comp/Hellopage";
import Goodmorning from "./comp/Goodmorning";
import Navbar from "./comp/Navbar";
import Animes from "./comp/Animes";
import Footer from "./comp/Footer";
import { Routes, Route } from "react-router-dom";
import Someusers from "./comp/Someusers";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hellopage></Hellopage>} />
        <Route path="Good" element={<Goodmorning></Goodmorning>} />
        <Route path="anime" element={<Animes></Animes>} />
        <Route path="users" element={<Someusers></Someusers>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
