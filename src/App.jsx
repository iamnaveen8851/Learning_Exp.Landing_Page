import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import AllRoutes from "./components/AllRoutes";
function App() {
  return (
    <>
      <Navbar />
       <AllRoutes/>
      <Home />
      <Footer />

    </>
  );
}

export default App;
