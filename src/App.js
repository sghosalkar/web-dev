import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import HomeScreen from "./components/Tuiter/home-screen";
import ExploreScreen from "./components/Tuiter/explore-screen";
import ProfileScreen from "./components/Tuiter/profile-screen";
import EditProfileScreen from "./components/Tuiter/profile-screen/edit-profile";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Labs />} />
            <Route path="labs" exact={true} element={<Labs />} />
            <Route path="hello" exact={true} element={<HelloWorld />} />
            <Route path="tuiter" element={<Tuiter/>}>
              <Route index element={<HomeScreen/>}/>
              <Route path="home" element={<HomeScreen/>}/>
              <Route path="explore" element={<ExploreScreen/>}/>
              <Route path="profile" element={<ProfileScreen/>}/>
              <Route path="edit-profile" element={<EditProfileScreen/>}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

