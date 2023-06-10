import { Route, Routes  } from "react-router-dom";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";


function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/user/signup" Component={UserSignup} />
      <Route path="/user/login" Component={UserLogin} />
      <Route path="/test" Component={Test} />
    </Routes>
  );
}

export default App;
