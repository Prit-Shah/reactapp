import Hellopage from "./comp/Hellopage";
import Navbar from "./comp/Navbar";
import Animes from "./comp/Animes";
import Footer from "./comp/Footer";
import { Routes, Route } from "react-router-dom";
import Someusers from "./comp/Someusers";
import Pageprit from "./comp/Pageprit";
import Pageprabhat from "./comp/Pageprabhat";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hellopage></Hellopage>} />
        <Route path="anime" element={<Animes></Animes>} />
        <Route path="users" element={<Someusers></Someusers>} />
        <Route path="pageprit" element={<Pageprit></Pageprit>}></Route>
        <Route path="pageprabhat" element={<Pageprabhat></Pageprabhat>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
