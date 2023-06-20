import logo from "./logo.svg";
import "./App.css";
import Alert from "./Components/Alert/Alert";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Alert />
      <Footer/>
    </div>
  );
}

export default App;
