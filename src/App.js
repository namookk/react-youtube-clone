import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from "./pages/Explore";
import Subscription from "./pages/Subscription";
import Assignment from "./pages/Assignment";
import React, {useState } from 'react';

function App() {
    const [flag, setFlag] = useState(false);
    function changeFlag(){
        setFlag(flag => !flag);
    }
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/assignment" element={<Assignment flag={flag} onclickfn={changeFlag}/>}/>
      </Routes>
  );
}

export default App;
