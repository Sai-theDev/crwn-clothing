import { Routes,Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component"

import Home from "./routes/home/home.component"
import Signin from "./routes/sign-in/sign-in.component"

const Shop=()=>{
  return (<h1>I am Shop</h1>)
}

const App=()=>{
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<Signin />} />
        </Route>
      </Routes>
    );
}

export default App;
