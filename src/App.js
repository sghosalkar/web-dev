import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/Labs";
import HomeScreen from "./components/Tuiter/home-screen";
import ExploreScreen from "./components/Tuiter/explore-screen";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello" exact={true} element={<HelloWorld />} />
          <Route path="/" exact={true} element={<Labs />} />
          <Route path="/labs" exact={true} element={<Labs />} />
          <Route path="/tuiter/home" element={<HomeScreen/>}/>
          <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

